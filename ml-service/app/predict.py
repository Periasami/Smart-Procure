from pathlib import Path
import json
import joblib
import pandas as pd


# Project root: Smart-Procure-ML
BASE_DIR = Path(__file__).resolve().parents[2]

MODEL_PATH = BASE_DIR / "models" / "wait_time_model.joblib"
METADATA_PATH = BASE_DIR / "models" / "metadata.json"


# Load model
model = joblib.load(MODEL_PATH)

# Load metadata
with open(METADATA_PATH, "r") as f:
    metadata = json.load(f)


def predict_wait_time(input_data: dict) -> float:
    """
    Predict farmer waiting time using the trained XGBoost model.
    """

    data = pd.DataFrame([input_data])

    # Derived features used during training
    data["queue_pressure"] = (
        data["queue_length"]
        / (data["active_counters"] * data["processing_rate"]).clip(lower=0.1)
    )

    data["utilization_rate"] = (
        data["queue_length"]
        / data["capacity"].clip(lower=1)
    )

    data["tokens_per_counter"] = (
        data["queue_length"]
        / data["active_counters"].clip(lower=1)
    )

    # Use the exact feature order from metadata.json
    expected_features = metadata.get("features", [])

    if expected_features:
        data = data[expected_features]

    # XGBoost prediction
    prediction = model.predict(data)[0]

    # Prevent negative waiting time
    prediction = max(0.0, float(round(prediction, 1)))

    return prediction