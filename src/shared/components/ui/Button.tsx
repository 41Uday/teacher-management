import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";
import Loader from "./Loader";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  loading?: boolean;
  fullWidth?: boolean;
}

const Button = ({
  children,
  className,
  variant = "primary",
  disabled,
  loading = false,
  fullWidth = false,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-60",
  };

  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        baseStyles,
        variants[variant],
        fullWidth && "w-full",
        "px-5 py-2.5 text-base", // Better size
        className
      )}
      {...props}
    >
      {loading ? <Loader className="h-4 w-4 text-white animate-spin" /> : children}
    </button>
  );
};

export default Button;
