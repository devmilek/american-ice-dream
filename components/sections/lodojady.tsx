import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { LoyaltyCard } from "@/components/illustrations";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ScriptAccent } from "@/components/ui/script-accent";

export function Lodojady() {
	return (
		<section id="lodojady" className="py-15 pb-30" aria-labelledby="lodo-title">
			<div className="container-page">
				<div
					className="relative grid grid-cols-[1.25fr_0.75fr] items-center gap-15 overflow-hidden rounded-[40px] bg-navy p-20 px-18 text-cream shadow-[0_30px_70px_-30px_rgba(15,45,92,0.28)] max-lg:grid-cols-1 max-lg:gap-5 max-lg:p-10 max-lg:px-10"
					style={{
						background:
							"radial-gradient(circle at 20% 20%, rgba(60,182,227,0.25), transparent 40%), radial-gradient(circle at 80% 80%, rgba(193,154,91,0.35), transparent 50%), var(--color-navy)",
					}}
				>
					<div
						aria-hidden
						className="absolute -right-20 -top-20 h-80 w-80 rounded-full border-[1.5px] border-dashed border-gold-soft/30"
					/>
					<div
						aria-hidden
						className="absolute -bottom-30 -left-10 h-60 w-60 rounded-full border border-gold-soft/20"
					/>

					<div>
						<Eyebrow light>Klub smakoszy</Eyebrow>
						<h2
							id="lodo-title"
							className="mt-4 mb-5 font-display text-[clamp(2rem,4vw+1rem,3.75rem)] leading-[1.05] tracking-[-0.02em] text-cream"
						>
							Dołącz do&nbsp;
							<ScriptAccent tone="gold-soft">LODOJADÓW</ScriptAccent> i zbieraj
							gałki w&nbsp;nagrodę.
						</h2>
						<p className="mb-7 max-w-lg text-[1.0625rem] text-cream/80">
							Karta lojalnościowa w twoim telefonie, urodzinowy deser na koszt
							domu i pierwszy dostęp do sezonowych smaków.
						</p>
						<Button asChild size="lg" variant="gold">
							<Link href="#">
								Dołącz do LODOJADÓW
								<ArrowRight />
							</Link>
						</Button>
					</div>

					<div aria-hidden className="max-lg:hidden">
						<LoyaltyCard
							className="ml-auto h-auto w-full max-w-[320px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
							style={{ animation: "var(--animate-float-slow)" }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
