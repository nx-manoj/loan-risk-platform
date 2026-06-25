import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { FeatureGrid } from "../components/FeatureGrid";
import { Button } from "../components/common/Button";

export const LandingPage = () => (
  <div className="space-y-12">
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-brand-600/30 p-8 shadow-card md:p-12"
    >
      <div className="max-w-3xl space-y-5">
        <p className="inline-flex rounded-full bg-brand-500/20 px-3 py-1 text-xs font-medium text-brand-400">
          Enterprise Loan Risk Intelligence Platform
        </p>
        <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">
          Predict loan default risk with production-ready ML intelligence
        </h1>
        <p className="text-base text-slate-300 md:text-lg">
          Leverage your fully integrated FastAPI inference backend through a modern
          dashboard focused on reliability, speed, and risk visibility for decision
          teams.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to="/predict">
            <Button>Start Prediction</Button>
          </Link>
          <Link to="/health">
            <Button className="bg-slate-800 hover:bg-slate-700">Check Backend Health</Button>
          </Link>
        </div>
      </div>
    </motion.section>

    <section className="space-y-5">
      <h2 className="text-2xl font-semibold text-white">Platform Highlights</h2>
      <FeatureGrid />
    </section>
  </div>
);
