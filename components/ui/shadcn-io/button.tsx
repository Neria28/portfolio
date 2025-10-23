import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-(--primary-color) shadow-xs hover:bg-(--primary-color) hover:text-primary-foreground transition-colors duration-500",
        outline:
          "border bg-background shadow-xs hover:border-(--primary-color) hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:border-red-300 dark:hover:bg-input/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-4 py-3 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        xl: "h-12 rounded-md px-8 has-[>svg]:px-6",
        "2xl": "h-14 rounded-md px-10 has-[>svg]:px-8",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

function LinkButton({
  href,
  icon,
  className,
  variant = "link",
  size = "default",
  children,
  ...props
}: React.ComponentProps<"a"> &
  VariantProps<typeof buttonVariants> & {
    icon?: React.ReactNode;
  }) {
  return (
    <a
      href={href ?? ""}
      className={cn(
        "text-md flex items-center gap-2",
        buttonVariants({ variant, size, className })
      )}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {icon}
      {children}
    </a>
  );
}

export { Button, buttonVariants, LinkButton };
