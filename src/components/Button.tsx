import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> { }

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "flex items-center justify-center h-12 w-12 text-lg text-zinc-500 border border-input rounded-md border-zinc-400 hover:text-zinc-50 hover:border-sky-500 hover:bg-sky-500 transition-colors disabled:pointer-events-none disabled:bg-zinc-300 disabled:opacity-40 focus-visible:outline-sky-500",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
