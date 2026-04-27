import { SiApple, SiGoogleplay } from "@icons-pack/react-simple-icons";
import {
	ArrowRightIcon,
	CardholderIcon,
	CheckCircle,
	ContactlessPaymentIcon,
	DownloadIcon,
	StarIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LocationBreadcrumb } from "@/components/sections/location/breadcrumb";
import { LoyaltyFaqClient } from "@/components/sections/loyalty/faq-client";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { QrCode } from "@/components/ui/qr-code";
import { ScriptAccent } from "@/components/ui/script-accent";
import { env } from "@/env";
import { loyalty } from "@/lib/data/loyalty";

const PAGE_PATH = "/program-lojalnosciowy";

export const metadata: Metadata = {
	title: "Karta LODOJADA - program lojalnościowy American Ice Dream",
	description:
		"Zbieraj pieczątki w aplikacji Embargo: 8 zł = 1 pieczątka, 10 pieczątek = darmowy produkt. NFC, działa we wszystkich 6 lodziarniach American Ice Dream.",
	alternates: { canonical: PAGE_PATH },
	openGraph: {
		type: "website",
		locale: "pl_PL",
		title: "Karta LODOJADA - program lojalnościowy American Ice Dream",
		description:
			"Zbieraj pieczątki w aplikacji Embargo. 8 zł = 1 pieczątka, 10 pieczątek = darmowy produkt.",
		url: `${env.NEXT_PUBLIC_SITE_URL}/${PAGE_PATH}`,
	},
};

export default function ProgramLojalnosciowyPage() {
	const structuredData = buildStructuredData();

	return (
		<>
			<HeroSection />
			<HowItWorksSection />
			<MechanicsSection />
			<FaqSection />
			<LoyaltyCtaSection />

			{structuredData.map((payload, i) => (
				<script
					key={`ld-${i}`}
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD payload is controlled
					dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
				/>
			))}
		</>
	);
}

/* -------------------------- Sections -------------------------- */

function HeroSection() {
	return (
		<section
			className="relative overflow-hidden pt-6"
			aria-labelledby="loy-hero-title"
		>
			<LocationBreadcrumb
				className="flex justify-center"
				crumbs={[
					{ href: "/", label: "Strona główna" },
					{ label: "Karta LODOJADA" },
				]}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -right-56 -top-32 h-[520px] w-[520px] rounded-full"
				style={{
					background:
						"radial-gradient(circle at 30% 30%, rgba(193,154,91,0.22), transparent 62%)",
				}}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full"
				style={{
					background:
						"radial-gradient(circle, rgba(60,182,227,0.16), transparent 60%)",
				}}
			/>

			<div className="container-page relative grid items-center gap-14 pb-20 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:pb-28 lg:pt-16">
				<div>
					<EmbargoBadge />
					<h1
						id="loy-hero-title"
						className="mt-5 mb-5 font-display font-semibold text-[clamp(2.5rem,5vw+0.4rem,4.25rem)] leading-[0.98] tracking-[-0.03em] text-navy"
					>
						{loyalty.hero.title}
						<span className="mt-2 block font-display text-[clamp(1.25rem,2.2vw+0.3rem,1.85rem)] font-normal leading-[1.1] tracking-[-0.01em]">
							<ScriptAccent size="sm">Nasz program lojalnościowy</ScriptAccent>
						</span>
					</h1>
					<p className="mb-4 text-[1.15rem] font-medium text-navy">
						{loyalty.hero.tagline}
					</p>
					<p className="mb-9 max-w-xl text-[1.0625rem] leading-relaxed text-ink-soft">
						{loyalty.hero.lead}
					</p>

					<div className="flex flex-wrap gap-3">
						<AppStoreButton href={loyalty.app.appStoreUrl} />
						<GooglePlayButton href={loyalty.app.googlePlayUrl} />
					</div>

					<p className="mt-5 text-[13px] text-muted">
						Aplikacja {loyalty.app.name} jest bezpłatna
					</p>
				</div>

				<HeroVisual />
			</div>
		</section>
	);
}

function HeroVisual() {
	return (
		<div className="relative mx-auto w-full max-w-[440px]">
			<div
				aria-hidden
				className="absolute inset-[-12%] rounded-full border border-dashed border-gold-soft/50"
				style={{ animation: "var(--animate-spin-rev)" }}
			/>
			<div className="relative isolate overflow-hidden rounded-[36px] border border-gold/30 bg-navy p-8 text-cream shadow-[0_40px_80px_-40px_rgba(15,45,92,0.5)] lg:p-10">
				<div
					aria-hidden
					className="pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full"
					style={{
						background:
							"radial-gradient(circle, rgba(193,154,91,0.28), transparent 62%)",
					}}
				/>
				<div className="relative flex items-center justify-between gap-4">
					<div>
						<p className="font-sans text-[10.5px] font-bold uppercase tracking-[0.22em] text-gold-soft">
							Karta LODOJADA
						</p>
						<p className="mt-1 font-display text-[1.35rem] leading-tight">
							Agnieszka Kowalska
						</p>
					</div>
					<Image
						src={loyalty.app.iconSrc}
						alt=""
						aria-hidden="true"
						width={48}
						height={48}
						className="h-12 w-12 rounded-[12px] border border-cream/15 shadow-[0_6px_16px_rgba(0,0,0,0.35)]"
					/>
				</div>

				<div className="relative mt-8 grid grid-cols-5 gap-2.5">
					{Array.from({ length: 10 }).map((_, i) => (
						<StampDot
							key={i}
							filled={i < 7}
							label={`pieczątka ${i + 1} z 10`}
						/>
					))}
				</div>

				<div className="relative mt-7 flex items-end justify-between gap-4">
					<div>
						<p className="text-[11px] uppercase tracking-[0.18em] text-cream/55">
							Saldo
						</p>
						<p className="font-display text-[2.5rem] leading-none tabular-nums">
							7<span className="text-[1.1rem] text-cream/50">/10</span>
						</p>
						<p className="mt-1 text-[12.5px] text-cream/65">
							Jeszcze 3 pieczątki do darmowego produktu
						</p>
					</div>
					<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cream text-navy">
						<ContactlessPaymentIcon />
					</div>
				</div>
			</div>
			<span
				aria-hidden
				className="absolute -bottom-4 left-8 rounded-full bg-gold px-4 py-1.5 font-sans text-[10.5px] font-bold uppercase tracking-[0.2em] text-navy-ink shadow-[0_10px_24px_-8px_rgba(193,154,91,0.8)]"
			>
				Demo karty w aplikacji
			</span>
		</div>
	);
}

function StampDot({ filled, label }: { filled: boolean; label: string }) {
	return (
		<span
			aria-label={label}
			role="img"
			className={`relative aspect-square rounded-full border transition-colors ${
				filled
					? "border-gold bg-gold text-navy-ink"
					: "border-cream/25 bg-cream/5 text-cream/30"
			}`}
		>
			<span className="absolute inset-0 flex items-center justify-center">
				{filled ? (
					<svg
						viewBox="0 0 24 24"
						fill="none"
						aria-hidden="true"
						focusable="false"
						className="h-3.5 w-3.5"
					>
						<path
							d="M5 12l5 5L20 7"
							stroke="currentColor"
							strokeWidth="2.4"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				) : null}
			</span>
		</span>
	);
}

function HowItWorksSection() {
	return (
		<section
			className="bg-cream-soft py-20 lg:py-28"
			aria-labelledby="loy-how-title"
		>
			<div className="container-page">
				<div className="mb-14 max-w-2xl">
					<Eyebrow>Jak to działa</Eyebrow>
					<h2
						id="loy-how-title"
						className="mt-4 mb-4 font-display text-[clamp(1.9rem,3.4vw+0.8rem,3rem)] leading-[1.08] tracking-[-0.02em] text-navy"
					>
						Cztery kroki{" "}
						<ScriptAccent size="sm">i pierwsza nagroda</ScriptAccent>
					</h2>
					<p className="text-[15.5px] text-ink-soft">
						Bez papierowych kart, bez numerów telefonu, bez szukania w portfelu.
						Wszystko w aplikacji - tak szybko, że klienci w kolejce za Tobą
						nawet nie zauważą.
					</p>
				</div>

				<ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
					{loyalty.steps.map((step, i) => (
						<li
							key={step.id}
							className="group relative flex flex-col overflow-hidden rounded-[24px] border border-navy/8 bg-paper p-7 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-gold"
						>
							<span
								aria-hidden
								className="absolute right-5 top-5 font-display text-[4rem] leading-none text-cream-deep transition-colors duration-300 group-hover:text-gold-soft/50"
							>
								{String(i + 1).padStart(2, "0")}
							</span>
							<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cream-deep/60">
								<StepIcon id={step.id} />
							</div>
							<h3 className="mb-2 font-display text-[1.25rem] leading-tight text-navy">
								{step.title}
							</h3>
							<p className="text-[14.5px] leading-[1.6] text-ink-soft">
								{step.description}
							</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}

function MechanicsSection() {
	return (
		<section className="py-24 lg:py-28" aria-labelledby="loy-mech-title">
			<div className="container-page">
				<div className="mb-12 flex flex-wrap items-end justify-between gap-6">
					<div className="max-w-2xl">
						<Eyebrow>Mechanika bez gwiazdek regulaminu</Eyebrow>
						<h2
							id="loy-mech-title"
							className="mt-4 mb-4 font-display text-[clamp(1.9rem,3.4vw+0.8rem,3rem)] leading-[1.08] tracking-[-0.02em] text-navy"
						>
							Konkrety <ScriptAccent size="sm">żeby było jasno</ScriptAccent>
						</h2>
						<p className="text-[15.5px] text-ink-soft">
							Żadnych haczyków, minimalnych kwot ukrytych w regulaminie ani
							wygasania po 30 dniach. To co widzisz tutaj, to dokładnie to, co
							dostajesz w aplikacji.
						</p>
					</div>
				</div>

				<div className="grid gap-4 md:grid-cols-2">
					{loyalty.mechanics.map((m) => (
						<article
							key={m.id}
							className="relative flex flex-col overflow-hidden rounded-[24px] border border-navy/8 bg-paper p-7 transition-[border-color,box-shadow] duration-300 hover:border-gold hover:shadow-[0_24px_60px_-32px_rgba(15,45,92,0.22)]"
						>
							<span className="font-sans text-[10.5px] font-bold uppercase tracking-[0.22em] text-gold-deep">
								{m.headline}
							</span>
							<p className="mt-2 font-display text-[clamp(1.75rem,2.4vw+0.8rem,2.5rem)] leading-[1.05] tracking-[-0.02em] text-navy">
								{m.value}
							</p>
							<p className="mt-4 text-[14.75px] leading-[1.65] text-ink-soft">
								{m.description}
							</p>
						</article>
					))}
				</div>

				<div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-[24px] border border-dashed border-navy/15 bg-cream-soft px-6 py-5">
					<p className="max-w-xl text-[14.5px] leading-[1.6] text-ink-soft">
						<strong className="text-navy">Dobra wiadomość dla rodzin:</strong> w
						aplikacji Embargo można prowadzić jedno konto na całą rodzinę -
						wszystkie zakupy zliczają się wspólnie, a nagrodę odbiera każdy, kto
						ma aplikację.
					</p>
					<Button asChild variant="ghost">
						<Link href="/program-lojalnosciowy#faq">
							Zobacz pełne FAQ
							<ArrowRightIcon />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}

function FaqSection() {
	return (
		<section
			id="faq"
			className="bg-cream-soft py-24 lg:py-28"
			aria-labelledby="loy-faq-title"
		>
			<div className="container-page grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
				<div className="lg:sticky lg:top-28 lg:self-start">
					<Eyebrow>FAQ · Program lojalnościowy</Eyebrow>
					<h2
						id="loy-faq-title"
						className="mt-4 mb-5 font-display text-[clamp(1.9rem,3.4vw+0.8rem,3rem)] leading-[1.08] tracking-[-0.02em] text-navy"
					>
						Najczęstsze <ScriptAccent size="sm">pytania o kartę</ScriptAccent>
					</h2>
					<p className="max-w-sm text-[15.5px] text-ink-soft">
						Jeśli coś nie zostało tu omówione - napisz do nas na{" "}
						<a
							href="mailto:hej@americanicedream.pl"
							className="border-b border-sky-deep text-sky-deep transition-colors hover:text-navy"
						>
							hej@americanicedream.pl
						</a>
						. Odpowiadamy w dni robocze w ciągu 24h.
					</p>
				</div>

				<LoyaltyFaqClient items={loyalty.faqs} />
			</div>
		</section>
	);
}

export async function LoyaltyCtaSection() {
	return (
		<section className="py-24 lg:py-28" aria-labelledby="loy-cta-title">
			<div className="container-page">
				<div className="relative overflow-hidden rounded-[32px] bg-navy px-8 py-14 text-cream shadow-[0_30px_70px_-30px_rgba(15,45,92,0.4)] lg:px-16 lg:py-20">
					<div
						aria-hidden
						className="pointer-events-none absolute -right-40 -top-40 h-[460px] w-[460px] rounded-full"
						style={{
							background:
								"radial-gradient(circle at 30% 30%, rgba(193,154,91,0.26), transparent 60%)",
						}}
					/>
					<div
						aria-hidden
						className="pointer-events-none absolute -bottom-48 -left-28 h-[400px] w-[400px] rounded-full"
						style={{
							background:
								"radial-gradient(circle, rgba(60,182,227,0.2), transparent 60%)",
						}}
					/>

					<div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
						<div>
							<Eyebrow light>Zacznij zbierać pieczątki</Eyebrow>
							<h2
								id="loy-cta-title"
								className="mt-4 mb-5 font-display text-white text-[clamp(2rem,4vw+0.6rem,3.5rem)] leading-[1.04] tracking-tight"
							>
								Dołącz do{" "}
								<ScriptAccent tone="gold-soft">LODOJADÓW </ScriptAccent> i
								odbieraj gałki w nagrodę.
							</h2>
							<p className="mb-8 max-w-xl text-[1.0625rem] leading-relaxed text-cream/80">
								Pobierz aplikację Embargo i zeskanuj QR przy kasie przy
								najbliższej wizycie. Pierwsza pieczątka pojawi się automatycznie
								na Twojej Karcie LODOJADA.
							</p>

							<div className="flex flex-wrap gap-3">
								<AppStoreButton
									href={loyalty.app.appStoreUrl}
									variant="onDark"
								/>
								<GooglePlayButton
									href={loyalty.app.googlePlayUrl}
									variant="onDark"
								/>
							</div>
						</div>

						<div className="flex flex-col items-center gap-4">
							<div className="relative">
								<div className="rounded-[24px] border border-gold/40 bg-paper p-4 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.5)]">
									<QrCode
										value={loyalty.app.downloadTargetUrl}
										size={220}
										fg="#0f2d5c"
										bg="#fdfaf2"
										level="Q"
										title="Zeskanuj, aby pobrać aplikację Embargo z Kartą LODOJADA"
										className="block h-[220px] w-[220px] -rotate-90"
									/>
								</div>
								<span className="absolute -top-4 -right-4 flex h-14 w-14 items-center justify-center rounded-[16px] border-2 border-paper bg-paper shadow-[0_8px_20px_rgba(0,0,0,0.35)]">
									<Image
										src={loyalty.app.iconSrc}
										alt="Ikona aplikacji Embargo"
										width={48}
										height={48}
										className="h-12 w-12 rounded-[12px]"
									/>
								</span>
							</div>
							<p className="max-w-[240px] text-center font-script text-lg text-gold-soft">
								Zeskanuj telefonem - aplikacja sama odpali się w Twoim sklepie z
								aplikacjami.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

/* -------------------------- UI Helpers -------------------------- */

function EmbargoBadge() {
	return (
		<div className="inline-flex items-center gap-3 rounded-full border border-navy/10 bg-paper py-1.5 pl-4 pr-4 shadow-[0_6px_18px_-10px_rgba(15,45,92,0.25)]">
			<Image
				src={loyalty.app.iconSrc}
				alt=""
				aria-hidden="true"
				width={36}
				height={36}
				className="size-8"
			/>
			<span className="flex flex-col leading-tight">
				<span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
					obsługiwane przez
				</span>
				<span className="font-display text-[14.5px] font-medium text-navy">
					{loyalty.app.name}
				</span>
			</span>
		</div>
	);
}

function AppStoreButton({
	href,
	variant = "onLight",
}: {
	href: string;
	variant?: "onLight" | "onDark";
}) {
	const classes =
		variant === "onDark"
			? "bg-cream text-navy-ink hover:bg-paper"
			: "bg-navy text-cream hover:bg-navy-ink";
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Pobierz Embargo w App Store"
			className={`inline-flex items-center gap-3 rounded-2xl px-5 py-3 transition-[transform,background-color] duration-300 hover:-translate-y-0.5 ${classes}`}
		>
			<SiApple className="size-5" />
			<span className="flex flex-col items-start leading-tight">
				<span className="font-sans text-[10.5px] font-medium uppercase tracking-[0.18em] opacity-70">
					Pobierz w
				</span>
				<span className="font-display text-[1.125rem] tracking-[-0.01em]">
					App Store
				</span>
			</span>
		</a>
	);
}

function GooglePlayButton({
	href,
	variant = "onLight",
}: {
	href: string;
	variant?: "onLight" | "onDark";
}) {
	const classes =
		variant === "onDark"
			? "border-cream/30 text-cream hover:bg-cream/10"
			: "border-navy/20 text-navy hover:bg-paper hover:border-navy";
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Pobierz Embargo w Google Play"
			className={`inline-flex items-center gap-3 rounded-2xl border px-5 py-3 transition-[transform,background-color,border-color] duration-300 hover:-translate-y-0.5 ${classes}`}
		>
			<SiGoogleplay className="size-5" />
			<span className="flex flex-col items-start leading-tight">
				<span className="font-sans text-[10.5px] font-medium uppercase tracking-[0.18em] opacity-70">
					Pobierz z
				</span>
				<span className="font-display text-[1.125rem] tracking-[-0.01em]">
					Google Play
				</span>
			</span>
		</a>
	);
}

function StepIcon({ id }: { id: string }) {
	const cls = "h-6 w-6 text-gold-deep";
	if (id === "download") {
		return <DownloadIcon className={cls} />;
	}
	if (id === "activate") {
		return <CardholderIcon className={cls} />;
	}
	if (id === "collect") {
		return <CheckCircle className={cls} />;
	}
	return <StarIcon className={cls} />;
}

/* -------------------- Structured data (JSON-LD) -------------------- */

function buildStructuredData() {
	const pageUrl = `${env.NEXT_PUBLIC_SITE_URL}/${PAGE_PATH}`;

	const webPage = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		"@id": `${pageUrl}#webpage`,
		name: "Karta LODOJADA - program lojalnościowy American Ice Dream",
		url: pageUrl,
		description:
			"Zbieraj pieczątki w aplikacji Embargo: 8 zł = 1 pieczątka, 10 pieczątek = darmowy produkt.",
		about: { "@id": `${env.NEXT_PUBLIC_SITE_URL}#organization` },
	};

	const faqPage = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"@id": `${pageUrl}#faq`,
		mainEntity: loyalty.faqs.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer,
			},
		})),
	};

	const howTo = {
		"@context": "https://schema.org",
		"@type": "HowTo",
		"@id": `${pageUrl}#howto`,
		name: "Jak dołączyć do programu lojalnościowego Karta LODOJADA",
		description:
			"Cztery kroki, żeby zacząć zbierać pieczątki i odbierać nagrody w lodziarniach American Ice Dream.",
		totalTime: "PT3M",
		tool: [{ "@type": "HowToTool", name: loyalty.app.name }],
		step: loyalty.steps.map((step, i) => ({
			"@type": "HowToStep",
			position: i + 1,
			name: step.title,
			text: step.description,
		})),
	};

	const mobileApp = {
		"@context": "https://schema.org",
		"@type": "MobileApplication",
		"@id": `${pageUrl}#app`,
		name: loyalty.app.fullName,
		alternateName: loyalty.app.name,
		applicationCategory: "LifestyleApplication",
		operatingSystem: "iOS, Android",
		image: `${env.NEXT_PUBLIC_SITE_URL}${loyalty.app.iconSrc}`,
		author: { "@type": "Organization", name: loyalty.app.publisher },
		offers: { "@type": "Offer", price: "0", priceCurrency: "PLN" },
		installUrl: [loyalty.app.appStoreUrl, loyalty.app.googlePlayUrl],
	};

	const breadcrumb = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Strona główna",
				item: env.NEXT_PUBLIC_SITE_URL,
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Karta LODOJADA",
				item: pageUrl,
			},
		],
	};

	return [webPage, faqPage, howTo, mobileApp, breadcrumb];
}
