import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-32 cursor-pointer overflow-hidden rounded-full border bg-background p-2 text-center font-semibold group-hover:bg-primary",
        className,
      )}
      {...props}
    >
      <span className="inline-block translate-x-2 transition-all duration-500 ease group-hover:translate-x-24 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-24 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-500 ease group-hover:-translate-x-12 group-hover:opacity-100">
        <span>{text}</span>
        <ArrowRight />
      </div>
      <div className="absolute left-1/2 top-1/2 h-4 w-4 rounded-lg bg-primary transition-all duration-500 ease group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[2] group-hover:bg-primary transform -translate-x-1/2 -translate-y-1/2 z-5"></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };