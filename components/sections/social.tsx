import { Instagram, TikTok } from "@/components/icons";
import { SocialScribble } from "@/components/illustrations";
import { ScriptAccent } from "@/components/ui/script-accent";
import { SectionHeading } from "@/components/ui/section-heading";

export function Social() {
  return (
    <section
      className="relative overflow-hidden py-30 text-center"
      style={{
        background:
          "radial-gradient(ellipse at top, var(--color-cream-soft), var(--color-cream))",
      }}
      aria-labelledby="social-title"
    >
      <div className="container-page">
        <SocialScribble className="mx-auto mb-4 block w-30" />
        <SectionHeading
          eyebrow="Śledź nas"
          description="Sezonowe premiery, viralowe pomysły i kulisy z naszej lodowej kuchni — najpierw pojawiają się tam."
        >
          <span id="social-title">
            Śledź nas i nie przegap{" "}
            <ScriptAccent>nowych&nbsp;smaków</ScriptAccent>
          </span>
        </SectionHeading>

        <div className="mt-12 inline-flex flex-wrap justify-center gap-5">
          <SocialButton
            label="TikTok · 412K obserwujących"
            handle="@americanicedream"
            iconClassName="text-[#000]"
            Icon={TikTok}
            href="#"
          />
          <SocialButton
            label="Instagram · 128K obserwujących"
            handle="@americanicedream"
            iconClassName="text-[#d6298f]"
            Icon={Instagram}
            href="#"
          />
        </div>
      </div>
    </section>
  );
}

function SocialButton({
  handle,
  label,
  href,
  iconClassName,
  Icon,
}: {
  handle: string;
  label: string;
  href: string;
  iconClassName: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-4 rounded-[18px] border border-navy/10 bg-paper px-6 py-4 shadow-[0_8px_24px_rgba(15,45,92,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_30px_70px_-30px_rgba(15,45,92,0.28)]"
    >
      <Icon className={`h-7 w-7 ${iconClassName}`} />
      <span className="flex flex-col items-start leading-tight">
        <strong className="font-display text-[17px] font-semibold text-navy">
          {handle}
        </strong>
        <em className="text-[12px] not-italic tracking-[0.04em] text-muted">{label}</em>
      </span>
    </a>
  );
}
