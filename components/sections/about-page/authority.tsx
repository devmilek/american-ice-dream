import { ArrowRight } from "@/components/icons";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ScriptAccent } from "@/components/ui/script-accent";
import type { AboutPageData } from "@/lib/data/about";

export function AboutAuthority({ data }: { data: AboutPageData }) {
	const { authority } = data;

	return (
		<section
			id="liczby"
			className="bg-navy text-cream py-24 lg:py-28"
			aria-labelledby="authority-title"
		>
			<div
				className="pointer-events-none absolute right-0 top-0 h-[380px] w-[380px] -translate-y-24 translate-x-24 rounded-full"
				aria-hidden
				style={{
					background:
						"radial-gradient(circle, rgba(193,154,91,0.25), transparent 60%)",
				}}
			/>
			<div className="container-page relative">
				<div className="mb-14 grid items-end gap-10 lg:grid-cols-[0.95fr_1.05fr]">
					<div>
						<Eyebrow light>Autorytet · Authoritativeness</Eyebrow>
						<h2
							id="authority-title"
							className="mt-4 mb-5 font-display text-[clamp(2rem,3.6vw+0.8rem,3.5rem)] leading-[1.05] tracking-[-0.02em]"
						>
							Liczby, media i{" "}
							<ScriptAccent size="sm" tone="gold-soft">
								wyróżnienia
							</ScriptAccent>
						</h2>
					</div>
					<p className="max-w-xl text-[1.05rem] leading-relaxed text-cream/75">
						Od ponad 18 lat robimy to samo — i mamy na to nie tylko receptury,
						ale też konkretne liczby i wzmianki w prasie lokalnej.
					</p>
				</div>

				<dl className="mb-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{authority.stats.map((stat) => (
						<div
							key={stat.label}
							className="relative overflow-hidden rounded-[24px] border border-cream/12 bg-cream/5 px-7 py-8 backdrop-blur-sm"
						>
							<span
								aria-hidden
								className="absolute right-5 top-5 h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_0_4px_rgba(193,154,91,0.18)]"
							/>
							<dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-soft">
								{stat.label}
							</dt>
							<dd className="mt-2 flex items-baseline gap-1">
								<strong className="font-display text-[clamp(2.25rem,3vw+1rem,3.25rem)] leading-none tabular-nums text-cream">
									{stat.value}
								</strong>
								{stat.suffix && (
									<span className="font-display text-[1.25rem] text-gold-soft">
										{stat.suffix}
									</span>
								)}
							</dd>
							{stat.caption && (
								<p className="mt-3 text-[13px] leading-[1.5] text-cream/65">
									{stat.caption}
								</p>
							)}
						</div>
					))}
				</dl>

				{/* Prasa */}
				<div className="mb-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
					<div>
						<Eyebrow light>Wzmianki w mediach</Eyebrow>
						<h3 className="mt-4 mb-3 font-display text-[clamp(1.5rem,2vw+0.8rem,2rem)] leading-[1.1]">
							Piszą o nas
						</h3>
						<p className="max-w-md text-[14.5px] leading-[1.7] text-cream/70">
							Lokalne media chętnie wracają do tematu rzemieślniczych lodziarni
							na Śląsku — poniżej wybrane artykuły z ostatnich lat.
						</p>
					</div>
					<ul className="grid gap-3">
						{authority.press.map((article) => (
							<li key={article.url}>
								<a
									href={article.url}
									target="_blank"
									rel="noopener noreferrer"
									className="group flex items-center gap-6 rounded-[20px] border border-cream/15 bg-cream/5 p-5 transition-colors hover:border-gold hover:bg-cream/10"
								>
									<span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/15 font-display text-[15px] font-semibold text-gold-soft">
										{abbreviatePublisher(article.publisher)}
									</span>
									<span className="flex-1">
										<span className="block font-sans text-[10.5px] font-bold uppercase tracking-[0.2em] text-gold-soft">
											{article.publisher}
											{article.year ? ` · ${article.year}` : ""}
										</span>
										<span className="mt-1 block font-display text-[1.05rem] leading-[1.35] text-cream transition-colors group-hover:text-gold-soft">
											{article.title}
										</span>
									</span>
									<ArrowRight className="h-5 w-5 shrink-0 text-gold-soft transition-transform duration-300 group-hover:translate-x-1" />
								</a>
							</li>
						))}
					</ul>
				</div>

				{/* Wyróżnienia */}
				<div>
					<Eyebrow light>Wyróżnienia i aktywność</Eyebrow>
					<h3 className="mt-4 mb-6 font-display text-[clamp(1.5rem,2vw+0.8rem,2rem)] leading-[1.1]">
						Czym się chwalimy
					</h3>
					<ul className="grid gap-4 md:grid-cols-3">
						{authority.awards.map((award) => (
							<li
								key={award.title}
								className="relative overflow-hidden rounded-[22px] border border-cream/12 bg-cream/5 p-6 backdrop-blur-sm"
							>
								{award.year && (
									<span className="mb-3 inline-block rounded-full bg-gold/20 px-3 py-0.5 font-sans text-[10.5px] font-bold uppercase tracking-[0.18em] text-gold-soft">
										{award.year}
									</span>
								)}
								<h4 className="mb-2 font-display text-[1.1rem] leading-[1.25] text-cream">
									{award.title}
								</h4>
								<p className="text-[13.5px] leading-[1.6] text-cream/70">
									{award.body}
								</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

function abbreviatePublisher(publisher: string): string {
	const clean = publisher.replace(/^www\./i, "");
	const parts = clean.split(/[\s.]+/).filter(Boolean);
	if (parts.length === 0) return "?";
	if (parts.length === 1) return parts[0].slice(0, 3).toUpperCase();
	return (parts[0][0] + parts[1][0]).toUpperCase();
}
