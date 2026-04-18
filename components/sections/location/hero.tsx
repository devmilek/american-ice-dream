import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Pin } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ScriptAccent } from "@/components/ui/script-accent";
import type { Location } from "@/lib/data/locations";
import type { LocationDetails } from "@/lib/data/location-details";

type Props = {
  location: Location;
  details: LocationDetails;
};

export function LocationHero({ location, details }: Props) {
  return (
    <section
      className="relative overflow-hidden pt-6"
      aria-labelledby="location-hero-title"
    >
      <div
        className="pointer-events-none absolute -right-52 -top-40 h-[560px] w-[560px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(60,182,227,0.14), transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-56 -left-44 h-[480px] w-[480px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(193,154,91,0.12), transparent 60%)",
        }}
      />

      <div className="container-page relative grid grid-cols-1 items-center gap-12 pb-16 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-20 lg:pt-14">
        <div className="max-w-2xl">
          <Eyebrow>{details.hero.badge}</Eyebrow>

          <h1
            id="location-hero-title"
            className="mt-5 mb-5 font-display font-semibold text-[clamp(2.25rem,4.4vw+0.4rem,4.25rem)] leading-[1.02] tracking-[-0.025em] text-navy"
          >
            Lodziarnia w{" "}
            <ScriptAccent>{location.city}</ScriptAccent>
            <span className="block text-[0.62em] font-normal italic tracking-normal text-navy-soft mt-2">
              — lody włoskie i świderki, Auchan {location.city}
            </span>
          </h1>

          <p className="mb-7 max-w-xl text-[1.075rem] leading-relaxed text-ink-soft">
            {details.seo.lead}
          </p>

          <dl
            className="mb-8 grid gap-3 sm:grid-cols-[auto_1fr] sm:gap-x-5 sm:gap-y-2.5"
            aria-label="Podstawowe informacje"
          >
            <dt className="flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-muted">
              <Pin className="h-3.5 w-3.5 text-gold" />
              Adres
            </dt>
            <dd className="text-[14.5px] text-navy">
              <address className="not-italic">
                <strong className="font-medium">{location.venue}</strong>
                {" · "}
                {location.address}, {location.postal}
              </address>
            </dd>

            <dt className="flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-muted">
              <Clock className="h-3.5 w-3.5 text-gold" />
              Otwarte
            </dt>
            <dd className="text-[14.5px] text-navy">
              <span className="tabular-nums">
                Pon – Sob {location.hours.weekdays}
              </span>
              <span className="mx-2 text-navy/25">·</span>
              <span className="tabular-nums">
                Niedziele handlowe {location.hours.sunday}
              </span>
            </dd>
          </dl>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${location.lat}%2C${location.lng}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Wyznacz trasę
                <ArrowRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="#oferta">Zobacz ofertę</Link>
            </Button>
          </div>
        </div>

        <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[520px]">
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full max-lg:h-[380px] max-lg:w-[380px]"
            style={{
              background:
                "radial-gradient(circle at 35% 35%, var(--color-cream-deep), var(--color-cream-soft) 60%, transparent 72%)",
            }}
          />
          <div
            className="relative z-[1] h-[420px] w-[340px] max-lg:h-[340px] max-lg:w-[280px]"
            style={{ animation: "var(--animate-float)" }}
          >
            <Image
              src={details.hero.image.src}
              alt={details.hero.image.alt}
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 420px"
              className="object-contain drop-shadow-[0_30px_40px_rgba(15,45,92,0.18)]"
            />
          </div>
          {details.hero.image.placeholder && (
            <span className="absolute bottom-3 right-3 z-[2] rounded-full border border-navy/10 bg-paper/85 px-3 py-1 font-sans text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted backdrop-blur-sm">
              Zdjęcie: placeholder
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
