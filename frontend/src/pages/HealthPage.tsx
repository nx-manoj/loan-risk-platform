import { motion } from "framer-motion";

import { Button } from "../components/common/Button";
import { LoadingSkeleton } from "../components/common/LoadingSkeleton";
import { Card } from "../components/common/Card";
import { useHealth } from "../hooks/useHealth";

export const HealthPage = () => {
  const { isLoading, isOnline, error, refresh } = useHealth();

  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-3xl font-bold text-white">Backend Health</h1>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="space-y-5">
          {isLoading ? (
            <>
              <LoadingSkeleton className="h-7 w-56" />
              <LoadingSkeleton className="h-5 w-72" />
            </>
          ) : (
            <>
              <p
                className={`text-xl font-semibold ${
                  isOnline ? "text-emerald-300" : "text-rose-300"
                }`}
              >
                {isOnline ? "Backend Online" : "Backend Offline"}
              </p>
              <p className="text-sm text-slate-300">
                {isOnline
                  ? "Service health endpoint is responding successfully."
                  : error ?? "Service health endpoint did not return a healthy status."}
              </p>
            </>
          )}
          <Button onClick={() => void refresh()} className="w-fit">
            Refresh Status
          </Button>
        </Card>
      </motion.div>
    </div>
  );
};
