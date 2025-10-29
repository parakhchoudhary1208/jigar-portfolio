"use client";

import * as React from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "px-2 py-0.5",
        sm: "px-2 py-0.5",
        lg: "px-3 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface BadgeBaseProps extends VariantProps<typeof badgeVariants> {
  asChild?: boolean;
  size?: "default" | "sm" | "lg";
  /** Optional link URL to make badge clickable */
  link?: string;
}

// Create a polymorphic component using forwardRef
export const Badge = React.forwardRef<
  HTMLSpanElement | HTMLAnchorElement,
  React.HTMLAttributes<HTMLSpanElement> & BadgeBaseProps
>(({ className, variant, size, asChild = false, link, ...props }, ref) => {
  if (link) {
    // If link provided → render Next.js <Link>
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={link}
        className={cn(badgeVariants({ variant, size }), className)}
        {...props}
      />
    );
  }

  const Comp = asChild ? Slot : "span";
  return (
    <Comp
      ref={ref as React.Ref<HTMLSpanElement>}
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
});

Badge.displayName = "Badge";

export { badgeVariants };
