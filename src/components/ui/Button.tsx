// src/components/ui/Button.tsx
import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
    isExternal?: undefined;
  };

type ButtonAsAnchor = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    isExternal?: boolean;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export const Button = forwardRef<HTMLElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded transition-all duration-150 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none";

    const variantStyles = {
      primary: "bg-[#f1f5f9] text-[#090a0f] hover:bg-[#ffffff] font-semibold active:scale-[0.98]",
      secondary: "bg-[#171b26] text-[#f1f5f9] hover:bg-[#1e2433] border border-[#262f40] active:scale-[0.98]",
      outline: "border border-[#262f40] text-[#cbd5e1] hover:bg-[#141824] hover:text-[#f8fafc]",
      ghost: "text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-[#151924]",
    }[variant];

    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 gap-1.5",
      md: "text-sm px-4 py-2 gap-2",
      lg: "text-base px-6 py-3 gap-2.5",
    }[size];

    const combinedClassName = cn(baseStyles, variantStyles, sizeStyles, className);

    if ("href" in props && typeof props.href === "string") {
      const { href, isExternal, ...anchorProps } = props;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className={combinedClassName}
          {...anchorProps}
        />
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      />
    );
  }
);

Button.displayName = "Button";