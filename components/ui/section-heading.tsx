import { cn } from "@/lib/cn";
import { Eyebrow } from "./eyebrow";

export function SectionHeading({
  eyebrow,
  children,
  description,
  align = "center",
  titleLight,
  eyebrowLight,
  className,
}: {
  eyebrow: React.ReactNode;
  children: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "start";
  titleLight?: boolean;
  eyebrowLight?: boolean;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "flex flex-col gap-2",
        align === "center" ? "mb-[72px] items-center text-center" : "items-start",
        className,
      )}
    >
      <Eyebrow light={eyebrowLight}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "mt-4 font-display font-semibold",
          "text-[clamp(2rem,4vw+1rem,3.75rem)] leading-[1.05] tracking-[-0.02em]",
          titleLight ? "text-cream" : "text-navy",
        )}
      >
        {children}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-[640px] text-[1.0625rem]",
            titleLight ? "text-cream/80" : "text-ink-soft",
            align === "center" ? "mx-auto text-center" : "",
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
