import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { Link } from "react-router-dom";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, ...props }, ref) => {
    const baseStyles =
      "inline-flex rounded-md items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-navy-900 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-gradient-to-r from-[#0057B8] via-[#007cdb] to-[#0EA5E9] text-white hover:brightness-110 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300",
      secondary: "bg-brand-blue text-white hover:bg-sky-600",
      outline: "border-2 border-navy-900 text-navy-900 hover:bg-navy-50",
      ghost: "text-navy-900 hover:bg-navy-50",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-8 text-base",
      lg: "h-14 px-10 text-lg",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <Link to={href} className={classes}>
          {props.children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props} />
    );
  }
);
Button.displayName = "Button";
