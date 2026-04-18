import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, TikTok } from "@/components/icons";

const nav = [
	{ href: "#o-nas", label: "O nas" },
	{ href: "#produkty", label: "Produkty" },
	{ href: "#lokalizacje", label: "Lokalizacje" },
	{ href: "#lodojady", label: "Lodojady" },
	{ href: "#faq", label: "FAQ" },
];

const business = [
	{ href: "#", label: "Catering i eventy" },
	{ href: "#", label: "Torty lodowe" },
	{ href: "#", label: "Franczyza" },
	{ href: "#", label: "Hurt" },
	{ href: "#", label: "Kariera" },
];

export function Footer() {
	return (
		<footer className="relative overflow-hidden bg-navy pt-20 text-cream/75">
			<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-soft/50 to-transparent" />

			<div className="container-page grid grid-cols-[1.4fr_1fr_1fr_1.1fr] gap-10 pb-15 max-lg:grid-cols-2 max-sm:grid-cols-1">
				<div>
					<Image
						src="/logo.png"
						alt="American Ice Dream"
						width={180}
						height={160}
						className="h-18 w-auto opacity-95 brightness-0 invert drop-shadow-[0_0_8px_rgba(255,255,255,0.08)]"
					/>
					<p className="mt-4 mb-6 max-w-xs text-sm leading-relaxed text-cream/60">
						Rzemieślnicza lodziarnia od 2006 roku. Kremowe lody włoskie,
						świderki, desery i granity — robione codziennie ze świeżych
						składników.
					</p>
					<div className="flex gap-3">
						{[
							{ href: "#", label: "TikTok", Icon: TikTok },
							{ href: "#", label: "Instagram", Icon: Instagram },
							{ href: "#", label: "Facebook", Icon: Facebook },
						].map(({ href, label, Icon }) => (
							<a
								key={label}
								href={href}
								aria-label={label}
								className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/10 bg-cream/8 text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-navy"
							>
								<Icon className="h-4 w-4" />
							</a>
						))}
					</div>
				</div>

				<FooterCol title="Nawigacja" items={nav} />
				<FooterCol title="Dla firm" items={business} />

				<div>
					<h4 className="mb-5 font-sans text-[13px] font-semibold uppercase tracking-[0.18em] text-cream">
						Kontakt
					</h4>
					<p className="text-sm leading-[1.8] text-cream/70">
						<a
							href="mailto:hej@americanicedream.pl"
							className="border-b border-gold-soft/30 font-medium text-cream hover:text-gold-soft"
						>
							hej@americanicedream.pl
						</a>
						<br />
						<a
							href="tel:+48322221234"
							className="border-b border-gold-soft/30 font-medium text-cream hover:text-gold-soft"
						>
							+48 32 222 12 34
						</a>
					</p>
					<p className="mt-3 text-sm leading-relaxed text-cream/70">
						Katowice · Gliwice · Chorzów · Zabrze · Bytom · Tychy
					</p>
				</div>
			</div>

			<div className="container-page flex flex-wrap items-center justify-between gap-4 border-t border-cream/10 py-6 text-[12.5px] text-cream/50 max-sm:flex-col max-sm:text-center">
				<span>
					© 2006 — 2026 American Ice Dream. Wszelkie prawa zastrzeżone.
				</span>
				<span>
					<Link href="#" className="hover:text-gold-soft">
						Polityka prywatności
					</Link>{" "}
					·{" "}
					<Link href="#" className="hover:text-gold-soft">
						Regulamin
					</Link>{" "}
					·{" "}
					<Link href="#" className="hover:text-gold-soft">
						Cookies
					</Link>
				</span>
			</div>
		</footer>
	);
}

function FooterCol({
	title,
	items,
}: {
	title: string;
	items: { href: string; label: string }[];
}) {
	return (
		<div>
			<h4 className="mb-5 font-sans text-[13px] font-semibold uppercase tracking-[0.18em] text-cream">
				{title}
			</h4>
			<ul className="flex flex-col gap-2.5">
				{items.map((item) => (
					<li key={item.label}>
						<Link
							href={item.href}
							className="text-sm text-cream/65 transition-colors hover:text-gold-soft"
						>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
