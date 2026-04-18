import { cn } from "@/lib/cn";

export function Eyebrow({
	children,
	light,
	className,
}: {
	children: React.ReactNode;
	light?: boolean;
	className?: string;
}) {
	return (
		<span
			className={cn(
				"inline-flex items-center gap-2.5 font-sans font-semibold",
				"text-xs tracking-[0.28em] uppercase",
				light ? "text-gold-soft" : "text-gold-deep",
				className,
			)}
		>
			<span
				className={cn(
					"h-2 w-2 rounded-full",
					light
						? "bg-gold-soft shadow-[0_0_0_4px_rgba(227,207,164,0.2)]"
						: "bg-gold shadow-[0_0_0_4px_rgba(193,154,91,0.2)]",
				)}
				aria-hidden
			/>
			{children}
		</span>
	);
}
