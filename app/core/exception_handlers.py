from datetime import datetime, timezone

from fastapi import HTTPException, Request
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse

from app.core.logger import get_logger


logger = get_logger(__name__)


def _error_payload(message: str, status_code: int) -> dict:
    return {
        "success": False,
        "message": message,
        "status_code": status_code,
        "timestamp": datetime.now(timezone.utc).isoformat(),
    }


async def http_exception_handler(
    request: Request, exc: HTTPException
) -> JSONResponse:
    message = exc.detail if isinstance(exc.detail, str) else str(exc.detail)
    logger.warning(
        "HTTP exception on %s %s | status=%s | detail=%s",
        request.method,
        request.url.path,
        exc.status_code,
        message,
    )
    return JSONResponse(
        status_code=exc.status_code,
        content=_error_payload(message=message, status_code=exc.status_code),
    )


async def validation_exception_handler(
    request: Request, exc: RequestValidationError
) -> JSONResponse:
    logger.warning(
        "Validation error on %s %s | errors=%s",
        request.method,
        request.url.path,
        exc.errors(),
    )
    status_code = 422
    return JSONResponse(
        status_code=status_code,
        content=_error_payload(
            message="Request validation failed",
            status_code=status_code,
        ),
    )


async def generic_exception_handler(
    request: Request, exc: Exception
) -> JSONResponse:
    logger.exception(
        "Unhandled exception on %s %s",
        request.method,
        request.url.path,
    )
    status_code = 500
    return JSONResponse(
        status_code=status_code,
        content=_error_payload(
            message="Internal server error",
            status_code=status_code,
        ),
    )
