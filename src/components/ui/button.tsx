import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-emerald-600 text-white shadow-[0_4px_20px_-4px_rgba(5,150,105,0.5)] hover:bg-emerald-500 active:scale-[0.98]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-stone-600 bg-transparent text-white shadow-none hover:bg-white/10",
        "outline-light":
          "border border-stone-300 bg-transparent text-stone-900 shadow-none hover:bg-stone-100",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "bg-transparent text-white shadow-none hover:bg-white/10 hover:text-white",
        "ghost-light":
          "bg-transparent text-stone-700 shadow-none hover:bg-stone-100 hover:text-stone-950",
        link: "text-primary underline-offset-4 hover:underline",
        text:
          "rounded-none bg-transparent px-0 py-0 text-stone-300 shadow-none hover:bg-transparent hover:text-white",
        "text-muted":
          "rounded-none bg-transparent px-0 py-0 text-stone-400 shadow-none hover:bg-transparent hover:text-stone-600",
        workflowTab:
          "justify-start rounded border border-stone-800/60 bg-stone-800/40 text-stone-300 shadow-none opacity-70 hover:border-stone-700 hover:bg-stone-800/70 hover:text-stone-300 hover:opacity-100",
        workflowTabActive:
          "justify-start rounded border border-emerald-500/40 bg-emerald-500/15 text-emerald-400 shadow-none hover:bg-emerald-500/15 hover:text-emerald-400",
      },
      size: {
        default: "h-11 px-7",
        sm: "h-9 rounded-xl px-4 text-[13px]",
        lg: "h-12 px-8 text-base",
        xl: "h-12 px-10 text-base",
        full: "h-11 w-full px-6 text-sm",
        fullLg: "h-12 w-full px-8 text-base",
        text: "h-auto gap-1.5 px-0 py-0 text-sm",
        workflowTab: "h-auto min-w-0 gap-1.5 px-2 py-1.5 text-[12px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
