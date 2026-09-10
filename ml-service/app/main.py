from fastapi import FastAPI

from app.schemas import WaitTimeRequest, WaitTimeResponse
from app.predict import predict_wait_time


app = FastAPI(
    title="SmartProcure ML Service",
    description="ML service for crop procurement waiting-time prediction",
    version="1.0.0",
)


@app.get("/health")
def health_check():
    return {
        "status": "ok",
        "service": "SmartProcure ML Service",
        "model_loaded": True,
    }


@app.post("/predict/wait-time", response_model=WaitTimeResponse)
def predict_wait_time_endpoint(request: WaitTimeRequest):

    input_data = request.model_dump()

    predicted_wait = predict_wait_time(input_data)

    utilization_rate = (
        request.queue_length / max(request.capacity, 1)
    )

    if utilization_rate < 0.3:
        congestion = "LOW"
    elif utilization_rate < 0.6:
        congestion = "MODERATE"
    elif utilization_rate < 0.85:
        congestion = "HIGH"
    else:
        congestion = "CRITICAL"

    return WaitTimeResponse(
        predicted_wait_minutes=predicted_wait,
        reliability="HIGH",
        congestion_level=congestion,
    )