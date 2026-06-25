from fastapi import FastAPI, HTTPException
from fastapi.exceptions import RequestValidationError

from app.api.routes import router
from app.core.exception_handlers import (
    generic_exception_handler,
    http_exception_handler,
    validation_exception_handler,
)
from app.core.logger import get_logger

logger = get_logger(__name__)

app = FastAPI(
    title="Enterprise Loan Risk Prediction API",
    description="This API provides loan risk prediction services for enterprise applications.",
    version="1.0.0",
)

app.add_exception_handler(HTTPException, http_exception_handler)
app.add_exception_handler(RequestValidationError, validation_exception_handler)
app.add_exception_handler(Exception, generic_exception_handler)

app.include_router(router)


@app.get("/")
def root():
    logger.info("Root endpoint accessed")
    return {"message": "Welcome to the Enterprise Loan Risk Prediction API!"}


@app.get("/health")
def health_check():
    logger.info("Health check endpoint accessed")
    return {"status": "healthy"}
