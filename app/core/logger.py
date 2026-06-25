import logging
from pathlib import Path


LOG_DIR = Path(__file__).resolve().parents[2] / "logs"
LOG_FILE = LOG_DIR / "app.log"
LOG_FORMAT = "%(asctime)s | %(levelname)s | %(name)s | %(message)s"


def _configure_base_logger() -> logging.Logger:
    LOG_DIR.mkdir(parents=True, exist_ok=True)

    base_logger = logging.getLogger("loan_risk_api")
    if base_logger.handlers:
        return base_logger

    base_logger.setLevel(logging.INFO)
    formatter = logging.Formatter(LOG_FORMAT)

    console_handler = logging.StreamHandler()
    console_handler.setFormatter(formatter)

    file_handler = logging.FileHandler(LOG_FILE, encoding="utf-8")
    file_handler.setFormatter(formatter)

    base_logger.addHandler(console_handler)
    base_logger.addHandler(file_handler)
    base_logger.propagate = False
    return base_logger


def get_logger(module_name: str) -> logging.Logger:
    _configure_base_logger()
    return logging.getLogger(f"loan_risk_api.{module_name}")
