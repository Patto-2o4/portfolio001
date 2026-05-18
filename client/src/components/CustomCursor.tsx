import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverType, setHoverType] = useState<"none" | "interactive" | "card" | "text">("none");
  const [labelText, setLabelText] = useState("");

  const mouseRef = useRef({ x: 0, y: 0 });
  const ringRef = useRef({ x: 0, y: 0, width: 24, height: 24, borderRadius: 9999 });
  
  const dotElRef = useRef<HTMLDivElement>(null);
  const ringElRef = useRef<HTMLDivElement>(null);

  // Sticky Magnetic target element
  const stickyTargetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Only activate on devices with a mouse/precision pointing device
    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    if (!isDesktop) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      const target = e.target as HTMLElement;
      
      // Look for closest interactive components
      const interactiveEl = target.closest("a, button, [role='button'], .btn-primary, .btn-sec, .lang-btn") as HTMLElement | null;
      const cardEl = target.closest(".group.cursor-pointer, #projects a") as HTMLElement | null;
      const textInputEl = target.closest("input, textarea") as HTMLElement | null;

      if (interactiveEl) {
        setHoverType("interactive");
        stickyTargetRef.current = interactiveEl;
      } else if (cardEl) {
        setHoverType("card");
        setLabelText("VIEW");
        stickyTargetRef.current = null;
      } else if (textInputEl) {
        setHoverType("text");
        stickyTargetRef.current = null;
      } else {
        setHoverType("none");
        stickyTargetRef.current = null;
      }
    };

    const onMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const onMouseEnterWindow = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeaveWindow);
    document.addEventListener("mouseenter", onMouseEnterWindow);

    // Highly optimized animation loop running on GPU frame timings
    let rafId: number;
    const updateCursor = () => {
      const dot = dotElRef.current;
      const ring = ringElRef.current;

      if (dot && ring) {
        const mouseX = mouseRef.current.x;
        const mouseY = mouseRef.current.y;

        // Instant precise central dot translation
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

        // Calculate target dimensions and coordinates for the elastic ring
        let targetX = mouseX;
        let targetY = mouseY;
        let targetWidth = 36;
        let targetHeight = 36;
        let targetRadius = 9999;

        if (stickyTargetRef.current && hoverType === "interactive") {
          // STICKY MAGNETIC MAGNETIC ALIGNMENT
          const rect = stickyTargetRef.current.getBoundingClientRect();
          
          // Lock ring to the exact center of the interactive element
          targetX = rect.left + rect.width / 2;
          targetY = rect.top + rect.height / 2;

          // Expand ring boundaries to cleanly encapsulate the element with padding
          targetWidth = rect.width + 12;
          targetHeight = rect.height + 12;
          
          // Extract the element's actual border-radius to shape-match elastically
          const computedStyle = window.getComputedStyle(stickyTargetRef.current);
          targetRadius = parseInt(computedStyle.borderRadius, 10) || 12;
        } else if (hoverType === "card") {
          // Expand into a larger visual lens showing a VIEW tag on project cards
          targetWidth = 76;
          targetHeight = 76;
          targetRadius = 9999;
        } else if (hoverType === "text") {
          // Morph into a thin vertical I-beam cursor inside inputs
          targetWidth = 2;
          targetHeight = 24;
          targetRadius = 2;
        }

        // Apply Linear Interpolation (LERP) physics: current += (target - current) * ease
        const ease = 0.16; // Smooth, sticky lag coefficient
        ringRef.current.x += (targetX - ringRef.current.x) * ease;
        ringRef.current.y += (targetY - ringRef.current.y) * ease;
        ringRef.current.width += (targetWidth - ringRef.current.width) * ease;
        ringRef.current.height += (targetHeight - ringRef.current.height) * ease;
        ringRef.current.borderRadius += (targetRadius - ringRef.current.borderRadius) * ease;

        // Sync visual transforms to hardware-accelerated style boundaries
        ring.style.width = `${ringRef.current.width}px`;
        ring.style.height = `${ringRef.current.height}px`;
        ring.style.borderRadius = `${ringRef.current.borderRadius}px`;
        ring.style.transform = `translate3d(${ringRef.current.x}px, ${ringRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(updateCursor);
    };

    rafId = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeaveWindow);
      document.removeEventListener("mouseenter", onMouseEnterWindow);
      cancelAnimationFrame(rafId);
    };
  }, [hoverType]);

  if (!isVisible) return null;

  return (
    <>
      {/* Glowing high-intensity lavender core dot */}
      <div
        ref={dotElRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#E9D5FF] shadow-[0_0_10px_#9917FF,0_0_3px_#FFF] pointer-events-none z-[99999] transition-opacity duration-300"
        style={{
          transform: "translate(-50%, -50%)",
          opacity: hoverType === "text" ? 0 : 1,
        }}
      />
      {/* Elastic, shape-shifting outer ring - restored to classic purple/indigo */}
      <div
        ref={ringElRef}
        className="fixed top-0 left-0 border pointer-events-none z-[99998] flex items-center justify-center overflow-hidden transition-colors duration-300"
        style={{
          borderColor: hoverType === "interactive" ? "rgba(99, 102, 241, 0.5)" : "rgba(153, 23, 255, 0.25)",
          backgroundColor: hoverType === "interactive" ? "rgba(99, 102, 241, 0.08)" : hoverType === "card" ? "rgba(153, 23, 255, 0.08)" : "transparent",
          boxShadow: hoverType === "interactive" 
            ? "0 0 15px rgba(99, 102, 241, 0.15)" 
            : hoverType === "card" 
            ? "0 0 20px rgba(153, 23, 255, 0.15)" 
            : "none",
        }}
      >
        {hoverType === "card" && (
          <span className="text-[9px] font-black text-white tracking-[0.2em] font-mono leading-none animate-pulse">
            {labelText}
          </span>
        )}
      </div>
    </>
  );
}
