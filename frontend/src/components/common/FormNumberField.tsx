import { FieldErrors, UseFormRegister } from "react-hook-form";

import { LoanRequest } from "../../types/prediction";

interface FormNumberFieldProps {
  name: keyof LoanRequest;
  label: string;
  register: UseFormRegister<LoanRequest>;
  errors: FieldErrors<LoanRequest>;
  isInteger?: boolean;
}

export const FormNumberField = ({
  name,
  label,
  register,
  errors,
  isInteger = false,
}: FormNumberFieldProps) => {
  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-slate-200">
        {label}
      </label>
      <input
        id={name}
        type="number"
        step={isInteger ? 1 : "any"}
        className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-brand-500"
        {...register(name, {
          required: `${label} is required`,
          valueAsNumber: true,
          validate: (value) =>
            Number.isFinite(value) || `${label} must be a valid number`,
        })}
      />
      {errorMessage && <p className="text-xs text-rose-400">{errorMessage}</p>}
    </div>
  );
};
