"use client";
import Link from "next/link";
import { type ComponentProps } from "react";
import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";

interface ButtonProps extends ComponentProps<"button"> {
  className?: string;
  children: React.ReactNode;
  as?: "button" | "link";
  href?: string;
  onClick?: () => void;
  pendingText?: string;
}

const Button = ({
  className,
  children,
  as = "button",
  href,
  onClick,
  pendingText = "Loading...",
  ...props
}: ButtonProps) => {
  const { pending, action } = useFormStatus();

  const isPending = pending && action === props.formAction;

  if (as === "link") {
    if (!href) {
      throw new Error("The 'href' prop is required when 'as' is 'link'");
    }
    return (
      <Link
        href={href}
        className={cn(
          "border border-black text-sm w-fit h-fit  py-2 px-5 bg-black text-white font-medium lg:text-base ",
          className
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      {...(onClick && { onClick })}
      className={cn(
        "border border-black text-sm w-fit h-fit py-2 px-5 bg-black text-white font-medium lg:text-base disabled:cursor-not-allowed disabled:opacity-50",
        isPending && 'opacity-50 cursor-not-allowed',
        className
      )}
      {...props}
      aria-disabled={isPending}
    >
      {isPending ? pendingText : children}
    </button>
  );
};

export default Button;
