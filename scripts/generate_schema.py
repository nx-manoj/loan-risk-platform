from pathlib import Path
import joblib
import pandas as pd

# Project root
ROOT = Path(__file__).resolve().parents[1]

# Load artifacts
features = joblib.load(ROOT / "artifacts" / "model_features.pkl")

# Load processed dataset (change filename if needed)
df = pd.read_csv(ROOT / "data" / "processed" / "loan_data_processed.csv")

# Keep only model features
df = df[features]

# Map pandas dtypes to Python types
dtype_map = {
    "int64": "int",
    "float64": "float",
    "object": "str",
    "bool": "bool",
}

lines = [
    "from pydantic import BaseModel",
    "",
    "",
    "class LoanRequest(BaseModel):",
]

for column in features:
    dtype = str(df[column].dtype)
    python_type = dtype_map.get(dtype, "float")
    lines.append(f"    {column}: {python_type}")

lines.extend([
    "",
    "",
    "class PredictionResponse(BaseModel):",
    "    prediction: int",
    "    prediction_label: str",
    "    probability: float",
])

output_path = ROOT / "app" / "schemas" / "prediction.py"

with open(output_path, "w") as f:
    f.write("\n".join(lines))

print(f"✅ Schema generated successfully at: {output_path}")