import pandas as pd 
"""
Prediction Pipeline Service

Responsible for:
- Loading artifacts
- Preprocessing incoming data
- Running model inference
- Returning prediction

"""

from pathlib import Path
import joblib
import json

class PredictionPipeline:
    '''
    Enterprise Prediction Pipeline Service

    '''
    def __init__(self):
        self.model = None
        self.label_encoders = None
        self.feature_columns = None
        self.threshold = None
        self.metadata = None

        self.load_artifacts()

    def load_artifacts(self):
        '''
        Load model artifacts from disk
        ''' 

        artifacts_path = Path(__file__).resolve().parents[2] / 'artifacts'

        self.model = joblib.load(artifacts_path / 'xgboost_model.pkl')
        self.label_encoders = joblib.load(artifacts_path / 'label_encoders.pkl')
        self.feature_columns = joblib.load(artifacts_path / 'model_features.pkl')
        self.threshold = joblib.load(artifacts_path / 'optimal_threshold.pkl')


        with open(artifacts_path / 'model_metadata.json', 'r') as f:
            self.metadata = json.load(f)

    
    def preprocess(self, data):
        '''
        Preprocess incoming data for model inference
        '''
        df = pd.DataFrame([data])  # Convert incoming data to DataFrame
        #for column, encoder in self.label_encoders.items():
          #  if column in df.columns:
            #    df[column] = encoder.transform(df[column])
        
        missing_features = set(self.feature_columns) - set(df.columns)
        if missing_features:
            raise ValueError(
                f"Missing required features: {sorted(missing_features)}"
                        )

        extra_features = set(df.columns) - set(self.feature_columns)

        if extra_features:
                df = df.drop(columns=list(extra_features))

                  
        df = df[self.feature_columns]
        
        return df
    
    def predict(self, data):
        '''
        Run model inference on preprocessed data
        '''
        processed_data = self.preprocess(data)

        probability = self.model.predict_proba(processed_data)[0][1]  # Probability of the positive class
        prediction = int(probability >= self.threshold)  # Apply threshold to get binary prediction

        prediction_label = self.metadata['positive_class'] if prediction == 1 else self.metadata['negative_class']

        return {
            
            'prediction': prediction,
            'prediction_label': prediction_label,
            'probability': round(float(probability), 4)  # Round to 4 decimal places
        }