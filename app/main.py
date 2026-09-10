import json
import joblib
import pandas as pd
import numpy as np
from pathlib import Path
from fastapi import FastAPI, HTTPException
from app.schemas import WaitTimeRequest, WaitTimeResponse

app = FastAPI(
    title="SmartProcure ML Service",
    description="API for predicting waiting time and congestion levels at procurement centres",
    version="1.0.0"
)

# Resolve project root path dynamically
BASE_DIR = Path(__file__).resolve().parent.parent
MODEL_PATH = BASE_DIR / "models" / "wait_time_model.joblib"
METADATA_PATH = BASE_DIR / "models" / "metadata.json"

try:
    model = joblib.load(MODEL_PATH)
    with open(METADATA_PATH, "r") as f:
        metadata = json.load(f)
except Exception as e:
    model = None
    metadata = {}

def calculate_derived_features(df: pd.DataFrame) -> pd.DataFrame:
    df = df.copy()
    service_capacity = np.maximum(df['active_counters'] * df['processing_rate'], 0.1)
    df['queue_pressure'] = df['queue_length'] / service_capacity
    df['utilization_rate'] = df['queue_length'] / np.maximum(df['capacity'], 1.0)
    df['tokens_per_counter'] = df['queue_length'] / np.maximum(df['active_counters'], 1.0)
    return df

def derive_congestion_level(queue_length: int, capacity: int, utilization_rate: float) -> str:
    if utilization_rate < 0.3:
        return "LOW"
    elif utilization_rate < 0.6:
        return "MODERATE"
    elif utilization_rate < 0.85:
        return "HIGH"
    return "CRITICAL"

def get_reliability_indicator(mae: float) -> str:
    if mae <= 5.0:
        return "HIGH"
    elif mae <= 10.0:
        return "MEDIUM"
    return "LOW"

@app.get("/health")
def health_check():
    return {
        "status": "ok",
        "service": "SmartProcure ML Service",
        "model_loaded": model is not None
    }

@app.post("/predict/wait-time", response_model=WaitTimeResponse)
def predict_wait_time(request: WaitTimeRequest):
    if model is None:
        raise HTTPException(status_code=500, detail="ML Model not loaded.")
    
    input_data = pd.DataFrame([request.model_dump()])
    processed_data = calculate_derived_features(input_data)
    
    # Ensure correct feature alignment
    expected_features = metadata.get("features", [])
    if expected_features:
        processed_data = processed_data[expected_features]
        
    raw_prediction = model.predict(processed_data)[0]
    
    # Rule-based post-processing guardrail (no negative waiting time)
    predicted_wait = max(0.0, float(round(raw_prediction, 1)))
    
    utilization_rate = float(processed_data['utilization_rate'].iloc[0])
    congestion = derive_congestion_level(request.queue_length, request.capacity, utilization_rate)
    mae = metadata.get("validation_metrics", {}).get("MAE", 10.0)
    reliability = get_reliability_indicator(mae)
    
    return WaitTimeResponse(
        predicted_wait_minutes=predicted_wait,
        reliability=reliability,
        congestion_level=congestion
    )