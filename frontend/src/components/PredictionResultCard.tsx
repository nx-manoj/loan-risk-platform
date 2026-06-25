import { motion } from "framer-motion";

import { PredictionResponse } from "../types/prediction";
import { toPercent } from "../utils/format";
import { Card } from "./common/Card";
import { RiskBadge } from "./RiskBadge";
import { ProbabilityBarChart } from "./charts/ProbabilityBarChart";

interface PredictionResultCardProps {
  result: PredictionResponse;
}

export const PredictionResultCard = ({ result }: PredictionResultCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.25 }}
  >
    <Card className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-white">Prediction Result</h2>
        <RiskBadge prediction={result.prediction} />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400">Prediction</p>
          <p className="mt-2 text-lg font-semibold text-white">{result.prediction_label}</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400">Probability</p>
          <p className="mt-2 text-lg font-semibold text-white">
            {toPercent(result.probability)}
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400">Binary Class</p>
          <p className="mt-2 text-lg font-semibold text-white">{result.prediction}</p>
        </div>
      </div>

      <ProbabilityBarChart probability={result.probability} />
    </Card>
  </motion.div>
);
