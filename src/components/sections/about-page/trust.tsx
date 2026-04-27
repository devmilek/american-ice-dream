import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ScriptAccent } from "@/components/ui/script-accent";
import type { AboutPageData } from "@/lib/data/about";

export function AboutTrust({ data }: { data: AboutPageData }) {
	const { trust } = data;

	return (
		<section
			id="zaufanie"
			className="py-24 lg:py-28"
			aria-labelledby="trust-title"
		>
			<div className="container-page">
				<div className="mb-14 grid items-end gap-10 lg:grid-cols-[0.95fr_1.05fr]">
					<div>
						<Eyebrow>Zaufanie · Trustworthiness</Eyebrow>
						<h2
							id="trust-title"
							className="mt-4 mb-5 font-display text-[clamp(2rem,3.6vw+0.8rem,3.5rem)] leading-[1.05] tracking-[-0.02em] text-navy"
						>
							Co stoi <ScriptAccent size="sm">za naszą marką</ScriptAccent>
						</h2>
					</div>
					<p className="max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">
						Firma to nie tylko logo i witryna. To konkretni ludzie, procedury,
						dokumenty i odpowiedzialność - wszystko, co pozwala Ci spokojnie dać
						dziecku porcję lodów.
					</p>
				</div>

				{/* Wartości */}
				<ul className="mb-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{trust.values.map((v) => (
						<li
							key={v.title}
							className="relative overflow-hidden rounded-[22px] border border-navy/8 bg-paper p-6"
						>
							<span
								aria-hidden
								className="absolute left-0 top-0 h-[3px] w-full bg-gold"
							/>
							<h3 className="mb-2 font-display text-[1.15rem] leading-tight text-navy">
								{v.title}
							</h3>
							<p className="text-[14px] leading-[1.6] text-ink-soft">
								{v.body}
							</p>
						</li>
					))}
				</ul>

				{/* Zespół */}
				<div className="mb-20">
					<div className="mb-8 flex flex-wrap items-end justify-between gap-4">
						<div>
							<Eyebrow>Zespół</Eyebrow>
							<h3 className="mt-3 font-display text-[clamp(1.6rem,2.4vw+0.8rem,2.25rem)] leading-[1.1] text-navy">
								Ludzie, którzy robią{" "}
								<ScriptAccent size="sm">American Ice Dream</ScriptAccent>
							</h3>
						</div>
						<p className="max-w-md text-[14.5px] leading-[1.65] text-ink-soft">
							Ponad 30 osób - od zespołu produkcji po obsługę sali - wszyscy
							grają w tej samej drużynie od lat.
						</p>
					</div>

					<ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{trust.team.map((member) => (
							<li
								key={member.name}
								className="group overflow-hidden rounded-[24px] border border-navy/8 bg-paper shadow-[0_8px_24px_rgba(15,45,92,0.05)]"
							>
								{member.photo && (
									<div className="relative aspect-4/5 overflow-hidden bg-cream-deep/60">
										<Image
											src={member.photo.src}
											alt={member.photo.alt}
											fill
											sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 32vw"
											className="object-contain p-8 transition-transform duration-500 ease-silk group-hover:scale-[1.03]"
										/>
										{member.photo.placeholder && (
											<span className="absolute left-3 top-3 rounded-full bg-paper/90 px-2.5 py-0.5 font-sans text-[9.5px] font-bold uppercase tracking-[0.16em] text-muted">
												Placeholder
											</span>
										)}
									</div>
								)}
								<div className="p-6">
									<span className="block font-sans text-[10.5px] font-bold uppercase tracking-[0.2em] text-gold-deep">
										{member.role}
									</span>
									<strong className="mt-1 block font-display text-[1.25rem] leading-tight text-navy">
										{member.name}
									</strong>
									{member.location && (
										<p className="mt-2 text-[13.5px] text-ink-soft">
											{member.location}
										</p>
									)}
								</div>
							</li>
						))}
					</ul>
				</div>

				{/* Certyfikaty */}
				<div className="mb-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
					<div className="lg:sticky lg:top-28 lg:self-start">
						<Eyebrow>Bezpieczeństwo żywności</Eyebrow>
						<h3 className="mt-4 mb-3 font-display text-[clamp(1.6rem,2.4vw+0.8rem,2.25rem)] leading-[1.1] text-navy">
							Certyfikaty i <ScriptAccent size="sm">kontrole</ScriptAccent>
						</h3>
						<p className="text-[15.5px] leading-[1.7] text-ink-soft">
							Szczególnie ważne dla rodziców z małymi dziećmi - pokazujemy
							konkretne procedury i organy, które nas kontrolują.
						</p>
					</div>
					<ul className="grid gap-3">
						{trust.certificates.map((cert) => (
							<li
								key={cert.title}
								className="flex items-start gap-4 rounded-[20px] border border-navy/8 bg-paper p-5"
							>
								<span
									aria-hidden
									className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-deep"
								>
									<ShieldIcon />
								</span>
								<div className="flex-1">
									<strong className="block font-display text-[1.1rem] leading-tight text-navy">
										{cert.title}
									</strong>
									<span className="mt-0.5 block text-[11.5px] font-semibold uppercase tracking-[0.14em] text-gold-deep">
										{cert.issuer}
									</span>
									<p className="mt-2 text-[14px] leading-[1.6] text-ink-soft">
										{cert.body}
									</p>
								</div>
							</li>
						))}
					</ul>
				</div>

				{/* Program Lodojady - krótki baner */}
				<div className="mb-16 overflow-hidden rounded-lg border border-dashed border-navy/20 bg-cream-soft p-8 lg:p-10">
					<div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
						<div className="max-w-xl">
							<Eyebrow>Lodojady · program lojalnościowy</Eyebrow>
							<h3 className="mt-3 mb-2 font-display text-[clamp(1.5rem,2vw+0.8rem,2rem)] leading-[1.15] text-navy">
								Społeczność, która wraca po więcej
							</h3>
							<p className="text-[15px] leading-[1.65] text-ink-soft">
								Lodojady to nasz sposób na podziękowanie gościom, którzy
								wybierają nas co tydzień. Co 8. porcja na nasz koszt, urodzinowa
								porcja gratis i pełen ślad wizyt w aplikacji Embargo - to też
								ważny element budowania zaufania.
							</p>
						</div>
						<Button asChild variant="outline" size="lg">
							<Link href="/program-lojalnosciowy">
								O programie Lodojady
								<ArrowRightIcon />
							</Link>
						</Button>
					</div>
				</div>

				<CompanyInfo data={data} />
			</div>
		</section>
	);
}

function CompanyInfo({ data }: { data: AboutPageData }) {
	const { trust, founder } = data;
	const { company } = trust;
	const established = new Date(company.establishedOn);
	const establishedLabel = established.toLocaleDateString("pl-PL", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	return (
		<div
			id="dane-firmy"
			className="grid gap-6 rounded-lg border border-navy/10 bg-paper p-8 shadow-[0_8px_24px_rgba(15,45,92,0.06)] lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:p-10"
		>
			<div>
				<Eyebrow>Dane firmy</Eyebrow>
				<h3 className="mt-3 mb-3 font-display text-[1.6rem] leading-[1.15] text-navy">
					Kto stoi za American Ice Dream
				</h3>
				<p className="text-[14.5px] leading-[1.65] text-ink-soft">
					Pełne, widoczne dane firmowe - nie tylko w stopce przy RODO.
					Prowadzimy działalność nieprzerwanie od {establishedLabel}.
				</p>
				<p className="mt-4 text-[14px] italic text-navy-soft">
					Właścicielka: <strong>{founder.name}</strong>,{" "}
					{founder.role.toLowerCase()}.
				</p>
			</div>

			<dl className="grid gap-3 text-[14.5px] sm:grid-cols-2">
				<Row label="Nazwa firmy" value={company.legalName} />
				<Row label="Marka handlowa" value={company.tradeName} />
				<Row label="NIP" value={company.taxId} mono />
				<Row label="REGON" value={company.regon} mono />
				<Row
					label="Siedziba"
					value={
						<address className="not-italic">
							{company.headquarters.street}
							<br />
							{company.headquarters.postal} {company.headquarters.city}
							<br />
							{company.headquarters.country}
						</address>
					}
				/>
				<Row
					label="Kontakt"
					value={
						<span>
							<a
								href={`mailto:${company.contact.email}`}
								className="border-b border-sky-deep/40 text-sky-deep transition-colors hover:border-navy hover:text-navy"
							>
								{company.contact.email}
							</a>
							{company.contact.phone && (
								<>
									<br />
									<a
										href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
										className="tabular-nums text-navy transition-colors hover:text-sky-deep"
									>
										{company.contact.phone}
									</a>
								</>
							)}
						</span>
					}
				/>
			</dl>
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
		<div className="flex flex-col rounded-[14px] border border-dashed border-navy/10 p-4">
			<dt className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
				{label}
			</dt>
			<dd
				className={`mt-1 font-medium text-navy ${mono ? "tabular-nums" : ""}`}
			>
				{value}
			</dd>
		</div>
	);
}

function ShieldIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			aria-hidden="true"
			focusable="false"
			className="h-5 w-5"
		>
			<path
				d="M12 3l8 3v6c0 4.5-3.2 8.3-8 9c-4.8-.7-8-4.5-8-9V6l8-3z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinejoin="round"
			/>
			<path
				d="M9 12.5l2.2 2.2L15 11"
				stroke="currentColor"
				strokeWidth="1.6"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
