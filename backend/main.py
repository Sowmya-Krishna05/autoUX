from fastapi import FastAPI
from app.bandit import ThompsonSamplingBandit
from app.models import OptimizeRequest, OptimizeResponse, EventRequest
from app.metrics import MetricsTracker

app = FastAPI()

bandit = ThompsonSamplingBandit()
metrics = MetricsTracker()


@app.post("/optimize", response_model=OptimizeResponse)
def optimize(req: OptimizeRequest):
    variant = bandit.choose_variant()
    metrics.log_impression(variant)

    return OptimizeResponse(variant=variant)


@app.post("/event")
def event(req: EventRequest):
    bandit.update(req.variant, req.conversion)

    if req.conversion == 1:
        metrics.log_conversion(req.variant)

    return {"status": "updated"}


@app.get("/metrics")
def get_metrics():
    return {
        "bandit_stats": bandit.get_stats(),
        "performance_metrics": metrics.get_metrics()
    }


@app.post("/disable-variant/{variant}")
def disable_variant(variant: str):
    bandit.disable_variant(variant)
    return {"status": f"{variant} disabled"}
