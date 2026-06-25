from app.services.prediction_pipeline import PredictionPipeline

pipeline = PredictionPipeline()

sample = {
    # We'll fill this with a real example in the next step
}

result = pipeline.predict(sample)

print(result)