import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ScriptAccent } from "@/components/ui/script-accent";
import { products } from "@/lib/data/products";
import type { Location } from "@/lib/data/locations";
import type { LocationDetails } from "@/lib/data/location-details";

type Props = {
	location: Location;
	details: LocationDetails;
};

export function LocationOffer({ location, details }: Props) {
	const productMap = new Map(products.map((p) => [p.id, p]));

	return (
		<section
			id="oferta"
			className="bg-cream-soft py-24 lg:py-28"
			aria-labelledby="offer-title"
		>
			<div className="container-page">
				<div className="mb-12 max-w-2xl">
					<Eyebrow>Oferta w {location.city}</Eyebrow>
					<h2
						id="offer-title"
						className="mt-4 mb-4 font-display text-[clamp(1.9rem,3.4vw+0.8rem,3rem)] leading-[1.08] tracking-[-0.02em] text-navy"
					>
						Co znajdziesz <ScriptAccent size="sm">w karcie</ScriptAccent>
					</h2>
					<p className="max-w-xl text-[15.5px] text-ink-soft">
						{details.offer.intro}
					</p>
				</div>

				<ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{details.offer.highlights.map((hl) => {
						const product = productMap.get(hl.productId);
						if (!product) return null;
						return (
							<li
								key={hl.productId}
								className="group relative flex flex-col overflow-hidden rounded-[24px] border border-navy/8 bg-paper p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-32px_rgba(15,45,92,0.28)]"
							>
								<span
									className="absolute left-0 top-0 h-[3px] w-full"
									style={{ background: product.accent }}
								/>
								<span
									className="mb-3 inline-block self-start rounded-full border px-3 py-1 font-sans text-[10.5px] font-bold uppercase tracking-[0.18em]"
									style={{
										color: product.accent,
										borderColor: `color-mix(in srgb, ${product.accent} 40%, transparent)`,
									}}
								>
									{product.title}
								</span>
								<h3 className="mb-2 font-display text-[1.3rem] leading-[1.25] text-navy">
									{hl.callout.split(" - ")[0] ?? hl.callout}
								</h3>
								<p className="text-[14px] leading-[1.55] text-ink-soft">
									{hl.callout.split(" - ").slice(1).join(" - ") ||
										product.description}
								</p>
							</li>
						);
					})}
				</ul>

				<div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-[24px] border border-dashed border-navy/15 bg-paper/60 px-6 py-5">
					<p className="font-display text-[1.1rem] text-navy">
						Pełna karta ze zdjęciami i opisami czeka na stronie głównej.
					</p>
					<Link
						href="/#produkty"
						className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-navy transition-colors hover:text-sky-deep"
					>
						Zobacz pełną kartę
						<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
					</Link>
				</div>
			</div>
		</section>
	);
}
