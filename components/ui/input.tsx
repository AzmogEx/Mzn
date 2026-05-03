import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "corporate";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "default", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-lg border border-[#0A0A0A]/12 bg-white px-4 py-3 text-sm text-[#0A0A0A] placeholder:text-[#0A0A0A]/35 transition-all duration-300",
          "focus:outline-none focus:ring-2 focus:ring-[#C9A66B]/25 focus:border-[#C9A66B]/50",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
