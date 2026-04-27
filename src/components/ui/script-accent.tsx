import { cn } from "@/lib/cn";

type Tone = "sky" | "gold-soft" | "gold";

export function ScriptAccent({
  children,
  size = "lg",
  tone = "sky",
  className,
}: {
  children: React.ReactNode;
  size?: "sm" | "lg";
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "text-script inline-block translate-y-[0.04em] rotate-[-1.5deg]",
        size === "lg" ? "text-[1.15em]" : "text-[1em]",
        tone === "sky" && "text-sky",
        tone === "gold-soft" && "text-gold-soft",
        tone === "gold" && "text-gold",
        className,
      )}
    >
      {children}
    </span>
  );
}
