import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { TopBar } from "@/components/layout/top-bar";
import { LocationContact } from "@/components/sections/location/contact";
import { LocationDescription } from "@/components/sections/location/description";
import { LocationFaq } from "@/components/sections/location/faq";
import { LocationGallery } from "@/components/sections/location/gallery";
import { LocationHero } from "@/components/sections/location/hero";
import { LocationLodojadyCta } from "@/components/sections/location/lodojady-cta";
import { env } from "@/env";
import { getLocationDetails } from "@/lib/data/location-details";
import { keystaticReader } from "@/lib/keystatic/reader";
import { buildLocationPageGraph } from "@/lib/structured-data/location-page-graph";

type PageProps = {
	params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
	const fromKs = await keystaticReader.collections.lokalizacje.list();
	return fromKs.map((slug) => ({ slug }));
}

async function getPageData(slug: string) {
	const details = await getLocationDetails(slug);
	return { details };
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const data = await getPageData(slug);
	if (!data) return {};
	const { details } = data;

	const heroSrc = details.hero.image.src;
	const heroUrl =
		heroSrc != null && heroSrc !== ""
			? heroSrc.startsWith("http")
				? heroSrc
				: `${env.NEXT_PUBLIC_SITE_URL}${heroSrc.startsWith("/") ? heroSrc : `/${heroSrc}`}`
			: undefined;

	return {
		title: details.seo.title,
		description: details.seo.description,
		keywords: [...details.seo.keywords],
		alternates: {
			canonical: `${env.NEXT_PUBLIC_SITE_URL}/${slug}`,
		},
		openGraph: {
			type: "website",
			locale: "pl_PL",
			title: details.seo.title,
			description: details.seo.description,
			url: `${env.NEXT_PUBLIC_SITE_URL}/${slug}`,
			...(heroUrl
				? {
						images: [
							{
								url: heroUrl,
								alt: details.hero.image.alt ?? undefined,
							},
						],
					}
				: {}),
		},
		twitter: {
			card: "summary_large_image",
			title: details.seo.title,
			description: details.seo.description,
			...(heroUrl ? { images: [heroUrl] } : {}),
		},
	};
}

export default async function LokalizacjaPage({ params }: PageProps) {
	const { slug } = await params;
	const data = await getPageData(slug);
	if (!data) return notFound();
	const { details } = data;
	const structuredData = buildLocationPageGraph(
		details,
		env.NEXT_PUBLIC_SITE_URL,
	);

	return (
		<>
			<TopBar />
			<Navigation />
			<main className="flex-1">
				<LocationHero details={details} />
				<LocationContact details={details} />
				<LocationDescription details={details} />
				{/* <LocationOffer details={details} /> */}
				<LocationLodojadyCta details={details} />
				{/* <LocationReviews location={location} details={details} /> */}
				<LocationGallery details={details} />
				<LocationFaq details={details} />
			</main>
			<Footer />

			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD from schema-dts graph
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(structuredData),
				}}
			/>
		</>
	);
}
