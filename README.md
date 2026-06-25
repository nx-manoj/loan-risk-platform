# Enterprise Loan Risk Intelligence Platform

FastAPI backend for enterprise loan default risk prediction using pre-trained model artifacts.

## Installation

```bash
git clone <your-repo-url>
cd loan-risk-platform
```

## Virtual Environment

### Windows (PowerShell)

```bash
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

### macOS/Linux

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Running FastAPI

```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

## Swagger URL

- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## Docker Usage

### Build and run with Docker Compose

```bash
docker compose up --build
```

### Stop containers

```bash
docker compose down
```

## Running Tests

```bash
pytest -q
```

## API Example

### Health Check

```bash
curl -X GET "http://localhost:8000/health"
```

### Prediction Request

```bash
curl -X POST "http://localhost:8000/predict" \
  -H "Content-Type: application/json" \
  -d @notebooks/sample_request.json
```

### Prediction Response (example)

```json
{
  "prediction": 0,
  "prediction_label": "Fully Paid",
  "probability": 0.1234
}
```