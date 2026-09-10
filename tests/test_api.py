from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_health_endpoint():
    response = client.get("/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "ok"
    assert data["model_loaded"] is True

def test_predict_wait_time_valid():
    payload = {
        "queue_length": 25,
        "processing_rate": 5.0,
        "active_counters": 3,
        "capacity": 100,
        "hour": 10,
        "day_of_week": 2,
        "current_arrivals": 10,
        "number_of_tokens": 50,
        "completed_tokens": 25
    }
    response = client.post("/predict/wait-time", json=payload)
    assert response.status_code == 200
    
    data = response.json()
    assert "predicted_wait_minutes" in data
    assert "reliability" in data
    assert "congestion_level" in data
    assert data["predicted_wait_minutes"] >= 0.0

def test_predict_wait_time_invalid_payload():
    # Sending invalid queue_length (-5) to trigger validation error
    payload = {
        "queue_length": -5,
        "processing_rate": 5.0,
        "active_counters": 3,
        "capacity": 100,
        "hour": 10,
        "day_of_week": 2
    }
    response = client.post("/predict/wait-time", json=payload)
    assert response.status_code == 422