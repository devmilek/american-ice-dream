import { Eyebrow } from "@/components/ui/eyebrow";
import { ScriptAccent } from "@/components/ui/script-accent";
import type { AboutPageData } from "@/lib/data/about";

export function AboutExpertise({ data }: { data: AboutPageData }) {
	const { expertise } = data;

	return (
		<section
			id="proces"
			className="py-24 lg:py-28"
			aria-labelledby="expertise-title"
		>
			<div className="container-page">
				<div className="mb-14 grid items-end gap-10 lg:grid-cols-[0.95fr_1.05fr]">
					<div>
						<Eyebrow>Ekspertyza · Expertise</Eyebrow>
						<h2
							id="expertise-title"
							className="mt-4 mb-5 font-display text-[clamp(2rem,3.6vw+0.8rem,3.5rem)] leading-[1.05] tracking-[-0.02em] text-navy"
						>
							Jak robimy <ScriptAccent size="sm">nasze lody</ScriptAccent>
						</h2>
					</div>
					<p className="max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">
						{expertise.intro}
					</p>
				</div>

				{/* Proces produkcji - pionowy stepper */}
				<ol className="mb-24 grid gap-5 lg:grid-cols-5">
					{expertise.process.map((step, i) => (
						<li
							key={step.step}
							className="group relative flex flex-col overflow-hidden rounded-[22px] border border-navy/8 bg-paper p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-32px_rgba(15,45,92,0.28)]"
						>
							<span
								aria-hidden
								className="absolute right-4 top-4 font-display text-[3.5rem] leading-none tracking-tight text-gold-soft/60"
							>
								{step.step}
							</span>
							<span className="mb-1 font-sans text-[10.5px] font-bold uppercase tracking-[0.2em] text-gold-deep">
								Krok {i + 1}
							</span>
							<h3 className="mb-2 font-display text-[1.15rem] leading-tight text-navy">
								{step.title}
							</h3>
							<p className="text-[13.5px] leading-[1.6] text-ink-soft">
								{step.body}
							</p>
						</li>
					))}
				</ol>

				{/* Dostawcy */}
				<div className="mb-24 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
					<div className="lg:sticky lg:top-28 lg:self-start">
						<Eyebrow>Skąd biorą się składniki</Eyebrow>
						<h3 className="mt-4 mb-4 font-display text-[clamp(1.6rem,2.4vw+0.8rem,2.25rem)] leading-[1.1] text-navy">
							Nasi <ScriptAccent size="sm">dostawcy</ScriptAccent>
						</h3>
						<p className="text-[15.5px] leading-[1.7] text-ink-soft">
							{expertise.suppliers.intro}
						</p>
					</div>
					<ul className="grid gap-3 sm:grid-cols-2">
						{expertise.suppliers.items.map((supplier) => (
							<li
								key={supplier.name}
								className="relative overflow-hidden rounded-[20px] border border-navy/8 bg-paper p-5"
							>
								<span
									aria-hidden
									className="absolute right-4 top-4 h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_0_4px_rgba(193,154,91,0.18)]"
								/>
								<strong className="block font-display text-[1.05rem] leading-tight text-navy">
									{supplier.name}
								</strong>
								<span className="mt-0.5 block text-[11.5px] font-semibold uppercase tracking-[0.14em] text-gold-deep">
									{supplier.origin}
								</span>
								<p className="mt-3 text-[13.5px] leading-[1.55] text-ink-soft">
									{supplier.product}
								</p>
							</li>
						))}
					</ul>
				</div>

				{/* Porównanie my vs supermarket */}
				<div className="rounded-lg border border-navy/8 bg-cream-soft p-6 lg:p-10">
					<div className="mb-8 max-w-2xl">
						<Eyebrow>Dlaczego smak jest inny</Eyebrow>
						<h3 className="mt-4 mb-3 font-display text-[clamp(1.6rem,2.4vw+0.8rem,2.25rem)] leading-[1.1] text-navy">
							My vs. lody <ScriptAccent size="sm">z supermarketu</ScriptAccent>
						</h3>
						<p className="text-[15.5px] leading-[1.7] text-ink-soft">
							{expertise.comparison.intro}
						</p>
					</div>

					<ul
						className="grid gap-3"
						aria-label="Porównanie produkcji American Ice Dream z produkcją masową"
					>
						{expertise.comparison.points.map((row) => (
							<li
								key={row.us}
								className="grid gap-3 overflow-hidden rounded-md border border-navy/8 bg-paper md:grid-cols-2"
							>
								<div className="flex items-start gap-3 border-b border-dashed border-navy/10 p-5 md:border-b-0 md:border-r">
									<span
										aria-hidden
										className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-deep"
									>
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
												strokeWidth="2.2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</span>
									<div>
										<span className="block font-sans text-[10.5px] font-bold uppercase tracking-[0.2em] text-gold-deep">
											American Ice Dream
										</span>
										<p className="mt-1 text-[14.5px] leading-[1.55] text-navy">
											{row.us}
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3 p-5">
									<span
										aria-hidden
										className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose/15 text-rose"
									>
										<svg
											viewBox="0 0 24 24"
											fill="none"
											aria-hidden="true"
											focusable="false"
											className="h-3 w-3"
										>
											<path
												d="M6 6l12 12M18 6L6 18"
												stroke="currentColor"
												strokeWidth="2.2"
												strokeLinecap="round"
											/>
										</svg>
									</span>
									<div>
										<span className="block font-sans text-[10.5px] font-bold uppercase tracking-[0.2em] text-muted">
											Lody „masowe”
										</span>
										<p className="mt-1 text-[14.5px] leading-[1.55] text-ink-soft">
											{row.them}
										</p>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
