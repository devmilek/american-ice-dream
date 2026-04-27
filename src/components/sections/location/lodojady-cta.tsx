import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { QrCode } from "@/components/ui/qr-code";
import { ScriptAccent } from "@/components/ui/script-accent";
import type { LocalizationEntry } from "@/keystatic/location-collection";
import { loyalty } from "@/lib/data/loyalty";

export function LocationLodojadyCta({
	details,
}: {
	details: LocalizationEntry;
}) {
	return (
		<section
			id="lodojady"
			className="py-24 lg:py-28"
			aria-labelledby="loc-lodojady-title"
		>
			<div className="container-page">
				<div className="relative overflow-hidden rounded-[32px] bg-navy px-8 py-12 text-cream shadow-[0_30px_70px_-30px_rgba(15,45,92,0.4)] lg:px-16 lg:py-16">
					<div
						aria-hidden
						className="pointer-events-none absolute -right-32 -top-32 h-[380px] w-[380px] rounded-full"
						style={{
							background:
								"radial-gradient(circle at 30% 30%, rgba(193,154,91,0.22), transparent 60%)",
						}}
					/>
					<div
						aria-hidden
						className="pointer-events-none absolute -bottom-40 -left-24 h-[320px] w-[320px] rounded-full"
						style={{
							background:
								"radial-gradient(circle, rgba(60,182,227,0.18), transparent 60%)",
						}}
					/>

					<div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
						<div>
							<Eyebrow light>Program lojalnościowy Embargo</Eyebrow>
							<h2
								id="loc-lodojady-title"
								className="mt-4 mb-5 font-display text-[clamp(1.9rem,3.6vw+0.8rem,3.25rem)] text-white leading-[1.04] tracking-[-0.02em]"
							>
								Dołącz do{" "}
								<ScriptAccent tone="gold-soft">Lodojadów</ScriptAccent> w{" "}
								{details.address.city}
							</h2>
							<p className="mb-6 max-w-xl text-[1.0625rem] leading-relaxed text-cream/80">
								{details.lodojady.intro}
							</p>

							<ul className="mb-8 grid gap-2.5 text-[14.5px] text-cream/85 sm:grid-cols-2">
								<BulletRow>Co 8. porcja na nasz koszt</BulletRow>
								<BulletRow>Urodzinowa porcja gratis</BulletRow>
								<BulletRow>Punkty łączą się między lodziarniami</BulletRow>
							</ul>

							<div className="flex flex-wrap gap-3">
								<Button asChild variant="gold" size="lg">
									<a
										href={details.lodojady.qr.url ?? ""}
										target="_blank"
										rel="noopener noreferrer"
									>
										Pobierz Embargo
										<ArrowRightIcon />
									</a>
								</Button>
								<Button
									asChild
									variant="ghost"
									size="lg"
									className="border-cream/30 text-cream hover:border-cream hover:bg-cream/10"
								>
									<Link href="/#lodojady">O programie Lodojady</Link>
								</Button>
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
										className="block h-[220px] w-[220px]"
									/>
								</div>
								<span
									className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 font-sans text-[10.5px] font-bold uppercase tracking-[0.18em] text-navy-ink"
									aria-hidden
								>
									Placeholder
								</span>
							</div>
							<p className="max-w-[220px] text-center font-script text-lg text-gold-soft">
								Zeskanuj aby pobrać aplikację Embargo
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function BulletRow({ children }: { children: React.ReactNode }) {
	return (
		<li className="flex items-center gap-2.5">
			<span
				aria-hidden
				className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-soft"
			>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					aria-hidden="true"
					focusable="false"
					className="h-3 w-3"
				>
					<path
						d="M5 12l5 5L20 7"
						stroke="currentColor"
						strokeWidth="2.2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</span>
			{children}
		</li>
	);
}
