import { motion } from "framer-motion";

import { Card } from "./common/Card";

const features = [
  {
    title: "Enterprise Risk Prediction",
    description:
      "Robust scoring powered by your trained XGBoost model and calibrated threshold logic.",
  },
  {
    title: "Operational Monitoring",
    description:
      "Built-in health checks and reliability surfaces for production readiness.",
  },
  {
    title: "Explainable Output",
    description:
      "Clear prediction label and probability score for business-aligned decisioning.",
  },
];

export const FeatureGrid = () => (
  <section className="grid gap-4 md:grid-cols-3">
    {features.map((feature, index) => (
      <motion.div
        key={feature.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
      >
        <Card className="h-full">
          <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
          <p className="mt-2 text-sm text-slate-300">{feature.description}</p>
        </Card>
      </motion.div>
    ))}
  </section>
);
