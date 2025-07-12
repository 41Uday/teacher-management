import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: Props) {
  return (
    <div
      className={`bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md transition-all ${className}`}
    >
      {children}
    </div>
  );
}
