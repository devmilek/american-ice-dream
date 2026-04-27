import { Eyebrow } from "@/components/ui/eyebrow";
import { ScriptAccent } from "@/components/ui/script-accent";
import type { Location } from "@/lib/data/locations";
import type { LocationDetails } from "@/lib/data/location-details";
import { LocalizationEntry } from "@/keystatic/location-collection";

export function LocationDescription({
	details,
}: {
	details: LocalizationEntry;
}) {
	return (
		<section
			id="o-lokalu"
			className="py-24 lg:py-28"
			aria-labelledby="description-title"
		>
			<div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
				<div className="lg:sticky lg:top-28 lg:self-start">
					<Eyebrow>Nasza lodziarnia w {details.address.city}</Eyebrow>
					<h2
						id="description-title"
						className="mt-4 mb-5 font-display text-[clamp(1.9rem,3.4vw+0.8rem,3.25rem)] leading-[1.05] tracking-[-0.02em] text-navy"
					>
						American Ice Dream{" "}
						<ScriptAccent size="sm">{details.address.city}</ScriptAccent>
						<span className="block text-[0.62em] mt-2 font-normal italic text-navy-soft">
							{details.description.subheading}
						</span>
					</h2>
					<p className="text-[16px] font-medium leading-relaxed text-ink-soft">
						{details.description.lead}
					</p>
				</div>

				<div className="space-y-12">
					<div className="prose-block space-y-5 text-[16px] leading-[1.75] text-ink">
						{details.description.body.map((paragraph) => (
							<p key={paragraph.slice(0, 48)}>{paragraph}</p>
						))}
					</div>

					<div className="grid gap-4 rounded-[28px] border border-navy/8 bg-paper p-6 shadow-[0_8px_24px_rgba(15,45,92,0.05)] sm:grid-cols-2 sm:p-7">
						<TransportRow
							icon="car"
							label="Samochód"
							text={details.transport.car}
						/>
						<TransportRow
							icon="bus"
							label="Komunikacja"
							text={details.transport.public}
						/>
						<TransportRow
							icon="parking"
							label="Parking"
							text={details.transport.parking}
						/>
						<TransportRow
							icon="access"
							label="Dostępność"
							text={details.transport.accessibility}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

function TransportRow({
	icon,
	label,
	text,
}: {
	icon: "car" | "bus" | "parking" | "access";
	label: string;
	text: string;
}) {
	return (
		<div className="flex gap-4">
			<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream-deep/70 text-navy">
				<TransportIcon variant={icon} />
			</div>
			<div className="flex flex-col gap-1">
				<span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-deep">
					{label}
				</span>
				<p className="text-[13.5px] leading-[1.55] text-ink-soft">{text}</p>
			</div>
		</div>
	);
}

function TransportIcon({
	variant,
}: {
	variant: "car" | "bus" | "parking" | "access";
}) {
	if (variant === "car")
		return (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				aria-hidden="true"
				focusable="false"
				className="h-5 w-5"
			>
				<path
					d="M5 17h14M4 13l1.5-4a2 2 0 0 1 1.9-1.3h9.2a2 2 0 0 1 1.9 1.3L20 13m-16 0v4m16-4v4M4 13h16M7 17v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1m16 0v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	if (variant === "bus")
		return (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				aria-hidden="true"
				focusable="false"
				className="h-5 w-5"
			>
				<rect
					x="5"
					y="4"
					width="14"
					height="13"
					rx="2"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M5 13h14M8 4V2m8 2V2M7 21v-2m10 2v-2"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<circle cx="8.5" cy="16" r="1" fill="currentColor" />
				<circle cx="15.5" cy="16" r="1" fill="currentColor" />
			</svg>
		);
	if (variant === "parking")
		return (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				aria-hidden="true"
				focusable="false"
				className="h-5 w-5"
			>
				<rect
					x="4"
					y="4"
					width="16"
					height="16"
					rx="3"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M10 17V8h3.5a2.5 2.5 0 0 1 0 5H10"
					stroke="currentColor"
					strokeWidth="1.6"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			aria-hidden="true"
			focusable="false"
			className="h-5 w-5"
		>
			<circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
			<path
				d="M6 9h12M9 9v5l-2 6m10-11v5l2 6m-8-7v7"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
