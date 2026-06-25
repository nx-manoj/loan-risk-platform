# Enterprise Loan Risk Intelligence Platform

An end-to-end machine learning project for predicting loan default risk using XGBoost and FastAPI.

The project covers the complete ML workflow, including data preprocessing, model development, API deployment, testing, and a React frontend (currently under development).

## Features

* Data preprocessing and feature engineering
* Multiple baseline models
* XGBoost classifier
* Hyperparameter tuning
* Threshold optimization
* SHAP model explainability
* FastAPI REST API
* Pydantic request validation
* Logging and exception handling
* Automated tests with pytest
* Docker support

## Project Structure

```text
loan-risk-platform/
├── app/
├── artifacts/
├── data/
├── docs/
├── frontend/
├── notebooks/
├── reports/
├── src/
├── tests/
├── Dockerfile
├── docker-compose.yml
├── requirements.txt
└── README.md
```

## Installation

Clone the repository.

```bash
git clone https://github.com/<your-username>/loan-risk-platform.git
cd loan-risk-platform
```

Create a virtual environment and install dependencies.

### Windows

```bash
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
```

### Linux / macOS

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Running the API

```bash
uvicorn app.main:app --reload
```

Swagger UI:

```
http://localhost:8000/docs
```

Health endpoint:

```
http://localhost:8000/health
```

## Running Tests

```bash
python -m pytest
```

## Docker

Build the image.

```bash
docker build -t loan-risk-api .
```

Run the container.

```bash
docker run -p 8000:8000 loan-risk-api
```

## API

### GET /health

Returns the application health status.

### POST /predict

Accepts the processed loan features and returns:

```json
{
  "prediction": 0,
  "prediction_label": "Non-Default",
  "probability": 0.1234
}
```

## Current Status

* Phase 1 – Project Setup ✔
* Phase 2 – Exploratory Data Analysis ✔
* Phase 3 – Data Preprocessing & Feature Engineering ✔
* Phase 4 – Model Development & Evaluation ✔
* Phase 5 – Backend Development ✔
* Phase 6 – Frontend (In Progress)

## Tech Stack

**Machine Learning**

* Pandas
* NumPy
* Scikit-learn
* XGBoost
* SHAP

**Backend**

* FastAPI
* Pydantic
* Uvicorn

**Frontend**

* React
* TypeScript
* Tailwind CSS

**Testing**

* Pytest

**Containerization**

* Docker
