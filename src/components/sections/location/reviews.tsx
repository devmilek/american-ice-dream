import { StarIcon } from "@phosphor-icons/react/dist/ssr/Star";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ScriptAccent } from "@/components/ui/script-accent";
import type { LocationDetails } from "@/lib/data/location-details";
import type { Location } from "@/lib/data/locations";

type Props = {
	location: Location;
	details: LocationDetails;
};

export function LocationReviews({ location, details }: Props) {
	return (
		<section
			id="opinie"
			className="bg-cream-soft py-24 lg:py-28"
			aria-labelledby="loc-reviews-title"
		>
			<div className="container-page">
				<div className="mb-12 flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
					<div className="max-w-2xl">
						<Eyebrow>Opinie z Katowic</Eyebrow>
						<h2
							id="loc-reviews-title"
							className="mt-4 mb-4 font-display text-[clamp(1.9rem,3.4vw+0.8rem,3rem)] leading-[1.08] tracking-[-0.02em] text-navy"
						>
							Co mówią o nas <ScriptAccent size="sm">goście</ScriptAccent>
						</h2>
						<p className="max-w-xl text-[15.5px] text-ink-soft">
							Opinie zebrane z wizytówki Google naszej lodziarni w{" "}
							{location.city}. Filtrujemy tylko oceny{" "}
							<strong className="font-semibold text-navy">
								powyżej 4.5 gwiazdek
							</strong>
							, żeby pokazać pełen obraz - wszystkie odpowiedzi znajdziesz też w
							Mapach Google.
						</p>
					</div>

					<AggregateCard
						rating={details.reviews.aggregate.rating}
						count={details.reviews.aggregate.count}
					/>
				</div>

				<ul className="grid gap-5 lg:grid-cols-3">
					{details.reviews.items.map((review) => (
						<li
							key={review.id}
							className="relative flex h-full flex-col rounded-[24px] border border-navy/8 bg-paper p-7 shadow-[0_8px_24px_rgba(15,45,92,0.05)]"
						>
							<div className="mb-3 flex items-center gap-2">
								<RatingStars value={review.rating} />
								<span className="font-sans text-[12.5px] font-semibold text-navy tabular-nums">
									{review.rating.toFixed(1)}
								</span>
							</div>
							<blockquote className="mb-6 flex-1 font-display text-[15.5px] italic leading-[1.6] text-navy/90">
								„{review.content}"
							</blockquote>
							<footer className="flex items-center justify-between border-t border-dashed border-navy/12 pt-4">
								<span className="text-[13.5px] font-semibold text-navy">
									{review.author}
								</span>
								<time
									dateTime={review.date}
									className="text-[12px] text-muted tabular-nums"
								>
									{formatReviewDate(review.date)}
								</time>
							</footer>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

function AggregateCard({ rating, count }: { rating: number; count: number }) {
	return (
		<div className="inline-flex items-center gap-5 rounded-[20px] border border-gold/30 bg-paper px-6 py-4 shadow-soft">
			<div className="flex flex-col leading-[1.05]">
				<strong className="font-display text-[2.25rem] text-navy tabular-nums">
					{rating.toFixed(1)}
					<span className="text-gold">/5</span>
				</strong>
				<span className="text-[12px] font-medium text-muted">
					z {count.toLocaleString("pl-PL")} opinii
				</span>
			</div>
			<div className="h-10 w-px bg-navy/10" aria-hidden />
			<div className="flex flex-col gap-1">
				<span className="flex gap-0.5">
					{Array.from({ length: 5 }).map((_, i) => (
						<StarIcon key={i} className="h-4 w-4 fill-navy/10 text-navy/10" />
					))}
				</span>
				<span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-deep">
					Google · 4.5+ only
				</span>
			</div>
		</div>
	);
}

function RatingStars({ value }: { value: number }) {
	const full = Math.floor(value);
	const hasHalf = value - full >= 0.5;
	return (
		<span
			role="img"
			aria-label={`Ocena ${value.toFixed(1)} na 5 gwiazdek`}
			className="flex gap-0.5"
		>
			{Array.from({ length: 5 }).map((_, i) => {
				const isFull = i < full;
				const isHalf = i === full && hasHalf;
				const starKey = `star-${value}-${i}`;
				if (isHalf) {
					return (
						<span key={starKey} className="relative h-4 w-4">
							<StarIcon className="absolute h-4 w-4 fill-navy/10 text-navy/10" />
							<span
								className="absolute inset-0 overflow-hidden"
								style={{ width: "50%" }}
							>
								<StarIcon className="h-4 w-4 fill-gold text-gold" />
							</span>
						</span>
					);
				}
				return (
					<StarIcon
						key={starKey}
						className={`h-4 w-4 ${isFull ? "fill-gold text-gold" : "fill-navy/10 text-navy/10"}`}
					/>
				);
			})}
		</span>
	);
}

function formatReviewDate(iso: string) {
	const [y, m] = iso.split("-");
	const months = [
		"stycznia",
		"lutego",
		"marca",
		"kwietnia",
		"maja",
		"czerwca",
		"lipca",
		"sierpnia",
		"września",
		"października",
		"listopada",
		"grudnia",
	];
	const monthName = months[Number.parseInt(m, 10) - 1] ?? "";
	return `${monthName} ${y}`;
}
