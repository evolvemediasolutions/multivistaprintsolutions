import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  invertText?: boolean;
  height?: number; // height in pixels (defaults to 40)
}

export function Logo({ className, invertText = false, height = 40 }: LogoProps) {
  // Original PNG dimensions: 358px wide, 90px tall. Aspect ratio = 358 / 90 = 3.9778.
  // Split point is at x = 242px (approx 67.6% of the width).
  // The left part (0% to 67.6%) contains "MULTIVISTA PRINT SOLUTIONS |".
  // The right part (67.6% to 100%) contains the 50-year Golden Jubilee badge.
  // By separating them, we can invert the text/divider to white on dark backgrounds
  // while keeping the badge in its original vibrant gold and blue colors.
  const aspectRatio = 3.9778;
  const splitRatio = 0.676;

  const totalWidth = height * aspectRatio;
  const leftWidth = totalWidth * splitRatio;
  const rightWidth = totalWidth * (1 - splitRatio);

  return (
    <div className={cn("flex items-center select-none pointer-events-none", className)}>
      {/* Left Part: Text & Divider (Conditional Inversion) */}
      <div 
        className="overflow-hidden relative" 
        style={{ width: `${leftWidth}px`, height: `${height}px` }}
      >
        <img
          src="/Logo/Logo.png"
          alt="Multivista Printers"
          className={cn(
            "h-full max-w-none absolute left-0 top-0 object-cover transition-all duration-200",
            invertText ? "brightness-0 invert" : "brightness-100"
          )}
          style={{ width: `${totalWidth}px` }}
        />
      </div>
      {/* Right Part: Badge (Never inverted, retains original blue/gold color) */}
      <div 
        className="overflow-hidden relative" 
        style={{ width: `${rightWidth}px`, height: `${height}px` }}
      >
        <img
          src="/Logo/Logo.png"
          alt="Multivista Printers Badge"
          className="h-full max-w-none absolute top-0 object-cover transition-all duration-200"
          style={{ 
            width: `${totalWidth}px`,
            left: `-${leftWidth}px`
          }}
        />
      </div>
    </div>
  );
}
