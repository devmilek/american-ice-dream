import {
	ArrowRightIcon,
	ClockIcon,
	MapPinIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Link from "next/link";
import type {
	BreadcrumbList,
	ContactPage,
	Organization,
	WithContext,
} from "schema-dts";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { TopBar } from "@/components/layout/top-bar";
import { LocationBreadcrumb } from "@/components/sections/location/breadcrumb";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ScriptAccent } from "@/components/ui/script-accent";
import { env } from "@/env";
import { getLocationIdToDetailsSlugMap } from "@/lib/data/location-details";
import { locations } from "@/lib/data/locations";
import { keystaticReader } from "@/lib/keystatic/reader";

const PAGE_PATH = "/kontakt";

export const metadata: Metadata = {
	title: "Kontakt - American Ice Dream · telefon, email, dane firmy",
	description:
		"Skontaktuj się z American Ice Dream. Telefon, email, siedziba firmy w Żorach oraz adresy wszystkich 6 lodziarni na Śląsku i Dolnym Śląsku.",
	alternates: { canonical: PAGE_PATH },
	openGraph: {
		type: "website",
		locale: "pl_PL",
		title: "Kontakt - American Ice Dream",
		description:
			"Telefon, email, dane firmy i wszystkie 6 lokalizacji lodziarni American Ice Dream.",
		url: `${env.NEXT_PUBLIC_SITE_URL}${PAGE_PATH}`,
	},
};

export default async function KontaktPage() {
	const detailsByLocationId = await getLocationIdToDetailsSlugMap();
	const structuredData = await buildStructuredData();

	return (
		<>
			<ContactHero />
			<ContactMethods />
			<LocationsList />
			<CompanyData />

			{structuredData.map((payload, i) => (
				<script
					// biome-ignore lint/suspicious/noArrayIndexKey: structured data has fixed order
					key={`ld-${i}`}
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD payload is controlled
					dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
				/>
			))}
		</>
	);

	function ContactHero() {
		return (
			<section
				className="relative overflow-hidden pt-6"
				aria-labelledby="kontakt-title"
			>
				<div
					aria-hidden
					className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full"
					style={{
						background:
							"radial-gradient(circle at 30% 30%, rgba(193,154,91,0.18), transparent 60%)",
					}}
				/>
				<LocationBreadcrumb
					className="flex justify-center"
					crumbs={[{ href: "/", label: "Strona główna" }, { label: "Kontakt" }]}
				/>
				<div className="container-page relative max-w-3xl pb-14 pt-10 lg:pb-20 lg:pt-14">
					<Eyebrow>Skontaktuj się z nami</Eyebrow>
					<h1
						id="kontakt-title"
						className="mt-5 mb-5 font-display font-semibold text-[clamp(2.25rem,4.4vw+0.4rem,3.2rem)] leading-[1.02] tracking-tight text-navy"
					>
						Porozmawiajmy -{" "}
						<ScriptAccent>o lodach, współpracy albo po prostu</ScriptAccent>
					</h1>
					<p className="text-[1.075rem] leading-relaxed text-ink-soft mt-10">
						Najszybciej złapiesz nas pod numerem telefonu lub mailowo.
						<br />
						Jeśli szukasz konkretnej lodziarni, niżej znajdziesz wszystkie 6
						lokalizacji z adresami.
					</p>
				</div>
			</section>
		);
	}

	async function ContactMethods() {
		const contactData = await keystaticReader.singletons.kontakt.readOrThrow();
		return (
			<section
				className="bg-cream-soft py-16 lg:py-20"
				aria-labelledby="metody-title"
			>
				<div className="container-page">
					<h2 id="metody-title" className="sr-only">
						Sposoby kontaktu
					</h2>
					<div className="grid gap-4 md:grid-cols-3">
						<ContactCard
							icon={<PhoneIcon />}
							label="Telefon"
							title="Zadzwoń"
							primary
						>
							<ul className="flex flex-col gap-1.5">
								{contactData?.phoneNumbers?.length > 0 &&
									contactData.phoneNumbers.map((p) => (
										<li key={p}>
											<a
												href={`tel:${p.replace(/\s/g, "")}`}
												className="font-display text-[1.25rem] text-navy tabular-nums transition-colors hover:text-sky-deep"
											>
												{p}
											</a>
										</li>
									))}
							</ul>
							<p className="mt-3 text-[13px] leading-[1.55] text-ink-soft">
								Pon – Sob: 9:00 – 21:00 · Niedziele handlowe: 9:30 – 19:00
							</p>
						</ContactCard>

						<ContactCard
							icon={<MailIcon />}
							label="E-mail"
							title="Napisz do nas"
						>
							<a
								href={`mailto:${contactData.email}`}
								className="break-all font-display text-[1.25rem] text-navy transition-colors hover:text-sky-deep"
							>
								{contactData.email}
							</a>
							<p className="mt-3 text-[13px] leading-[1.55] text-ink-soft">
								Odpowiadamy zazwyczaj w ciągu 24h w dni robocze.
							</p>
						</ContactCard>

						<ContactCard
							icon={<MapPinIcon className="h-5 w-5 text-gold-deep" />}
							label="Siedziba firmy"
							title="Nasza siedziba"
						>
							<address className="not-italic font-display text-[1.1rem] text-navy leading-[1.35]">
								{contactData.address.street}
								<br />
								{contactData.address.postalCode}, {contactData.address.city}
							</address>
							<p className="mt-3 text-[13px] leading-[1.55] text-ink-soft">
								Biuro. Lodziarni w Żorach szukaj w Galerii Wiślanka lub w Auchan
								(niżej w sekcji „Nasze lodziarnie").
							</p>
						</ContactCard>
					</div>
				</div>
			</section>
		);
	}

	function LocationsList() {
		return (
			<section
				id="lodziarnie"
				className="py-24 lg:py-28"
				aria-labelledby="loc-title"
			>
				<div className="container-page">
					<div className="mb-12 max-w-2xl">
						<Eyebrow>Nasze lodziarnie</Eyebrow>
						<h2
							id="loc-title"
							className="mt-4 mb-4 font-display text-[clamp(1.9rem,3.4vw+0.8rem,3rem)] leading-[1.08] tracking-[-0.02em] text-navy"
						>
							Sześć lodziarni -{" "}
							<ScriptAccent size="sm">cztery miasta</ScriptAccent>
						</h2>
						<p className="max-w-xl text-[15.5px] text-ink-soft">
							Wszystkie adresy w formie tekstowej wraz z godzinami otwarcia i
							bezpośrednim linkiem do nawigacji.
						</p>
					</div>

					<ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						{locations.map((loc) => {
							const detailsSlug = detailsByLocationId[loc.id];
							const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${loc.lat}%2C${loc.lng}`;
							return (
								<li
									key={loc.id}
									className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-navy/8 bg-paper p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-gold"
								>
									<span className="font-sans text-[10.5px] font-bold uppercase tracking-[0.2em] text-gold-deep">
										{loc.venue}
									</span>
									<h3 className="mt-1 mb-3 font-display text-[1.4rem] leading-tight text-navy">
										{loc.city}
									</h3>
									<address className="not-italic text-[14px] leading-[1.55] text-ink-soft">
										{loc.address}
										<br />
										{loc.postal}
									</address>
									<dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-[12.5px]">
										<dt className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-muted">
											<ClockIcon className="h-3 w-3 text-gold" />
											Pon – Sob
										</dt>
										<dd className="text-right font-medium text-navy tabular-nums">
											{loc.hours.weekdays}
										</dd>
										<dt className="text-[11px] font-semibold uppercase tracking-widest text-muted">
											Niedz.&nbsp;handlowe
										</dt>
										<dd className="text-right font-medium text-navy tabular-nums">
											{loc.hours.sunday}
										</dd>
									</dl>
									<div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-navy/12 pt-4">
										{detailsSlug ? (
											<Link
												href={`/lokalizacje/${detailsSlug}`}
												className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy transition-colors hover:text-sky-deep"
											>
												Zobacz lokal
												<ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
											</Link>
										) : (
											<span className="text-[12px] font-medium text-muted">
												Podstrona wkrótce
											</span>
										)}
										<a
											href={directionsUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="text-[12px] font-medium text-muted transition-colors hover:text-navy"
										>
											Wyznacz trasę
										</a>
									</div>
								</li>
							);
						})}
					</ul>

					<div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-[24px] border border-dashed border-navy/15 bg-cream-soft px-6 py-5">
						<p className="font-display text-[1.05rem] text-navy">
							Interaktywną mapę wszystkich lodziarni znajdziesz na stronie
							głównej.
						</p>
						<Button asChild variant="ghost">
							<Link href="/#lokalizacje">
								Przejdź do mapy
								<ArrowRightIcon />
							</Link>
						</Button>
					</div>
				</div>
			</section>
		);
	}

	async function CompanyData() {
		const contactData = await keystaticReader.singletons.kontakt.readOrThrow();
		const est = new Date(contactData.companyInfo.establishedOn ?? "");
		const estLabel = est.toLocaleDateString("pl-PL", {
			day: "numeric",
			month: "long",
			year: "numeric",
		});
		return (
			<section
				id="dane-firmy"
				className="bg-navy py-20 text-cream lg:py-24"
				aria-labelledby="firma-title"
			>
				<div className="container-page">
					<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
						<div>
							<Eyebrow light>Dane firmy</Eyebrow>
							<h2
								id="firma-title"
								className="mt-4 mb-4 text-white font-display text-[clamp(1.9rem,3.4vw+0.8rem,3rem)] leading-[1.08] tracking-[-0.02em]"
							>
								Pełne dane{" "}
								<ScriptAccent size="sm" tone="gold-soft">
									do rozliczeń i umów
								</ScriptAccent>
							</h2>
							<p className="max-w-md text-[15.5px] leading-[1.7] text-cream/75">
								Działalność zarejestrowana {estLabel} roku, prowadzona
								nieprzerwanie do dziś. Używaj tych danych do faktur, zapytań lub
								spraw urzędowych.
							</p>
							<Button asChild variant="gold" size="lg" className="mt-8">
								<a
									href={`mailto:${contactData.email}?subject=Zapytanie%20-%20American%20Ice%20Dream`}
								>
									Napisz do nas
									<ArrowRightIcon />
								</a>
							</Button>
						</div>

						<dl className="grid gap-3 text-[14.5px] sm:grid-cols-2">
							<Row label="Firma" value={contactData.companyInfo.companyName} />
							<Row label="Marka" value={contactData.companyInfo.tradeName} />
							<Row label="NIP" value={contactData.companyInfo.nip} mono />
							<Row label="REGON" value={contactData.companyInfo.regon} mono />
							<Row
								label="Siedziba"
								value={
									<address className="not-italic">
										{contactData.address.street}
										<br />
										{contactData.address.postalCode}, {contactData.address.city}
										<br />
										{contactData.address.country}
									</address>
								}
							/>
							<Row
								label="Kontakt"
								value={
									<span>
										<a
											href={`mailto:${contactData.email}`}
											className="border-b border-gold-soft/40 text-gold-soft transition-colors hover:border-cream hover:text-cream"
										>
											{contactData.email}
										</a>
										{contactData.phoneNumbers.filter(Boolean).map((p) => (
											<span key={p} className="block">
												<a
													href={`tel:${(p as string).replace(/\s/g, "")}`}
													className="tabular-nums text-cream transition-colors hover:text-gold-soft"
												>
													{p}
												</a>
											</span>
										))}
									</span>
								}
							/>
						</dl>
					</div>
				</div>
			</section>
		);
	}
}

/* --------------------------- helpers --------------------------- */

function ContactCard({
	icon,
	label,
	title,
	primary,
	children,
}: {
	icon: React.ReactNode;
	label: string;
	title: string;
	primary?: boolean;
	children: React.ReactNode;
}) {
	return (
		<div
			className={`relative flex flex-col overflow-hidden rounded-[24px] border bg-paper p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-32px_rgba(15,45,92,0.28)] ${
				primary ? "border-gold/40" : "border-navy/8"
			}`}
		>
			{primary && (
				<span
					aria-hidden
					className="absolute left-0 top-0 h-[3px] w-full bg-gold"
				/>
			)}
			<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cream-deep/60">
				{icon}
			</div>
			<span className="font-sans text-[10.5px] font-bold uppercase tracking-[0.2em] text-gold-deep">
				{label}
			</span>
			<h3 className="mt-1 mb-3 font-display text-[1.35rem] leading-tight text-navy">
				{title}
			</h3>
			<div className="mt-auto">{children}</div>
		</div>
	);
}

function Row({
	label,
	value,
	mono,
}: {
	label: string;
	value: React.ReactNode;
	mono?: boolean;
}) {
	return (
		<div className="flex flex-col rounded-[14px] border border-cream/12 bg-cream/5 p-4">
			<dt className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-gold-soft">
				{label}
			</dt>
			<dd
				className={`mt-1 font-medium text-cream ${mono ? "tabular-nums" : ""}`}
			>
				{value}
			</dd>
		</div>
	);
}

function PhoneIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			aria-hidden="true"
			focusable="false"
			className="h-5 w-5 text-gold-deep"
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

function MailIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			aria-hidden="true"
			focusable="false"
			className="h-5 w-5 text-gold-deep"
		>
			<rect
				x="3"
				y="5"
				width="18"
				height="14"
				rx="2.5"
				stroke="currentColor"
				strokeWidth="1.6"
			/>
			<path
				d="M3 7l9 6l9-6"
				stroke="currentColor"
				strokeWidth="1.6"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

/* -------------------- Structured data (JSON-LD) -------------------- */

async function buildStructuredData() {
	const contactData = await keystaticReader.singletons.kontakt.readOrThrow();
	const pageUrl = `${env.NEXT_PUBLIC_SITE_URL}${PAGE_PATH}`;

	const contactPage: WithContext<ContactPage> = {
		"@context": "https://schema.org",
		"@type": "ContactPage",
		"@id": `${pageUrl}#contactpage`,
		name: "Kontakt - American Ice Dream",
		url: pageUrl,
		about: { "@id": `${env.NEXT_PUBLIC_SITE_URL}#organization` },
	};

	const organization: WithContext<Organization> = {
		"@context": "https://schema.org",
		"@type": "Organization",
		"@id": `${env.NEXT_PUBLIC_SITE_URL}#organization`,
		name: contactData.companyInfo.companyName,
		alternateName: contactData.companyInfo.tradeName,
		url: env.NEXT_PUBLIC_SITE_URL,
		logo: `${env.NEXT_PUBLIC_SITE_URL}/logo.png`,
		foundingDate: contactData.companyInfo.establishedOn ?? undefined,
		taxID: contactData.companyInfo.nip,
		identifier: [
			{
				"@type": "PropertyValue",
				propertyID: "NIP",
				value: contactData.companyInfo.nip,
			},
			{
				"@type": "PropertyValue",
				propertyID: "REGON",
				value: contactData.companyInfo.regon,
			},
		],
		address: {
			"@type": "PostalAddress",
			streetAddress: contactData.address.street,
			postalCode: contactData.address.postalCode,
			addressLocality: contactData.address.city,
			addressCountry: "PL",
		},
		contactPoint: contactData.phoneNumbers.filter(Boolean).map((phone) => ({
			"@type": "ContactPoint",
			contactType: "customer service",
			telephone: phone,
			email: contactData.email,
			availableLanguage: ["pl"],
			areaServed: "PL",
		})),
	};

	const breadcrumb: WithContext<BreadcrumbList> = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Strona główna",
				item: env.NEXT_PUBLIC_SITE_URL,
			},
			{ "@type": "ListItem", position: 2, name: "Kontakt", item: pageUrl },
		],
	};

	return [contactPage, organization, breadcrumb];
}
