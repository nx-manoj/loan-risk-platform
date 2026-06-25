import { useCallback, useState } from "react";

import { LoanRequest, PredictionResponse } from "../types/prediction";
import { parseApiErrorMessage, predictLoanRisk } from "../services/predictionService";

interface UsePredictionResult {
  isLoading: boolean;
  error: string | null;
  result: PredictionResponse | null;
  submitPrediction: (payload: LoanRequest) => Promise<void>;
}

export const usePrediction = (): UsePredictionResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<PredictionResponse | null>(null);

  const submitPrediction = useCallback(async (payload: LoanRequest): Promise<void> => {
    setIsLoading(true);
    setError(null);
    try {
      const prediction = await predictLoanRisk(payload);
      setResult(prediction);
    } catch (requestError) {
      setResult(null);
      setError(parseApiErrorMessage(requestError));
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    error,
    result,
    submitPrediction,
  };
};
