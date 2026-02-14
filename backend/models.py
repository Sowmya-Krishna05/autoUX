from pydantic import BaseModel


class OptimizeRequest(BaseModel):
    device_score: float
    network_score: float
    session_type: str
    traffic_source: str


class OptimizeResponse(BaseModel):
    variant: str


class EventRequest(BaseModel):
    variant: str
    conversion: int
