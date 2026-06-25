# 🚀 Enterprise Loan Risk Intelligence Platform

A production-ready end-to-end Machine Learning application for predicting loan default risk using **XGBoost**, **FastAPI**, and **React**. The project demonstrates the complete ML engineering lifecycle—from data preprocessing and model development to API deployment and frontend integration.

---

## ✨ Features

* 📊 Exploratory Data Analysis (EDA)
* 🧹 Data Preprocessing & Feature Engineering
* 🤖 Multiple Machine Learning Models
* 🚀 XGBoost Classifier with Hyperparameter Tuning
* 📈 ROC Curve & Precision-Recall Analysis
* 🎯 Threshold Optimization
* 🔍 SHAP Explainability
* ⚡ FastAPI REST API
* 📦 Model Artifact Management
* ✅ Pydantic Validation
* 📜 Automatic Swagger Documentation
* 📝 Centralized Logging
* 🛡 Global Exception Handling
* 🧪 Automated API Tests (Pytest)
* 🐳 Docker Support
* 🎨 React Frontend (In Progress)

---

# 🏗️ Project Structure

```text
loan-risk-platform/

├── app/
│   ├── api/
│   ├── core/
│   ├── schemas/
│   ├── services/
│   ├── utils/
│   └── main.py
│
├── artifacts/
│   ├── xgboost_model.pkl
│   ├── model_features.pkl
│   ├── optimal_threshold.pkl
│   ├── label_encoders.pkl
│   └── model_metadata.json
│
├── data/
├── frontend/
├── notebooks/
├── reports/
├── tests/
├── docs/
├── Dockerfile
├── docker-compose.yml
├── requirements.txt
└── README.md
```

---

# 🧠 Machine Learning Pipeline

```text
Raw Loan Data
      │
      ▼
EDA
      │
      ▼
Data Cleaning
      │
      ▼
Feature Engineering
      │
      ▼
Model Training
      │
      ▼
Hyperparameter Tuning
      │
      ▼
Model Evaluation
      │
      ▼
SHAP Explainability
      │
      ▼
Model Packaging
      │
      ▼
FastAPI Prediction API
      │
      ▼
React Frontend
```

---

# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/<your-username>/loan-risk-platform.git
cd loan-risk-platform
```

Create a virtual environment.

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

---

# 🚀 Running the Backend

```bash
uvicorn app.main:app --reload
```

Backend:

```
http://localhost:8000
```

Swagger UI:

```
http://localhost:8000/docs
```

ReDoc:

```
http://localhost:8000/redoc
```

---

# 🧪 Running Tests

```bash
python -m pytest
```

---

# 🐳 Docker

Build:

```bash
docker build -t loan-risk-api .
```

Run:

```bash
docker run -p 8000:8000 loan-risk-api
```

Or use Docker Compose:

```bash
docker compose up --build
```

---

# 📡 API Endpoints

| Method | Endpoint   | Description               |
| ------ | ---------- | ------------------------- |
| GET    | `/`        | Root endpoint             |
| GET    | `/health`  | Health check              |
| POST   | `/predict` | Predict loan default risk |

---

# 📌 Example Prediction Response

```json
{
    "prediction": 0,
    "prediction_label": "Non-Default",
    "probability": 0.1234
}
```

---

# 🛠️ Tech Stack

### Machine Learning

* Python
* Pandas
* NumPy
* Scikit-learn
* XGBoost
* SHAP

### Backend

* FastAPI
* Pydantic
* Uvicorn
* Joblib

### Frontend

* React
* TypeScript
* Tailwind CSS
* Axios
* React Hook Form

### DevOps

* Docker
* Pytest
* Git
* GitHub

---

# 📅 Project Roadmap

* ✅ Phase 1 — Project Setup
* ✅ Phase 2 — Exploratory Data Analysis
* ✅ Phase 3 — Data Preprocessing & Feature Engineering
* ✅ Phase 4 — Model Development & Evaluation
* ✅ Phase 5 — Production Backend Development
* 🚧 Phase 6 — React Frontend
* ⏳ Phase 7 — Cloud Deployment & CI/CD

---

# 👨‍💻 Author

**Manoj**

Enterprise Machine Learning & AI Engineering Project

---
