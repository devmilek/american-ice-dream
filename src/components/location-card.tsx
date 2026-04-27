import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import type { LocalizationEntry } from "@/keystatic/location-collection";

export function LocationCard({
	slug,
	details,
}: {
	slug: string;
	details: LocalizationEntry;
}) {
	const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${details.address.coordinates.lat}%2C${details.address.coordinates.lng}`;
	const detailsHref = `/lokalizacje/${slug}`;

	return (
		<article
			className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-navy/8 bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold"
			itemScope
			itemType="https://schema.org/LocalBusiness"
		>
			<div
				aria-hidden
				className="absolute -right-10 -top-10 h-24 w-24 rounded-full border-[1.5px] border-gold-soft/50"
			/>

			<span className="font-sans text-[10.5px] font-bold uppercase tracking-[0.2em] text-gold-deep">
				{details.address.venue}
			</span>
			<h3
				className="mt-1 mb-2 font-display text-[1.75rem] leading-tight text-navy"
				itemProp="name"
			>
				{details.address.city}
			</h3>
			<p
				className="mb-5 text-[14.5px] leading-[1.55] text-ink-soft"
				itemProp="address"
			>
				{details.address.street}
				<br />
				{details.address.postal} {details.address.city}
			</p>

			{details.shortDescription && (
				<p className="mb-5 font-display text-[14px] italic leading-relaxed text-navy/85">
					{details.shortDescription}
				</p>
			)}

			<ul className="mt-auto mb-6 list-none border-t border-dashed border-navy/16 pt-4">
				<li className="flex justify-between py-0.5 text-[13.5px]">
					<span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">
						Pon – Sob
					</span>
					<span className="font-medium text-navy tabular-nums">
						{details.hours.weekdays}
					</span>
				</li>
				<li className="flex justify-between py-0.5 text-[13.5px]">
					<span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">
						Niedz.&nbsp;handlowe
					</span>
					<span className="font-medium text-navy tabular-nums">
						{details.hours.sunday}
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
						<ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
