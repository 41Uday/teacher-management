import { SVGProps } from "react";

interface LoaderProps extends SVGProps<SVGSVGElement> {}

const Loader = ({ className = "h-5 w-5 animate-spin text-white", ...props }: LoaderProps) => {
  return (
    <svg
      className={className} // ✅ now accepts custom classes
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
};

export default Loader;
