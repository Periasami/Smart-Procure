# SmartProcure API Contract

## Project

SmartProcure – AI-Powered Predictive Crop Procurement & Queue Management System

## Purpose

This document defines the communication contract between:

Frontend → Backend → Database → AI/ML

All developers must follow these endpoint names and data structures during integration.

---

# 1. Authentication

## Register Farmer

POST /api/v1/auth/register

Request:

{
"name": "Farmer Name",
"phone": "9876543210",
"password": "**\*\*\*\***",
"preferred_language": "ta"
}

Response:

{
"success": true,
"data": {
"user_id": "USR001",
"role": "FARMER"
},
"message": "Registration successful"
}

---

## Login

POST /api/v1/auth/login

Request:

{
"phone": "9876543210",
"password": "**\*\*\*\***"
}

Response:

{
"success": true,
"data": {
"access_token": "JWT_TOKEN",
"user": {
"user_id": "USR001",
"role": "FARMER"
}
}
}

---

## Current User

GET /api/v1/auth/me

Authentication:

Bearer JWT

---

# 2. Farmer

## Get Farmer Profile

GET /api/v1/farmers/me

## Update Farmer Profile

PUT /api/v1/farmers/me

---

# 3. Procurement Centres

## Get All Centres

GET /api/v1/centres

## Get Centre

GET /api/v1/centres/:id

## Get Nearby Centres

GET /api/v1/centres/nearby?lat={latitude}&lng={longitude}&radius={km}

## Get Centre Status

GET /api/v1/centres/:id/status

Centre response should contain information such as:

- centre_id
- centre_name
- latitude
- longitude
- available_capacity
- processing_rate
- current_queue
- congestion_level
- operating_status

---

# 4. Schedules

## Get Schedules

GET /api/v1/schedules

## Get Centre Schedule

GET /api/v1/centres/:id/schedule

---

# 5. Digital Token / Booking

## Create Token

POST /api/v1/tokens

Request:

{
"centre_id": "C001",
"schedule_id": "SCH001",
"crop_type": "Paddy",
"quantity": 500
}

Response:

{
"success": true,
"data": {
"token_id": "TOK001",
"centre_id": "C001",
"queue_position": 15,
"predicted_waiting_time": 42,
"status": "WAITING"
}
}

---

## Get Token

GET /api/v1/tokens/:id

## Cancel Token

POST /api/v1/tokens/:id/cancel

---

# 6. Queue Management

## Get Queue

GET /api/v1/queue/:centreId

## Live Queue

GET /api/v1/queue/:centreId/live

Queue response:

{
"centre_id": "C001",
"current_token": "TOK023",
"waiting_count": 18,
"estimated_waiting_time": 42,
"congestion_level": "MEDIUM"
}

---

# 7. Real-Time Queue

The backend will provide real-time queue updates using WebSocket / Socket.IO.

Events:

queue:update

queue:position

queue:status

centre:congestion

token:called

token:completed

Frontend should listen for these events.

---

# 8. AI Waiting-Time Prediction

## Prediction

POST /api/v1/prediction/waiting-time

Backend communicates with the separate Python ML service.

Input:

{
"centre_id": "C001",
"queue_length": 18,
"farmers_ahead": 12,
"active_counters": 3,
"processing_rate": 4.5
}

Response:

{
"success": true,
"data": {
"predicted_waiting_time": 42,
"unit": "minutes",
"model": "XGBoost"
}
}

IMPORTANT:

The XGBoost model is owned by the AI/ML team.

The Node.js backend must NOT implement the XGBoost model itself.

---

# 9. Centre Recommendation

## Get Recommended Centres

GET /api/v1/recommendations/centres

Recommendation factors:

- Predicted waiting time: 40%
- Distance: 20%
- Available capacity: 15%
- Processing rate: 15%
- Crop compatibility: 10%

Example:

{
"success": true,
"data": {
"recommendations": [
{
"centre_id": "C001",
"score": 0.91,
"predicted_waiting_time": 18,
"distance_km": 3.2,
"available_capacity": 60
}
]
}
}

---

# 10. Rescheduling

## Get Rescheduling Recommendation

POST /api/v1/rescheduling/recommend

## Apply Rescheduling

POST /api/v1/rescheduling/apply

The recommendation should consider:

- queue congestion
- predicted waiting time
- available capacity
- distance
- crop compatibility
- available slots

---

# 11. Procurement Status

## Get Procurement Status

GET /api/v1/procurement/:tokenId

Possible statuses:

BOOKED

WAITING

IN_QUEUE

PROCESSING

PROCURED

PAYMENT_PENDING

PAYMENT_COMPLETED

---

# 12. Payment Status

## Get Payment Status

GET /api/v1/payments/:tokenId

Possible statuses:

PENDING

PROCESSING

PAID

FAILED

For the prototype, payment can be simulated.

---

# 13. Notifications

## Get Notifications

GET /api/v1/notifications

Notifications may be generated for:

- booking confirmation
- token reminder
- queue update
- centre congestion
- rescheduling
- token called
- procurement completion
- payment update

---

# 14. Voice Assistant

## Voice Query

POST /api/v1/voice/query

Request:

{
"language": "ta",
"text": "எனது டோக்கன் நிலை என்ன?"
}

Response:

{
"success": true,
"data": {
"intent": "TOKEN_STATUS",
"response": "Your token is currently waiting.",
"token_id": "TOK001"
}
}

The speech-to-text and text-to-speech systems may be provided by separate services.

The backend handles the application action.

---

# 15. Missed Call

## Missed Call Event

POST /api/v1/notifications/missed-call

Used for:

- missed-call detection
- SMS fallback
- notification retry

External telephony providers must be isolated inside a service layer.

---

# 16. Health Check

GET /api/v1/health

Response:

{
"success": true,
"service": "SmartProcure Backend",
"status": "healthy"
}

---

# 17. Standard API Response

Success:

{
"success": true,
"data": {},
"message": "Operation successful"
}

Error:

{
"success": false,
"error": {
"code": "ERROR_CODE",
"message": "Human-readable error message"
}
}

---

# 18. Authentication

Protected endpoints use:

Authorization: Bearer <JWT_TOKEN>

Roles:

FARMER

CENTRE_ADMIN

SYSTEM_ADMIN

---

# 19. System Flow

Farmer

↓

Registration / Login

↓

Select Crop

↓

Find Procurement Centres

↓

AI Waiting-Time Prediction

↓

Centre Recommendation

↓

Select Centre + Slot

↓

Digital Token

↓

Queue Management

↓

Real-Time Queue Updates

↓

Notifications

↓

Procurement

↓

Payment Status

---

# 20. Integration Rule

Frontend communicates ONLY with Backend APIs.

Frontend must NOT connect directly to PostgreSQL.

Backend communicates with PostgreSQL.

Backend communicates with the separate ML service.

ML service contains the XGBoost model.

PostgreSQL stores persistent application data.

Redis is used for real-time queue state/cache where required.

---

# 21. Development Ownership

Database:

database-dev

Backend:

backend-dev

Frontend:

frontend-dev

AI/ML:

ml-dev

Integration:

integration

Production/stable:

main

---

# 22. Important Rule

Any change to an API endpoint, request structure, response structure or important field name must be documented before integration.

The goal is to keep Frontend, Backend, Database and AI/ML compatible.
