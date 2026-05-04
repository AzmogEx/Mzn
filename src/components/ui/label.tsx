import * as React from "react";
import { cn } from "@/lib/utils";

export const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "block font-mono text-[10px] uppercase tracking-[0.32em] text-foreground-subtle",
      "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className,
    )}
    {...props}
  />
));
Label.displayName = "Label";
