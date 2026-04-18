import { Eyebrow } from "@/components/ui/eyebrow";
import { ScriptAccent } from "@/components/ui/script-accent";
import type { AboutPageData } from "@/lib/data/about";

export function AboutExperience({ data }: { data: AboutPageData }) {
	const { experience, founder } = data;

	return (
		<section
			id="historia"
			className="bg-cream-soft py-24 lg:py-28"
			aria-labelledby="experience-title"
		>
			<div className="container-page">
				<div className="mb-14 grid items-end gap-10 lg:grid-cols-[0.95fr_1.05fr]">
					<div>
						<Eyebrow>Doświadczenie · Experience</Eyebrow>
						<h2
							id="experience-title"
							className="mt-4 mb-5 font-display text-[clamp(2rem,3.6vw+0.8rem,3.5rem)] leading-[1.05] tracking-[-0.02em] text-navy"
						>
							Nasza historia <ScriptAccent size="sm">od 2006 roku</ScriptAccent>
						</h2>
					</div>
					<p className="max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">
						{experience.intro}
					</p>
				</div>

				<div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
					<article className="space-y-5 text-[16.5px] leading-[1.75] text-ink">
						{experience.story.map((p) => (
							<p key={p.slice(0, 48)}>{p}</p>
						))}

						<blockquote className="relative mt-8 rounded-[24px] border-l-4 border-gold bg-paper px-6 py-6 text-navy shadow-[0_8px_24px_rgba(15,45,92,0.06)]">
							<p className="font-display text-[1.15rem] italic leading-[1.5]">
								„{founder.quote}"
							</p>
							<footer className="mt-4 flex items-center gap-3 text-[13px] not-italic">
								<span
									className="inline-block h-8 w-px bg-gold/50"
									aria-hidden
								/>
								<span>
									<strong className="font-semibold text-navy">
										{founder.name}
									</strong>
									<span className="ml-2 text-muted">· {founder.role}</span>
								</span>
							</footer>
						</blockquote>
					</article>

					<aside className="relative">
						<ol
							className="relative space-y-7 border-l-2 border-dashed border-gold-soft/70 pl-8"
							aria-label="Kamienie milowe American Ice Dream"
						>
							{experience.timeline.map((entry) => (
								<li key={entry.year} className="relative">
									<span
										aria-hidden
										className={`absolute -left-[42px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-gold-soft ${
											entry.highlight
												? "bg-gold shadow-[0_0_0_4px_rgba(193,154,91,0.18)]"
												: "bg-paper"
										}`}
									>
										<span
											className={`h-1.5 w-1.5 rounded-full ${
												entry.highlight ? "bg-cream" : "bg-gold"
											}`}
										/>
									</span>
									<div className="flex items-baseline gap-3">
										<span className="font-display text-[1.5rem] leading-none text-navy tabular-nums">
											{entry.year}
										</span>
										{entry.highlight && (
											<span className="rounded-full bg-gold/15 px-2.5 py-0.5 font-sans text-[9.5px] font-bold uppercase tracking-[0.2em] text-gold-deep">
												Start firmy
											</span>
										)}
									</div>
									<h3 className="mt-1 font-display text-[1.15rem] font-medium text-navy">
										{entry.title}
									</h3>
									<p className="mt-1 text-[14.5px] leading-[1.6] text-ink-soft">
										{entry.body}
									</p>
								</li>
							))}
						</ol>
					</aside>
				</div>
			</div>
		</section>
	);
}
