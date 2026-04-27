import {
	ArrowRightIcon,
	ClockIcon,
	MapPinIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ScriptAccent } from "@/components/ui/script-accent";
import type { LocalizationEntry } from "@/keystatic/location-collection";
import { LocationBreadcrumb } from "./breadcrumb";

export function LocationHero({ details }: { details: LocalizationEntry }) {
	return (
		<section
			className="relative overflow-hidden pt-6"
			aria-labelledby="location-hero-title"
		>
			<LocationBreadcrumb
				crumbs={[
					{ href: "/", label: "Strona główna" },
					{ href: "/#lokalizacje", label: "Lokalizacje" },
					{ label: `${details.locationName}` },
				]}
				className="pt-0 justify-center flex"
			/>
			<div
				className="pointer-events-none absolute -right-52 -top-40 h-[560px] w-[560px] rounded-full"
				style={{
					background:
						"radial-gradient(circle at 30% 30%, rgba(60,182,227,0.14), transparent 60%)",
				}}
			/>
			<div
				className="pointer-events-none absolute -bottom-56 -left-44 h-[480px] w-[480px] rounded-full"
				style={{
					background:
						"radial-gradient(circle, rgba(193,154,91,0.12), transparent 60%)",
				}}
			/>

			<div className="container-page relative grid grid-cols-1 items-center gap-12 pb-16 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-20 lg:pt-14">
				<div className="max-w-2xl">
					<Eyebrow>{details.hero.badge}</Eyebrow>

					<h1
						id="location-hero-title"
						className="mt-5 mb-5 font-display font-semibold text-[clamp(2.25rem,4.4vw+0.4rem,4.25rem)] leading-[1.02] tracking-[-0.025em] text-navy"
					>
						Lodziarnia w <ScriptAccent>{details.locationName}</ScriptAccent>
						<span className="block text-[0.62em] font-normal italic tracking-normal text-navy-soft mt-2">
							{details.hero.subheading}
						</span>
					</h1>

					<p className="mb-7 max-w-xl text-[1.075rem] leading-relaxed text-ink-soft">
						{details.seo.lead}
					</p>

					<dl
						className="mb-8 grid gap-3 sm:grid-cols-[auto_1fr] sm:gap-x-5 sm:gap-y-2.5"
						aria-label="Podstawowe informacje"
					>
						<dt className="flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-muted">
							<MapPinIcon className="h-3.5 w-3.5 text-gold" />
							Adres
						</dt>
						<dd className="text-[14.5px] text-navy">
							<address className="not-italic">
								<strong className="font-medium">{details.address.venue}</strong>
								{" · "}
								{details.address.street}, {details.address.city}
							</address>
						</dd>

						<dt className="flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-muted">
							<ClockIcon className="h-3.5 w-3.5 text-gold" />
							Otwarte
						</dt>
						<dd className="text-[14.5px] text-navy">
							<span className="tabular-nums">
								Pon – Sob {details.hours.weekdays}
							</span>
							<span className="mx-2 text-navy/25">·</span>
							<span className="tabular-nums">
								Niedziele handlowe {details.hours.sunday}
							</span>
						</dd>
					</dl>

					<div className="flex flex-wrap gap-3">
						<Button asChild size="lg">
							<Link
								href={`https://www.google.com/maps/dir/?api=1&destination=${details.address.coordinates.lat}%2C${details.address.coordinates.lng}`}
								target="_blank"
								rel="noopener noreferrer"
							>
								Wyznacz trasę
								<ArrowRightIcon />
							</Link>
						</Button>
						<Button asChild size="lg" variant="ghost">
							<Link href="#oferta">Zobacz ofertę</Link>
						</Button>
					</div>
				</div>

				<div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[520px]">
					<div
						aria-hidden
						className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full max-lg:h-[380px] max-lg:w-[380px]"
						style={{
							background:
								"radial-gradient(circle at 35% 35%, var(--color-cream-deep), var(--color-cream-soft) 60%, transparent 72%)",
						}}
					/>
					<div
						className="relative z-1 h-[420px] w-[340px] max-lg:h-[340px] max-lg:w-[280px] rounded-xl"
						style={{ animation: "var(--animate-float)" }}
					>
						{details.hero.image.src && (
							<Image
								src={details.hero.image.src}
								alt={details.hero.image.alt}
								fill
								priority
								sizes="(max-width: 1024px) 80vw, 420px"
								className="object-contain drop-shadow-[0_30px_40px_rgba(15,45,92,0.18)]"
							/>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
