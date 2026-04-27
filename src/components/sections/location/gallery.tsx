import Image from "next/image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ScriptAccent } from "@/components/ui/script-accent";
import { LocalizationEntry } from "@/keystatic/location-collection";

/**
 * Zdjęcia są oznaczone `placeholder: true` w `location-details.ts`.
 * Po podpięciu CMS-a podmień je na prawdziwe zdjęcia lokalu (witryna,
 * wnętrze, produkty „w akcji", zespół).
 *
 * Sugerowane rozmiary: 1600×1200 (4:3) w formacie WEBP / AVIF.
 */

export function LocationGallery({ details }: { details: LocalizationEntry }) {
	const gallery = details.gallery;
	if (gallery.length === 0) return null;

	return (
		<section
			id="galeria"
			className="py-24 lg:py-28"
			aria-labelledby="gallery-title"
		>
			<div className="container-page">
				<div className="mb-12 max-w-2xl">
					<Eyebrow>Galeria</Eyebrow>
					<h2
						id="gallery-title"
						className="mt-4 mb-4 font-display text-[clamp(1.9rem,3.4vw+0.8rem,3rem)] leading-[1.08] tracking-[-0.02em] text-navy"
					>
						Nasza lodziarnia w{" "}
						<ScriptAccent size="sm">{details.address.city}</ScriptAccent>
					</h2>
					<p className="max-w-xl text-[15.5px] text-ink-soft">
						Rzut okiem na witrynę, wnętrze i nasze specjały - tak wygląda
						codzienność w punkcie {details.address.venue}{" "}
						{details.address.city}.
					</p>
				</div>

				<div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-2">
					{gallery.map((img, i) => {
						const span = getSpanClass(i);
						return (
							<figure
								key={img.alt}
								className={`group relative overflow-hidden rounded-[20px] border border-navy/8 bg-cream-deep/70 ${span}`}
								style={{ aspectRatio: getAspect(i) }}
							>
								<Image
									src={img.src}
									alt={img.alt}
									fill
									sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 24vw"
									className="object-contain p-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
									loading={i < 2 ? "eager" : "lazy"}
								/>
								{img.caption && (
									<figcaption className="absolute inset-x-3 bottom-3 rounded-xl bg-navy/80 px-3 py-1.5 font-sans text-[11.5px] font-medium text-cream backdrop-blur-sm">
										{img.caption}
									</figcaption>
								)}
								{img.placeholder && (
									<span className="absolute left-3 top-3 rounded-full bg-paper/90 px-2.5 py-0.5 font-sans text-[9.5px] font-bold uppercase tracking-[0.16em] text-muted">
										Placeholder
									</span>
								)}
							</figure>
						);
					})}
				</div>
			</div>
		</section>
	);
}

/**
 * Układ bentoMap: pierwsze i piąte zdjęcie większe (2 kolumny), reszta 1×1.
 */
function getSpanClass(index: number): string {
	if (index === 0) return "lg:col-span-2 lg:row-span-2";
	return "";
}

function getAspect(index: number): string {
	if (index === 0) return "1 / 1";
	return "4 / 3";
}
