import Link from "next/link";
import { ArrowRight, FiveStars } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ScriptAccent } from "@/components/ui/script-accent";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/cn";
import { type Review, reviews } from "@/lib/data/reviews";

const AVATAR_TONES: Record<Review["avatarTone"], string> = {
  a: "bg-gradient-to-br from-[#3cb6e3] to-[#1f8ab2]",
  b: "bg-gradient-to-br from-[#c19a5b] to-[#9d7a3e]",
  c: "bg-gradient-to-br from-[#e06b6b] to-[#a83e3e]",
};

export function Reviews() {
  return (
    <section
      id="opinie"
      className="border-y border-navy/6 bg-paper py-30"
      aria-labelledby="rev-title"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Pokochali nas"
          description="Najnowsze opinie bezpośrednio z Google — aktualizowane codziennie."
        >
          <span id="rev-title">
            4,9 gwiazdki z&nbsp;<ScriptAccent>2&nbsp;413</ScriptAccent> opinii
          </span>
        </SectionHeading>

        <div className="mb-12 grid grid-cols-3 gap-6 max-lg:grid-cols-1">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline">
            <Link href="#">
              Zobacz wszystkie opinie w Google
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure
      className="relative m-0 rounded-[28px] border border-navy/8 bg-cream p-8 transition-transform duration-300 hover:-translate-y-1"
      itemScope
      itemType="https://schema.org/Review"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute right-6 top-2.5 font-display text-[80px] italic leading-none text-gold-soft"
      >
        &ldquo;
      </span>
      <FiveStars className="mb-4.5 flex gap-0.5" />
      <blockquote
        className="mb-6 m-0 font-display text-[1.125rem] italic leading-[1.5] text-navy"
        itemProp="reviewBody"
      >
        {review.quote}
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <span
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full text-[13px] font-bold tracking-[0.02em] text-cream",
            AVATAR_TONES[review.avatarTone],
          )}
          aria-hidden
        >
          {review.initials}
        </span>
        <div className="leading-tight">
          <strong
            className="block font-sans text-[14.5px] font-semibold text-navy"
            itemProp="author"
          >
            {review.author}
          </strong>
          <span className="text-[12.5px] text-muted">
            {review.city} · {review.timeAgo}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}
