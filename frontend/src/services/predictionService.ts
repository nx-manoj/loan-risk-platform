import { AxiosError } from "axios";

import { api } from "./api";
import {
  ApiErrorResponse,
  HealthResponse,
  LoanRequest,
  PredictionResponse,
} from "../types/prediction";

export const predictLoanRisk = async (
  payload: LoanRequest
): Promise<PredictionResponse> => {
  const response = await api.post<PredictionResponse>("/predict", payload);
  return response.data;
};

export const checkBackendHealth = async (): Promise<HealthResponse> => {
  const response = await api.get<HealthResponse>("/health");
  return response.data;
};

export const parseApiErrorMessage = (error: unknown): string => {
  if (error instanceof AxiosError) {
    const errorData = error.response?.data as ApiErrorResponse | undefined;
    if (errorData?.message) {
      return errorData.message;
    }
    if (typeof error.message === "string" && error.message.trim().length > 0) {
      return error.message;
    }
  }
  return "Unable to complete the request. Please review inputs and try again.";
};
