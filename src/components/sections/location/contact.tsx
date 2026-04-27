import {
	ArrowRightIcon,
	ClockIcon,
	MapPinIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ScriptAccent } from "@/components/ui/script-accent";
import type { LocalizationEntry } from "@/keystatic/location-collection";
import { SingleLocationMap } from "./single-location-map";

const weekdays = [
	"Poniedziałek",
	"Wtorek",
	"Środa",
	"Czwartek",
	"Piątek",
	"Sobota",
	"Niedziela (handlowa)",
];

export function LocationContact({ details }: { details: LocalizationEntry }) {
	const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${details.address.coordinates.lat}%2C${details.address.coordinates.lng}`;

	return (
		<section
			id="kontakt"
			className="bg-cream-soft py-20"
			aria-labelledby="contact-title"
		>
			<div className="container-page">
				<div className="mb-12 max-w-2xl">
					<Eyebrow>Jak nas znaleźć</Eyebrow>
					<h2
						id="contact-title"
						className="mt-4 mb-4 font-display text-[clamp(1.9rem,3.4vw+0.8rem,3rem)] leading-[1.08] tracking-[-0.02em] text-navy"
					>
						Dane kontaktowe i <ScriptAccent size="sm">mapa</ScriptAccent>
					</h2>
					<p className="max-w-xl text-[15.5px] text-ink-soft">
						Wszystko, czego potrzebujesz, żeby do nas trafić - adres, godziny,
						telefon, kod pocztowy i dokładna lokalizacja na mapie.
					</p>
				</div>

				<div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
					<div className="flex flex-col gap-5 rounded-[28px] border border-navy/8 bg-paper p-7 shadow-[0_8px_24px_rgba(15,45,92,0.05)]">
						<InfoRow
							icon={<MapPinIcon className="h-4 w-4 text-gold" />}
							label="Adres"
						>
							<address className="not-italic">
								<strong className="font-semibold text-navy">
									American Ice Dream · {details.address.venue}
								</strong>
								<br />
								{details.address.street}, {details.address.postal}
							</address>
						</InfoRow>

						<InfoRow icon={<PhoneIcon />} label="Telefon">
							{details.phone ? (
								<a
									href={`tel:${details.phone.replace(/\s/g, "")}`}
									className="font-medium text-navy tabular-nums transition-colors hover:text-sky-deep"
								>
									{details.phone}
								</a>
							) : (
								<span className="text-ink-soft">Wkrótce</span>
							)}
							{details.email && (
								<>
									<br />
									<a
										href={`mailto:${details.email}`}
										className="text-[14px] text-sky-deep border-b border-sky-deep/30 transition-colors hover:text-navy hover:border-navy"
									>
										{details.email}
									</a>
								</>
							)}
						</InfoRow>

						<InfoRow
							icon={<ClockIcon className="h-4 w-4 text-gold" />}
							label="Godziny otwarcia"
						>
							<HoursTable details={details} />
						</InfoRow>

						<a
							href={directionsUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="mt-2 inline-flex items-center gap-1.5 self-start text-[14px] font-semibold text-navy transition-colors hover:text-sky-deep"
						>
							Wyznacz trasę w Google Maps
							<ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
						</a>
					</div>

					<div className="relative h-[420px] overflow-hidden rounded-[28px] border border-navy/14 bg-[#eee4d1] shadow-[0_30px_70px_-30px_rgba(15,45,92,0.28)] lg:h-auto lg:min-h-[520px]">
						<SingleLocationMap details={details} zoom={15} />
					</div>
				</div>
			</div>
		</section>
	);
}

function InfoRow({
	icon,
	label,
	children,
}: {
	icon: React.ReactNode;
	label: string;
	children: React.ReactNode;
}) {
	return (
		<div className="flex gap-4">
			<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream-deep/60">
				{icon}
			</div>
			<div className="flex flex-col gap-1">
				<span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
					{label}
				</span>
				<div className="text-[14.5px] leading-[1.55] text-navy">{children}</div>
			</div>
		</div>
	);
}

function HoursTable({ details }: { details: LocalizationEntry }) {
	return (
		<table className="w-full border-separate border-spacing-0 text-[13.5px]">
			<caption className="sr-only">Godziny otwarcia lodziarni</caption>
			<tbody>
				{weekdays.map((day, i) => {
					const isSunday = i === 6;
					return (
						<tr key={day}>
							<th
								scope="row"
								className="py-1 pr-4 text-left font-medium text-ink-soft"
							>
								{day}
							</th>
							<td className="py-1 text-right font-medium text-navy tabular-nums">
								{isSunday ? details.hours.sunday : details.hours.weekdays}
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

function PhoneIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			aria-hidden="true"
			focusable="false"
			className="h-4 w-4 text-gold"
		>
			<path
				d="M5 4h3l2 5l-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"
				stroke="currentColor"
				strokeWidth="1.6"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
