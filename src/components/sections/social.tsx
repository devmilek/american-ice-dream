import {
	InstagramLogo,
	InstagramLogoIcon,
	TiktokLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { FacebookLogoIcon } from "@phosphor-icons/react/dist/ssr/FacebookLogo";
import { SocialScribble } from "@/components/illustrations";
import { ScriptAccent } from "@/components/ui/script-accent";
import { SectionHeading } from "@/components/ui/section-heading";
import { getContactData } from "@/lib/keystatic/reader";

export async function Social() {
	const contact = await getContactData();
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
					description="Sezonowe premiery, viralowe pomysły i kulisy z naszej lodowej kuchni - najpierw pojawiają się tam."
				>
					<span id="social-title">
						Śledź nas i nie przegap
						<br />
						<ScriptAccent>nowych&nbsp;smaków</ScriptAccent>
					</span>
				</SectionHeading>

				<div className="mt-12 inline-flex flex-wrap justify-center gap-5">
					<SocialButton
						label={`TikTok · 150 obserwujących`}
						handle={contact.socialMedia.tiktok.username}
						iconClassName="text-black"
						Icon={TiktokLogoIcon}
						href={contact.socialMedia.tiktok.url}
					/>
					<SocialButton
						label={`Instagram · 800 obserwujących`}
						handle={contact.socialMedia.instagram.username}
						iconClassName="text-[#d6298f]"
						Icon={InstagramLogoIcon}
						href={contact.socialMedia.instagram.url}
					/>
					<SocialButton
						label={`Facebook · 800 obserwujących`}
						handle={contact.socialMedia.facebook.username}
						iconClassName="text-[#1877f2]"
						Icon={FacebookLogoIcon}
						href={contact.socialMedia.facebook.url}
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
			className="flex items-center gap-4 rounded-md border border-navy/10 bg-paper px-6 py-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-deep"
		>
			<Icon className={`h-7 w-7 ${iconClassName}`} />
			<span className="flex flex-col items-start leading-tight">
				<strong className="font-display text-[17px] font-semibold text-navy">
					{handle}
				</strong>
				<em className="text-[12px] not-italic tracking-[0.04em] text-muted">
					{label}
				</em>
			</span>
		</a>
	);
}
