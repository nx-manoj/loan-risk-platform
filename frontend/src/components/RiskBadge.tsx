interface RiskBadgeProps {
  prediction: number;
}

export const RiskBadge = ({ prediction }: RiskBadgeProps) => {
  const isDefaultRisk = prediction === 1;
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        isDefaultRisk
          ? "bg-rose-500/20 text-rose-300"
          : "bg-emerald-500/20 text-emerald-300"
      }`}
    >
      {isDefaultRisk ? "Default Risk" : "Non-Default"}
    </span>
  );
};
