import { useEffect, useRef } from "react";

/**
 * COMPONENT: SplineInteractive
 * ============================
 * Muc dich: Tao trigger tuong tac voi mo hinh Spline 3D
 * 
 * Cach su dung:
 * <SplineInteractive url="..." />
 * 
 * Cac trigger co san:
 * - Click: Trigger animation khi click
 * - Hover: Trigger animation khi hover
 * - Scroll: Trigger animation khi cuon trang
 */

interface SplineInteractiveProps {
  url: string;
  title?: string;
  onTrigger?: (triggerName: string) => void;
}

export default function SplineInteractive({
  url,
  title = "3D Model",
  onTrigger,
}: SplineInteractiveProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMouseEnter = () => {
      // Trigger khi hover vao iframe
      if (iframeRef.current) {
        iframeRef.current.style.transform = "scale(1.02)";
      }
      onTrigger?.("hover");
    };

    const handleMouseLeave = () => {
      // Reset khi hover ra ngoai
      if (iframeRef.current) {
        iframeRef.current.style.transform = "scale(1)";
      }
    };

    const handleClick = () => {
      // Trigger khi click
      onTrigger?.("click");
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      container.addEventListener("click", handleClick);

      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
        container.removeEventListener("click", handleClick);
      };
    }
  }, [onTrigger]);

  // Scroll trigger
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible && iframeRef.current) {
          // Trigger animation khi element co the nhin thay
          iframeRef.current.style.opacity = "1";
          onTrigger?.("scroll");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onTrigger]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full rounded-3xl overflow-hidden border border-[#6366F1]/20 group cursor-pointer transition-all duration-300"
      title={`Click or hover to interact with ${title}`}
    >
      {/* Loading State */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] flex items-center justify-center z-10 group-hover:opacity-0 transition-opacity duration-300">
        <div className="text-center">
          <div className="text-4xl mb-4 animate-spin">⚙️</div>
          <p className="text-gray-400">Loading {title}...</p>
        </div>
      </div>

      {/* Spline Iframe */}
      <iframe
        ref={iframeRef}
        title={title}
        src={url}
        frameBorder="0"
        width="100%"
        height="100%"
        className="w-full h-full transition-transform duration-300"
        style={{
          border: "none",
          borderRadius: "24px",
        }}
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/0 via-[#6366F1]/10 to-[#6366F1]/0"></div>
      </div>

      {/* Interaction Hint */}
      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="text-xs text-[#6366F1] bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
          Click or drag to interact
        </div>
      </div>
    </div>
  );
}
