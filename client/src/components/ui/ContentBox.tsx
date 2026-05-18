import { ReactNode } from "react";

interface ContentBoxProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

/**
 * COMPONENT: ContentBox
 * =====================
 * Module đóng gói khung nền tối có viền, bo góc dùng chung cho toàn dự án
 */
export default function ContentBox({ children, className = "", hoverable = false }: ContentBoxProps) {
  const baseClass = "bg-card border border-[#222] rounded-3xl overflow-hidden";
  const hoverClass = hoverable ? "hover:border-[#6366F1]/50 transition-all duration-500 cursor-pointer" : "";
  
  return (
    <div className={`${baseClass} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}
