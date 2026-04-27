import { SwirlDot } from "@/components/ui/swirl-dot";
import { getAllLocationDetails } from "@/lib/data/location-details";
import { LocationCard } from "../location-card";
import { ScriptAccent } from "../ui/script-accent";
import { SectionHeading } from "../ui/section-heading";
import { LocationsMap } from "./locations-map";

export async function Locations() {
	const details = await getAllLocationDetails();

	return (
		<section id="lokalizacje" className="py-30" aria-labelledby="loc-title">
			<div className="container-page">
				<SectionHeading
					eyebrow="Odwiedź nas"
					description="Sześć lodziarni - w centrach Auchan, Galerii Wiślanka i Alei Bielany. Wpadnij do najbliższej, zawsze czekamy z nowymi smakami i ulubionymi klasykami."
				>
					<span id="loc-title">
						Znajdź <ScriptAccent>swoją</ScriptAccent> lodziarnię
					</span>
				</SectionHeading>

				<div className="relative mb-14 h-[560px] overflow-hidden rounded-xl border border-navy/14 bg-[#eee4d1] shadow-2xl/10 max-lg:h-[460px] max-sm:h-[380px]">
					<LocationsMap />

					<div className="pointer-events-none absolute left-5 top-5 z-500 flex items-center gap-2.5 rounded-full bg-paper px-4 py-2.5 text-[12.5px] font-medium text-navy shadow-[0_8px_24px_rgba(15,45,92,0.07)]">
						<SwirlDot /> {details.length} lodziarni
					</div>
				</div>

				<div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
					{details.map((detail) => (
						<LocationCard
							key={detail.slug}
							slug={detail.slug}
							details={detail.entry}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
