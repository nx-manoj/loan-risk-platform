import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

import { PredictionResultCard } from "../components/PredictionResultCard";
import { Button } from "../components/common/Button";
import { FormNumberField } from "../components/common/FormNumberField";
import { LoadingSkeleton } from "../components/common/LoadingSkeleton";
import { LoadingSpinner } from "../components/common/LoadingSpinner";
import { Card } from "../components/common/Card";
import { usePrediction } from "../hooks/usePrediction";
import { LoanRequest } from "../types/prediction";
import {
  DEFAULT_FORM_VALUES,
  FEATURE_SECTIONS,
  INTEGER_FIELDS,
} from "../utils/featureConfig";

export const PredictionPage = () => {
  const { isLoading, error, result, submitPrediction } = usePrediction();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoanRequest>({
    defaultValues: DEFAULT_FORM_VALUES,
    mode: "onBlur",
  });

  const onSubmit = async (values: LoanRequest) => {
    await submitPrediction(values);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Loan Risk Prediction</h1>
        <p className="mt-2 text-slate-300">
          Submit complete borrower and loan attributes to generate a risk prediction.
        </p>
      </div>

      <Card>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {FEATURE_SECTIONS.map((section) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {section.fields.map((field) => (
                  <FormNumberField
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    register={register}
                    errors={errors}
                    isInteger={INTEGER_FIELDS.includes(field.name)}
                  />
                ))}
              </div>
            </motion.section>
          ))}

          {error && (
            <div className="rounded-xl border border-rose-500/50 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">
              {error}
            </div>
          )}

          <div className="flex items-center gap-3">
            <Button type="submit" isLoading={isLoading} className="min-w-36">
              Submit Prediction
            </Button>
            {isLoading && <LoadingSpinner />}
          </div>
        </form>
      </Card>

      {isLoading && (
        <Card className="space-y-4">
          <LoadingSkeleton className="h-6 w-44" />
          <LoadingSkeleton className="h-20 w-full" />
          <LoadingSkeleton className="h-64 w-full" />
        </Card>
      )}

      {result && !isLoading && <PredictionResultCard result={result} />}
    </div>
  );
};
