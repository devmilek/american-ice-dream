import type { Icon } from "@phosphor-icons/react";
import {
	IceCreamIcon,
	LeafIcon,
	MedalIcon,
} from "@phosphor-icons/react/dist/ssr";

type Feature = {
	title: string;
	description: string;
	Icon: Icon;
};

const features: Feature[] = [
	{
		title: "Słodkości wysokiej jakości",
		description:
			"Aksamitne lody włoskie, delikatne świderki, chrupiące rurki z kremem oraz pyszne desery i granity podbiją Twoje podniebienie.",
		Icon: IceCreamIcon,
	},
	{
		title: "Naturalne składniki",
		description:
			"Wykorzystujemy wyłącznie starannie wyselekcjonowane produkty od najlepszych polskich i włoskich producentów.",
		Icon: LeafIcon,
	},
	{
		title: "Stała receptura od 2006",
		description:
			"Smaki naszych lodów są doceniane przez kolejne pokolenia klientów dzięki niezmiennej od 18 lat recepturze.",
		Icon: MedalIcon,
	},
];

export function Features() {
	return (
		<section className="py-25" aria-label="Nasze wartości">
			<div className="container-page">
				<div className="relative grid grid-cols-3 gap-6 max-md:grid-cols-1">
					{features.map(({ title, description, Icon }) => (
						<article
							key={title}
							className="group relative rounded-lg border border-navy/8 bg-paper p-9 px-8 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_8px_24px_rgba(15,45,92,0.07)]"
						>
							<div className="pointer-events-none absolute inset-0 rounded-lg bg-linear-to-br from-transparent to-gold/6 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
							<div className="relative mb-5.5 flex h-16 w-16 items-center justify-center rounded-sm border border-gold-soft bg-cream">
								<Icon weight="duotone" className="size-8 text-gold-deep" />
							</div>
							<h3 className="mb-2.5 font-display text-2xl leading-tight text-navy">
								{title}
							</h3>
							<p className="m-0 text-[15px] text-ink-soft tracking-normal">
								{description}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
