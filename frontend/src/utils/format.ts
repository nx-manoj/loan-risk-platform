export const toPercent = (value: number): string => `${(value * 100).toFixed(2)}%`;

export const getRiskVariant = (prediction: number): "high" | "low" =>
  prediction === 1 ? "high" : "low";

export const riskLabel = (prediction: number): string =>
  prediction === 1 ? "Default Risk" : "Non-Default";
