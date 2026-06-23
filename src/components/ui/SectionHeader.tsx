import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({ title, className, align = "left" }: SectionHeaderProps) {
  return (
    <span className={cn(
      "inline-flex items-center justify-center px-3.5 py-1.5 border border-royal-blue/20 text-royal-blue text-[10px] font-bold uppercase tracking-widest rounded-full bg-royal-blue/5 mb-4",
      align === "center" ? "mx-auto" : "",
      className
    )}>
      {title}
    </span>
  );
}
