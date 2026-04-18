import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ScriptAccent } from "@/components/ui/script-accent";
import type { AboutPageData } from "@/lib/data/about";

export function AboutHero({ data }: { data: AboutPageData }) {
	const { hero, founder } = data;
	return (
		<section
			className="relative overflow-hidden pt-6"
			aria-labelledby="about-hero-title"
		>
			<div
				className="pointer-events-none absolute -right-40 -top-44 h-[520px] w-[520px] rounded-full"
				aria-hidden
				style={{
					background:
						"radial-gradient(circle at 30% 30%, rgba(193,154,91,0.18), transparent 60%)",
				}}
			/>
			<div
				className="pointer-events-none absolute -bottom-48 -left-40 h-[460px] w-[460px] rounded-full"
				aria-hidden
				style={{
					background:
						"radial-gradient(circle, rgba(60,182,227,0.14), transparent 60%)",
				}}
			/>

			<div className="container-page relative grid grid-cols-1 items-center gap-12 pb-16 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-20 lg:pt-14">
				<div className="max-w-2xl">
					<Eyebrow>{hero.eyebrow}</Eyebrow>

					<h1
						id="about-hero-title"
						className="mt-5 mb-6 font-display font-semibold text-[clamp(2.25rem,4.4vw+0.4rem,4.25rem)] leading-[1.02] tracking-[-0.025em] text-navy"
					>
						{hero.headline} <ScriptAccent>{hero.headlineScript}</ScriptAccent>
					</h1>

					<p className="mb-9 max-w-xl text-[1.075rem] leading-relaxed text-ink-soft">
						{hero.lead}
					</p>

					<ul
						className="mb-9 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
						aria-label="Kluczowe liczby"
					>
						{hero.badges.map((badge) => (
							<li
								key={badge.label}
								className="rounded-[18px] border border-navy/8 bg-paper px-4 py-3 shadow-[0_8px_24px_rgba(15,45,92,0.05)]"
							>
								<span className="block text-[10.5px] font-semibold uppercase tracking-[0.16em] text-gold-deep">
									{badge.label}
								</span>
								<strong className="mt-1 block font-display text-[1.5rem] leading-none text-navy tabular-nums">
									{badge.value}
								</strong>
							</li>
						))}
					</ul>

					<div className="flex flex-wrap gap-3">
						<Button asChild size="lg">
							<Link href="#historia">
								Poznaj historię
								<ArrowRight />
							</Link>
						</Button>
						<Button asChild size="lg" variant="ghost">
							<Link href="/#lokalizacje">Zobacz lokalizacje</Link>
						</Button>
					</div>
				</div>

				<figure className="relative flex items-center justify-center">
					<div
						aria-hidden
						className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full max-lg:h-[340px] max-lg:w-[340px]"
						style={{
							background:
								"radial-gradient(circle at 35% 35%, var(--color-cream-deep), var(--color-cream-soft) 60%, transparent 72%)",
						}}
					/>
					<div className="relative z-1 flex flex-col items-center gap-5">
						<div className="relative">
							<div
								aria-hidden
								className="absolute -inset-3 rounded-full border border-dashed border-gold-soft/70"
								style={{ animation: "var(--animate-spin-rev)" }}
							/>
							<div className="relative h-[280px] w-[280px] overflow-hidden rounded-full border-4 border-paper shadow-[0_30px_70px_-30px_rgba(15,45,92,0.4)] max-lg:h-[230px] max-lg:w-[230px]">
								<Image
									src={founder.portrait.src}
									alt={founder.portrait.alt}
									fill
									priority
									sizes="(max-width: 1024px) 230px, 280px"
									className="object-contain bg-cream-deep/60 p-8"
								/>
								{founder.portrait.placeholder && (
									<span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-paper/90 px-3 py-0.5 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-muted backdrop-blur-sm">
										Placeholder
									</span>
								)}
							</div>
						</div>

						<figcaption className="text-center">
							<strong className="block font-display text-[1.3rem] text-navy">
								{founder.name}
							</strong>
							<span className="block text-[12.5px] font-medium uppercase tracking-[0.16em] text-gold-deep">
								{founder.role}
							</span>
						</figcaption>
					</div>
				</figure>
			</div>
		</section>
	);
}
