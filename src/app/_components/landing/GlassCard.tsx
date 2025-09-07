import { cn } from "@/lib/utils";

interface GlassCardProps {
  children?: React.ReactNode;
  className?: string;
}

export default function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        // Base glassmorphism styles; size is provided by caller via className
        "relative overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.3)] bg-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1),inset_0_0_26px_13px_rgba(255,255,255,0.13)] backdrop-blur-sm",
        // Decorative lines
        "before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/80 before:to-transparent before:content-['']",
        "after:absolute after:top-0 after:left-0 after:h-full after:w-px after:bg-gradient-to-b after:from-white/80 after:via-transparent after:to-white/30 after:content-['']",
        className,
      )}
    >
      {children}
    </div>
  );
}
