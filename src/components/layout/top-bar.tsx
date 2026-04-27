import { Clock, Pin } from "@/components/icons";
import { SwirlDot } from "@/components/ui/swirl-dot";

export function TopBar() {
	return (
		<div className="hidden bg-navy text-cream text-[12.5px] tracking-[0.03em] md:block">
			<div className="container-page flex flex-wrap items-center justify-center gap-4 py-2.5">
				<span className="inline-flex items-center gap-2 text-cream/80">
					<Pin className="h-3.5 w-3.5 text-gold-soft" />6 lodziarni na Śląsku
				</span>
				<span className="text-cream/35" aria-hidden>
					·
				</span>
				<span className="inline-flex items-center gap-2 font-medium">
					<SwirlDot />
					Codziennie świeże, codziennie dla Was - od 2006 roku
				</span>
				<span className="text-cream/35" aria-hidden>
					·
				</span>
				<span className="inline-flex items-center gap-2 text-cream/80">
					<Clock className="h-3.5 w-3.5 text-gold-soft" />
					Otwarte dziś: 10:00 - 22:00
				</span>
			</div>
		</div>
	);
}
