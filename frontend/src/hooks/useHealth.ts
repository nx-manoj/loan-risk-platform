import { useCallback, useEffect, useState } from "react";

import { checkBackendHealth } from "../services/predictionService";

interface UseHealthState {
  isLoading: boolean;
  isOnline: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

export const useHealth = (): UseHealthState => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async (): Promise<void> => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await checkBackendHealth();
      setIsOnline(response.status.toLowerCase() === "healthy");
    } catch {
      setIsOnline(false);
      setError("Backend service is currently unreachable.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  return {
    isLoading,
    isOnline,
    error,
    refresh,
  };
};
