"use client";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useRef } from "react";
import { YearStamp } from "@/components/animated-illustrations";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ScriptAccent } from "@/components/ui/script-accent";

const pills = [
	"świeże mleko",
	"brak polepszaczy",
	"własna receptura",
	"sezonowe owoce",
];

export function About() {
	const ref = useRef<HTMLDivElement>(null);
	return (
		<section
			className="py-25"
			id="o-nas"
			aria-labelledby="about-title"
			ref={ref}
		>
			<div className="container-page grid grid-cols-[0.9fr_1.1fr] items-center gap-20 max-lg:grid-cols-1 max-lg:gap-15">
				<div className="relative mx-auto aspect-square w-full max-w-[480px] max-sm:max-w-[300px]">
					<div
						className="relative flex h-full w-full items-center justify-center rounded-full border border-gold-soft"
						style={{
							background:
								"radial-gradient(circle at 30% 30%, var(--color-cream-deep), transparent 65%), linear-gradient(150deg, var(--color-paper), var(--color-cream-soft))",
							boxShadow:
								"0 40px 80px -30px rgba(15,45,92,0.2), inset 0 0 0 14px rgba(193,154,91,0.06)",
						}}
					>
						<div
							aria-hidden
							className="pointer-events-none absolute inset-[6%] rounded-full border border-dashed border-gold-soft/60"
							style={{ animation: "var(--animate-spin-rev)" }}
						/>
						<YearStamp
							targetRef={ref}
							className="relative z-1 h-auto w-[72%]"
						/>
					</div>

					<span className="absolute right-[-8%] top-[8%] rotate-[8deg] rounded-full border border-gold-soft bg-paper px-4.5 py-3 font-script text-xl text-navy shadow-[0_8px_24px_rgba(15,45,92,0.07)] max-sm:right-0 max-sm:top-2 max-sm:rotate-[6deg] max-sm:px-3 max-sm:py-1.5 max-sm:text-base">
						rodzinna lodziarnia
					</span>
					<span className="absolute bottom-[8%] left-[-10%] -rotate-[6deg] rounded-full border border-gold-soft bg-paper px-4.5 py-3 font-script text-xl text-navy shadow-[0_8px_24px_rgba(15,45,92,0.07)] max-sm:bottom-4 max-sm:left-0 max-sm:-rotate-[4deg] max-sm:px-3 max-sm:py-1.5 max-sm:text-base">
						18 lat doświadczenia
					</span>
				</div>

				<div>
					<Eyebrow>Nasza historia</Eyebrow>
					<h2
						id="about-title"
						className="mt-4 mb-5 font-display font-semibold text-[clamp(2rem,4vw+1rem,3.4rem)] leading-[1.05] tracking-[-0.02em] text-navy"
					>
						Od&nbsp;małej lodziarni{" "}
						<ScriptAccent size="sm">
							do&nbsp;rodzinnej&nbsp;tradycji
						</ScriptAccent>
					</h2>
					<p className="max-w-xl leading-[1.7] text-ink-soft">
						Wszystko zaczęło się w 2006 roku, od jednej niewielkiej witryny i
						marzenia, by przywieźć na Śląsk prawdziwe włoskie lody. Dziś
						jesteśmy w sześciu miastach, ale receptura, maszyny i szacunek do
						klasycznego rzemiosła pozostały dokładnie takie same.
					</p>
					<p className="max-w-xl leading-[1.7] text-ink-soft">
						Lody robimy codziennie od podstaw - ze świeżego mleka, włoskich past
						smakowych i polskich owoców sezonowych. Bez kompromisów, bez chemii,
						bez pośpiechu.
					</p>

					<ul
						className="mt-7 mb-9 flex flex-wrap gap-2.5 p-0"
						aria-label="Nasze wyróżniki"
					>
						{pills.map((p) => (
							<li
								key={p}
								className="rounded-full border border-navy/12 bg-paper px-4 py-2 text-[13px] font-medium text-navy"
							>
								{p}
							</li>
						))}
					</ul>

					<Button asChild variant="outline">
						<Link href="/o-nas">
							Poznaj naszą historię
							<ArrowRight />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
