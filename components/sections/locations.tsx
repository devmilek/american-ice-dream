import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { SwirlDot } from "@/components/ui/swirl-dot";
import { getLocationIdToDetailsSlugMap } from "@/lib/data/location-details";
import { type Location, locations } from "@/lib/data/locations";
import { ScriptAccent } from "../ui/script-accent";
import { SectionHeading } from "../ui/section-heading";
import { LocationsMap } from "./locations-map";

export async function Locations() {
	const detailsByLocationId = await getLocationIdToDetailsSlugMap();

	return (
		<section id="lokalizacje" className="py-30" aria-labelledby="loc-title">
			<div className="container-page">
				<SectionHeading
					eyebrow="Odwiedź nas"
					description="Sześć lodziarni — w centrach Auchan, Galerii Wiślanka i Alei Bielany. Wpadnij do najbliższej, zawsze czekamy z nowymi smakami i ulubionymi klasykami."
				>
					<span id="loc-title">
						Znajdź <ScriptAccent>swoją</ScriptAccent> lodziarnię
					</span>
				</SectionHeading>

				<div className="relative mb-14 h-[560px] overflow-hidden rounded-[40px] border border-navy/14 bg-[#eee4d1] shadow-[0_30px_70px_-30px_rgba(15,45,92,0.28)] max-lg:h-[460px] max-sm:h-[380px]">
					<LocationsMap />

					<div className="pointer-events-none absolute left-5 top-5 z-[500] flex items-center gap-2.5 rounded-full bg-paper px-4 py-2.5 text-[12.5px] font-medium text-navy shadow-[0_8px_24px_rgba(15,45,92,0.07)]">
						<SwirlDot />6 lodziarni · otwarte codziennie
					</div>
				</div>

				<div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
					{locations.map((loc) => (
						<LocationCard
							key={loc.id}
							location={loc}
							detailsByLocationId={detailsByLocationId}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

function LocationCard({
	location,
	detailsByLocationId,
}: {
	location: Location;
	detailsByLocationId: Record<string, string>;
}) {
	const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.lat}%2C${location.lng}`;
	const detailsSlug = detailsByLocationId[location.id];
	const detailsHref = detailsSlug ? `/lokalizacje/${detailsSlug}` : null;

	return (
		<article
			className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-navy/8 bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold"
			itemScope
			itemType="https://schema.org/LocalBusiness"
		>
			<div
				aria-hidden
				className="absolute -right-10 -top-10 h-24 w-24 rounded-full border-[1.5px] border-gold-soft/50"
			/>

			<span className="font-sans text-[10.5px] font-bold uppercase tracking-[0.2em] text-gold-deep">
				{location.venue}
			</span>
			<h3
				className="mt-1 mb-2 font-display text-[1.75rem] leading-tight text-navy"
				itemProp="name"
			>
				{location.city}
			</h3>
			<p
				className="mb-5 text-[14.5px] leading-[1.55] text-ink-soft"
				itemProp="address"
			>
				{location.address}
				<br />
				{location.postal}
			</p>

			{location.description && (
				<p className="mb-5 font-display text-[14px] italic leading-relaxed text-navy/85">
					{location.description}
				</p>
			)}

			<ul className="mt-auto mb-6 list-none border-t border-dashed border-navy/16 pt-4">
				<li className="flex justify-between py-0.5 text-[13.5px]">
					<span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">
						Pon – Sob
					</span>
					<span className="font-medium text-navy tabular-nums">
						{location.hours.weekdays}
					</span>
				</li>
				<li className="flex justify-between py-0.5 text-[13.5px]">
					<span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">
						Niedz.&nbsp;handlowe
					</span>
					<span className="font-medium text-navy tabular-nums">
						{location.hours.sunday}
					</span>
				</li>
			</ul>

			<div className="flex flex-wrap items-center justify-between gap-3">
				{detailsHref ? (
					<Link
						href={detailsHref}
						className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-navy transition-colors hover:text-sky-deep"
					>
						Zobacz lokal
						<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
					</Link>
				) : (
					<span className="text-[12.5px] font-medium text-muted">
						Podstrona wkrótce
					</span>
				)}
				<a
					href={directionsUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="text-[12.5px] font-medium text-muted transition-colors hover:text-navy"
				>
					Wyznacz trasę
				</a>
			</div>
		</article>
	);
}
