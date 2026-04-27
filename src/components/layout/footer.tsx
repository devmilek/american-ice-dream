import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, TikTok } from "@/components/icons";
import { getContactData, getLocationsData } from "@/lib/keystatic/reader";
import { Fragment } from "react";

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

export async function Footer() {
	const contact = await getContactData();
	const locations = await getLocationsData();
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
						className="h-18 w-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.08)]"
					/>
					<p className="mt-4 mb-6 max-w-xs text-sm leading-relaxed text-cream/60">
						Rzemieślnicza lodziarnia od 2006 roku. Kremowe lody włoskie,
						świderki, desery i granity - robione codziennie ze świeżych
						składników.
					</p>
					<div className="flex gap-3">
						{[
							{
								href: contact.socialMedia.tiktok.url,
								label: "TikTok",
								Icon: TikTok,
							},
							{
								href: contact.socialMedia.instagram.url,
								label: "Instagram",
								Icon: Instagram,
							},
							{
								href: contact.socialMedia.facebook.url,
								label: "Facebook",
								Icon: Facebook,
							},
						].map(({ href, label, Icon }) => (
							<a
								target="_blank"
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
				{/* <FooterCol title="Dla firm" items={business} /> */}

				<div className="col-span-2">
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
						{contact.phoneNumbers.map((phone) => (
							<Fragment key={phone}>
								<a
									href={`tel:${phone}`}
									className="border-b border-gold-soft/30 font-medium text-cream hover:text-gold-soft"
								>
									{phone}
								</a>
								<br />
							</Fragment>
						))}
					</p>
					<p className="mt-3 text-sm leading-relaxed text-cream/70">
						{locations.map((location, index) => (
							<Link
								key={location.slug}
								href={`/lokalizacje/${location.slug}`}
								className="hover:underline"
							>
								{location.entry.address.city} {location.entry.address.venue}
								{index < locations.length - 1 ? " · " : ""}
							</Link>
						))}
					</p>
				</div>
			</div>

			<div className="container-page flex flex-wrap items-center justify-between gap-4 border-t border-cream/10 py-6 text-[12.5px] text-cream/50 max-sm:flex-col max-sm:text-center">
				<span>
					© 2006 - 2026 American Ice Dream. Wszelkie prawa zastrzeżone.
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
