import Image from "next/image";
import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";
import { type Product, products } from "@/lib/data/products";
import { SectionHeading } from "../ui/section-heading";
import { ScriptAccent } from "../ui/script-accent";

export function Products() {
	return (
		<section
			id="produkty"
			className="relative py-30"
			style={{
				background:
					"linear-gradient(180deg, var(--color-cream) 0%, var(--color-cream-soft) 100%)",
			}}
			aria-labelledby="products-title"
		>
			<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
			<div className="container-page">
				<SectionHeading
					eyebrow="Nasza karta"
					description="Sześć filarów naszej lodziarni - od klasycznych lodów włoskich po kremowe desery i orzeźwiające granity. Każdą propozycję przygotowujemy codziennie, od podstaw."
				>
					<span id="products-title">
						Rozsmakuj się w <br />
						naszych <ScriptAccent>specjałach</ScriptAccent>
					</span>
				</SectionHeading>

				<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-6">
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</section>
	);
}

function ProductCard({ product }: { product: Product }) {
	const {
		title,
		tag,
		description,
		meta,
		accent,
		Illustration,
		photo,
		featured,
	} = product;
	return (
		<article
			className={cn(
				"group relative flex flex-col overflow-hidden rounded-[28px] border border-navy/8 bg-paper transition-[transform,box-shadow] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
				"hover:-translate-y-2 hover:shadow-[0_30px_70px_-30px_rgba(15,45,92,0.28)]",
				"lg:col-span-2",
				// featured && "sm:col-span-2 lg:col-span-4 lg:row-span-2",
			)}
			style={{ "--accent": accent } as CSSProperties}
		>
			<span
				className="absolute left-1/2 top-0 h-[3px] w-0 -translate-x-1/2 rounded-b-[3px] transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
				style={{ background: accent }}
			/>

			<div
				className={cn(
					"relative overflow-hidden border-b border-dashed border-navy/12",
					photo
						? "min-h-[240px] sm:min-h-[260px]"
						: "flex min-h-[220px] items-center justify-center p-6 sm:min-h-60 sm:p-7",
					// featured && "lg:border-b-0 lg:border-r lg:border-dashed",
					// featured && photo && "lg:min-h-0",
					// featured && !photo && "lg:min-h-0",
				)}
				style={{
					background: `radial-gradient(circle at 50% 60%, color-mix(in srgb, ${accent} 16%, var(--color-paper)) 0%, var(--color-paper) 70%)`,
				}}
			>
				{photo ? (
					<Image
						src={photo.src}
						alt={photo.alt}
						fill
						sizes={
							featured
								? "(max-width: 640px) 92vw, (max-width: 1024px) 92vw, 46vw"
								: "(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 24vw"
						}
						className="object-contain transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:-rotate-2 drop-shadow-[0_18px_30px_rgba(15,45,92,0.18)]"
						style={{
							objectPosition: photo.position ?? "50% 50%",
							padding: `${photo.padding ?? 1.25}rem`,
						}}
					/>
				) : (
					<Illustration
						className={cn(
							"h-auto w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:-rotate-3",
							featured ? "max-w-[220px]" : "max-w-[160px]",
						)}
					/>
				)}
			</div>

			<div className="flex flex-1 flex-col px-6 pt-6 pb-7 sm:px-8 sm:pt-7 sm:pb-8">
				{tag && (
					<span
						className="mb-3 inline-block self-start rounded-full border px-3 py-1 font-sans text-[11px] font-bold uppercase tracking-[0.16em]"
						style={{
							color: accent,
							borderColor: `color-mix(in srgb, ${accent} 40%, transparent)`,
						}}
					>
						{tag}
					</span>
				)}
				<h3
					className={cn(
						"mb-3 font-display leading-[1.15] text-navy",
						featured
							? "text-[1.9rem] sm:text-[2.25rem] lg:text-[2.5rem]"
							: "text-[1.6rem] sm:text-[1.75rem]",
					)}
				>
					{title}
				</h3>
				<p
					className={cn(
						"mb-5 flex-1 text-ink-soft",
						featured
							? "text-[15.5px] lg:text-[16.5px]"
							: "text-[14.5px] sm:text-[15px]",
					)}
				>
					{description}
				</p>
				<span className="font-script text-xl" style={{ color: accent }}>
					{meta}
				</span>
			</div>
		</article>
	);
}
