import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  as?: "button" | "link";
  href?: string;
  onClick?: () => void;
}

const Button = ({
  className,
  children,
  as = "button",
  href,
  onClick,
}: ButtonProps) => {
  if (as === "link") {
    if (!href) {
      throw new Error("The 'href' prop is required when 'as' is 'link'");
    }
    return (
      <Link
        href={href}
        className={cn(
          "border border-black text-sm w-fit h-fit  py-2 px-5 bg-black text-white font-medium lg:text-base",
          className
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "border border-black text-sm w-fit h-fit py-2 px-5 bg-black text-white font-medium lg:text-base",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
