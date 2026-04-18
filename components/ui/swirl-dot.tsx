import { cn } from "@/lib/cn";

export function SwirlDot({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-block h-2 w-2 rounded-full bg-sky",
        className,
      )}
      aria-hidden
    >
      <span
        className="absolute -inset-1 rounded-full border-[1.5px] border-sky opacity-35"
        style={{ animation: "var(--animate-pulse-dot)" }}
      />
    </span>
  );
}
