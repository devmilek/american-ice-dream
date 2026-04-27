import { products } from "@/lib/data/nav";

export function Marquee() {
	const items = [...products, ...products];
	return (
		<div
			className="mt-10 overflow-hidden border-y border-navy/8 bg-paper py-5.5"
			aria-hidden
		>
			<div
				className="flex w-max gap-8 whitespace-nowrap"
				style={{ animation: "var(--animate-marquee)" }}
			>
				{items.map((flavor, i) => (
					<span key={i} className="flex items-center gap-8">
						<span className="font-display text-2xl font-normal italic leading-none tracking-[-0.01em] text-navy">
							{flavor}
						</span>
						<span className="text-xl leading-none text-gold">✶</span>
					</span>
				))}
			</div>
		</div>
	);
}
