# SmartProcure ML Service Contract

## 1. Purpose

This document defines communication between:

SmartProcure Backend
↓
Python ML Service
↓
XGBoost Waiting-Time Prediction Model

The ML service is developed and maintained by the AI/ML team.

The backend must not contain the XGBoost model.

---

# 2. ML Technology

Python
FastAPI
XGBoost Regressor
Scikit-learn
Pandas
NumPy

The AI/ML team is responsible for:

- Data preprocessing
- Feature engineering
- Model training
- Model comparison
- Model evaluation
- XGBoost selection
- Model serialization
- Prediction API

The backend is responsible for:

- Sending prediction requests
- Receiving predictions
- Handling ML-service errors
- Using predictions in queue/recommendation logic

---

# 3. Prediction Flow

Farmer books a slot
↓
Backend receives booking
↓
Backend obtains current queue data
↓
Backend sends features to ML service
↓
FastAPI
↓
XGBoost
↓
Predicted waiting time
↓
Backend
↓
Frontend

---

# 4. Prediction Endpoint

POST /predict

ML Service URL is configured through:

ML_SERVICE_URL

Example:

ML_SERVICE_URL=http://localhost:8000

Do NOT hardcode the URL in application code.

---

# 5. Request

Example:

{
"centre_id": "C001",
"queue_length": 18,
"farmers_ahead": 12,
"active_counters": 3,
"processing_rate": 4.5,
"available_capacity": 40,
"crop_type": "Paddy",
"scheduled_farmers": 15
}

The exact feature set must be finalized jointly by the AI/ML and Backend teams based on the trained model.

---

# 6. Response

Example:

{
"predicted_waiting_time": 42.5,
"unit": "minutes",
"model": "XGBoost"
}

Optional:

{
"model_version": "1.0"
}

---

# 7. Validation

The ML service must validate:

- Required fields
- Numeric values
- Valid centre information
- Valid queue values
- Valid processing rate

Invalid requests should return an appropriate HTTP error.

---

# 8. ML Model

Primary selected model:

XGBoost Regressor

The AI/ML team must compare suitable regression algorithms before finalizing the model.

Possible comparison:

- Linear Regression
- Random Forest Regressor
- Gradient Boosting Regressor
- XGBoost Regressor

Model selection should be based on measured validation/test performance.

Do NOT claim that XGBoost is the best model without experimental results.

---

# 9. Evaluation Metrics

The AI/ML team should evaluate models using:

MAE
RMSE
R²

The final model should be selected using the project's validation/testing results.

The test dataset must remain separate from training.

---

# 10. Error Handling

If the ML service is unavailable:

Backend must:

- catch the connection error
- log the error
- return a controlled response
- keep the main application running

The backend must never crash because the ML service is temporarily unavailable.

---

# 11. Model Versioning

The ML service should expose model information where practical.

Example:

{
"model": "XGBoost",
"version": "1.0"
}

When the model is retrained or replaced, the version should be updated.

---

# 12. Separation of Responsibilities

BACKEND:

- REST APIs
- Authentication
- Database
- Booking
- Queue
- Notifications
- Business logic
- ML API integration

AI/ML:

- Dataset
- Preprocessing
- Feature engineering
- Model training
- Algorithm comparison
- XGBoost model
- Evaluation
- Prediction API

---

# 13. Final Architecture

                    FRONTEND
                        |
                        ↓
                  NODE BACKEND
                        |
             ┌──────────┴──────────┐
             ↓                     ↓
        PostgreSQL               Redis
             |
             |
             ↓
        ML SERVICE
             |
             ↓
          FastAPI
             |
             ↓
       XGBoost Regressor
             |
             ↓

Predicted Waiting Time
|
↓
BACKEND
|
↓
FRONTEND

---

# 14. Important Integration Rule

The backend and ML service must communicate through a documented API.

Do NOT:

- copy the ML model into Node.js
- hardcode model predictions
- create fake prediction values
- claim experimental accuracy without test results
- change the ML input features without updating this contract

Any change to the ML API must be documented here.
