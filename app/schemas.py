from pydantic import BaseModel, Field

class WaitTimeRequest(BaseModel):
    queue_length: int = Field(..., ge=0, description="Number of farmers currently in queue")
    processing_rate: float = Field(..., gt=0, description="Processing rate in farmers per hour")
    active_counters: int = Field(..., ge=1, description="Number of active processing counters")
    capacity: int = Field(..., ge=1, description="Total capacity of the procurement centre")
    hour: int = Field(..., ge=0, le=23, description="Hour of the day (0-23)")
    day_of_week: int = Field(..., ge=0, le=6, description="Day of week (0=Mon, 6=Sun)")
    current_arrivals: int = Field(0, ge=0, description="Arrivals in the last hour")
    number_of_tokens: int = Field(0, ge=0, description="Total issued tokens")
    completed_tokens: int = Field(0, ge=0, description="Completed tokens today")

class WaitTimeResponse(BaseModel):
    predicted_wait_minutes: float
    reliability: str
    congestion_level: str