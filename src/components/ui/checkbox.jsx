import * as React from "react";
import { cn } from "@/lib/utils";

export function Checkbox({ className, ...props }) {
  return (
    <input
      type="checkbox"
      className={cn(
        "h-4 w-4 rounded border border-gray-300 text-primary focus:ring-primary focus:ring-2",
        className
      )}
      {...props}
    />
  );
}
