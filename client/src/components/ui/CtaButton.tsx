import { ReactNode } from "react";
import { Link } from "wouter";

interface CtaButtonProps {
  variant?: "main" | "sec";
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  children: ReactNode;
  className?: string;
}

/**
 * COMPONENT: CtaButton
 * ====================
 * Module dùng cho các Call-to-action button (Lava Lamp btn-main, btn-sec)
 */
export default function CtaButton({ variant = "main", href, onClick, children, className = "" }: CtaButtonProps) {
  const baseClass = variant === "main" ? "btn-main" : "btn-sec";
  const finalClass = `${baseClass} group ${className}`;

  if (href) {
    if (href.startsWith("/") && !href.startsWith("/#")) {
      return (
        <Link href={href}>
          <a className={finalClass}>{children}</a>
        </Link>
      );
    }
    return (
      <a href={href} onClick={onClick as any} className={finalClass}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick as any} className={finalClass}>
      {children}
    </button>
  );
}
