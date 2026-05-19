import { ReactNode, ElementType } from "react";
import { Link } from "wouter";

interface CtaButtonProps {
  href: string;
  children: ReactNode;
  isPrimary?: boolean;
  icon?: ElementType;
  className?: string;
  onClick?: () => void;
}

export default function CtaButton({ href, children, isPrimary = false, icon: Icon, className, onClick }: CtaButtonProps) {
  const baseClasses = "px-6 py-3.5 rounded-full text-sm font-bold tracking-wider inline-flex items-center justify-center gap-3 transition-all duration-300 relative overflow-hidden group";
  const primaryClasses = "bg-primary text-background-primary border-2 border-transparent hover:bg-primary/90 shadow-2xl shadow-primary/25";
  const secondaryClasses = "bg-card/40 text-foreground border-2 border-border backdrop-blur-md hover:border-primary/30 hover:text-primary";

  const finalClassName = `${baseClasses} ${isPrimary ? primaryClasses : secondaryClasses} ${className}`;

  const content = (
    <>
      {children}
      {Icon && <Icon className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />}
    </>
  );

  // Render as a regular anchor tag for external links or anchor links
  if (href.startsWith("http") || href.startsWith("/#") || href.startsWith("#")) {
    return (
      <a href={href} className={finalClassName} onClick={onClick}>
        {content}
      </a>
    );
  }

  // Render as a Wouter Link for internal navigation
  return (
    <Link href={href} onClick={onClick}>
      <a className={finalClassName}>
        {content}
      </a>
    </Link>
  );
}
