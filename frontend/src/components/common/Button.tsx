import { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const Button = ({
  children,
  className = "",
  isLoading = false,
  disabled,
  ...rest
}: ButtonProps) => (
  <button
    className={`inline-flex items-center justify-center rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-400 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
    disabled={disabled || isLoading}
    {...rest}
  >
    {isLoading ? "Please wait..." : children}
  </button>
);
