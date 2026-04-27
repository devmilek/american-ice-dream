import {
	ArrowRightIcon,
	MapPinIcon,
	StarIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { GoldScribble } from "@/components/illustrations";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ScriptAccent } from "@/components/ui/script-accent";

export function Hero() {
	return (
		<section
			className="relative overflow-hidden pt-0"
			aria-labelledby="hero-title"
		>
			<div
				className="pointer-events-none absolute -right-52 -top-52 h-[600px] w-[600px] rounded-full"
				style={{
					background:
						"radial-gradient(circle at 30% 30%, rgba(60,182,227,0.14), transparent 60%)",
				}}
			/>
			<div
				className="pointer-events-none absolute -bottom-56 -left-44 h-[520px] w-[520px] rounded-full"
				style={{
					background:
						"radial-gradient(circle, rgba(193,154,91,0.12), transparent 60%)",
				}}
			/>

			<div className="container-page relative">
				<GoldScribble
					className="pointer-events-none absolute -right-16 top-8 w-[520px] opacity-35"
					style={{ animation: "var(--animate-spin-slow)" }}
				/>

				<div className="relative grid grid-cols-[1.05fr_0.95fr] items-center gap-20 py-10 pb-20 max-lg:grid-cols-1 max-lg:gap-10">
					<div className="max-w-xl">
						<Eyebrow>Rzemieślnicza lodziarnia · Est. 2006</Eyebrow>

						<h1
							id="hero-title"
							className="mt-5 mb-7 font-display font-semibold text-[clamp(2.5rem,5.6vw+0.4rem,4.25rem)] leading-[1.1] tracking-[-0.03em] text-navy"
						>
							Najlepsze <ScriptAccent>lody&nbsp;włoskie</ScriptAccent> i
							świderki.
							<span className="mt-2 block text-[0.40em] font-normal italic tracking-normal text-navy-soft">
								Aksamitne, od&nbsp;pokoleń.
							</span>
						</h1>

						<p className="mb-9 max-w-lg text-[1rem] leading-relaxed text-ink-soft">
							Kremowe lody włoskie, chrupiące świderki, orzeźwiające granity i
							rurki z bitą śmietaną - wszystko według niezmiennej receptury od{" "}
							<strong className="font-semibold text-navy">2006 roku</strong>, z
							naturalnych polskich i włoskich składników.
						</p>

						<div className="mb-12 flex flex-wrap gap-3.5">
							<Button asChild size="lg">
								<Link href="#produkty">
									Zobacz ofertę
									<ArrowRightIcon />
								</Link>
							</Button>
							<Button asChild size="lg" variant="ghost">
								<Link href="#lokalizacje">
									<MapPinIcon className="fill-current" />
									Znajdź lodziarnię
								</Link>
							</Button>
						</div>

						<dl
							className="flex w-fit items-center gap-6 rounded-[18px] border border-navy/8 bg-paper/70 px-6 py-5 backdrop-blur-sm max-md:w-full max-md:justify-between"
							aria-label="Najważniejsze liczby"
						>
							<Stat label="lat tradycji" value="18" />
							<span className="h-9 w-px bg-navy/15" aria-hidden />
							<Stat label="smaków w karcie" value="32+" />
							<span className="h-9 w-px bg-navy/15" aria-hidden />
							<Stat label="gałek dziennie" value="1 400" />
						</dl>
					</div>

					<div className="relative flex min-h-[580px] items-center justify-center max-lg:min-h-[460px]">
						<div
							className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full max-lg:h-[420px] max-lg:w-[420px]"
							style={{
								background:
									"radial-gradient(circle at 35% 35%, var(--color-cream-deep), var(--color-cream-soft) 60%, transparent 72%)",
							}}
							aria-hidden
						/>
						<div
							className="relative z-[1] h-[560px] w-[440px] max-lg:h-[440px] max-lg:w-[340px]"
							style={{ animation: "var(--animate-float)" }}
						>
							<Image
								src="/swiderki-w-rozkach.png"
								alt="Dwa świderki American Ice Dream w rożkach waflowych - klasyczny czekoladowo-waniliowy i tęczowy owocowy"
								fill
								priority
								sizes="(max-width: 1024px) 80vw, 440px"
								className="object-contain drop-shadow-[0_30px_40px_rgba(15,45,92,0.18)]"
							/>
						</div>
						<ReviewBadge />
					</div>
				</div>
			</div>
		</section>
	);
}

function Stat({ label, value }: { label: string; value: string }) {
	return (
		<div className="flex flex-col">
			<dd className="order-1 m-0 font-display text-[2rem] font-semibold leading-none text-navy">
				{value}
			</dd>
			<dt className="order-2 text-[11.5px] uppercase tracking-[0.14em] text-muted">
				{label}
			</dt>
		</div>
	);
}

function ReviewBadge() {
	return (
		<div
			className="absolute bottom-10 left-0 z-[2] flex items-center gap-3.5 rounded-[18px] border border-gold/30 bg-paper px-4.5 py-3.5 shadow-[0_30px_70px_-30px_rgba(15,45,92,0.28)]"
			style={{ animation: "var(--animate-float-rev)" }}
		>
			<StarIcon className="flex gap-0.5" />
			<div className="flex flex-col leading-[1.1]">
				<strong className="font-display text-lg text-navy">4,9 / 5,0</strong>
				<span className="text-[11.5px] text-muted">
					z 2 413 opinii w Google
				</span>
			</div>
		</div>
	);
}
