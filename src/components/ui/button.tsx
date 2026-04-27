import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  [
    "inline-flex items-center gap-2.5 rounded-full font-semibold whitespace-nowrap",
    "transition-[transform,box-shadow,background-color,color] duration-300",
    "ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
    "[&_svg]:h-[18px] [&_svg]:w-[18px] [&_svg]:transition-transform [&_svg]:duration-300",
    "hover:[&_svg]:translate-x-[3px]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-navy text-cream shadow-[0_10px_24px_-10px_rgba(15,45,92,0.55)] hover:bg-navy-ink hover:-translate-y-0.5 hover:shadow-[0_16px_28px_-12px_rgba(15,45,92,0.6)]",
        ghost:
          "bg-transparent text-navy border border-navy/20 hover:border-navy hover:bg-paper",
        gold:
          "bg-gold text-navy-ink shadow-[0_12px_30px_-12px_rgba(193,154,91,0.8)] hover:bg-[#d5ac6b] hover:-translate-y-0.5",
        outline:
          "border border-navy text-navy bg-transparent hover:bg-navy hover:text-cream",
      },
      size: {
        md: "px-[22px] py-3 text-[14.5px]",
        lg: "px-7 py-4 text-[15.5px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
