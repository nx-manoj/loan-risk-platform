from fastapi import APIRouter, HTTPException, status

from app.core.logger import get_logger
from app.schemas.prediction import LoanRequest, PredictionResponse
from app.services.prediction_pipeline import PredictionPipeline

router = APIRouter()
pipeline = PredictionPipeline()
logger = get_logger(__name__)


@router.post("/predict", response_model=PredictionResponse)
def predict(data: LoanRequest):
    payload = data.model_dump()
    logger.info("Incoming prediction request | feature_count=%s", len(payload))
    try:
        prediction_result = pipeline.predict(payload)
        logger.info(
            "Prediction success | prediction=%s | probability=%s",
            prediction_result["prediction"],
            prediction_result["probability"],
        )
        return prediction_result
    except ValueError as exc:
        logger.warning("Prediction failure | reason=%s", str(exc))
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(exc),
        ) from exc
    except Exception as exc:
        logger.exception("Prediction failure | unexpected error")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Prediction failed due to internal server error",
        ) from exc