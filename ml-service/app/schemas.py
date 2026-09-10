from pydantic import BaseModel, Field


class WaitTimeRequest(BaseModel):
    queue_length: int = Field(..., ge=0)
    processing_rate: float = Field(..., gt=0)
    active_counters: int = Field(..., ge=1)
    capacity: int = Field(..., ge=1)
    hour: int = Field(..., ge=0, le=23)
    day_of_week: int = Field(..., ge=0, le=6)
    current_arrivals: int = Field(0, ge=0)
    number_of_tokens: int = Field(0, ge=0)
    completed_tokens: int = Field(0, ge=0)


class WaitTimeResponse(BaseModel):
    predicted_wait_minutes: float
    reliability: str
    congestion_level: str