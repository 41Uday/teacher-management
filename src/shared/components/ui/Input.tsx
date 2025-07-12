import { InputHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={clsx(
      "w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm",
      "focus:outline-none focus:ring-2 focus:ring-blue-500",
      "dark:bg-gray-800 dark:border-gray-700 dark:text-white",
      className
    )}
    {...props}
  />
));

Input.displayName = "Input";

export default Input;
