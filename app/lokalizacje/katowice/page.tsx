import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { TopBar } from "@/components/layout/top-bar";
import { LocationBreadcrumb } from "@/components/sections/location/breadcrumb";
import { LocationContact } from "@/components/sections/location/contact";
import { LocationDescription } from "@/components/sections/location/description";
import { LocationFaq } from "@/components/sections/location/faq";
import { LocationGallery } from "@/components/sections/location/gallery";
import { LocationHero } from "@/components/sections/location/hero";
import { LocationLodojadyCta } from "@/components/sections/location/lodojady-cta";
import { LocationOffer } from "@/components/sections/location/offer";
import { LocationReviews } from "@/components/sections/location/reviews";
import {
	type LocationDetails,
	getLocationDetails,
} from "@/lib/data/location-details";
import { locations } from "@/lib/data/locations";

const SLUG = "katowice";
const SITE_URL = "https://americanicedream.pl";

async function getPageData() {
	const details = await getLocationDetails(SLUG);
	if (!details) return null;
	const location = locations.find((l) => l.id === details.locationId);
	if (!location) return null;
	return { details, location };
}

export async function generateMetadata(): Promise<Metadata> {
	const data = await getPageData();
	if (!data) return {};
	const { details } = data;

	return {
		title: details.seo.title,
		description: details.seo.description,
		keywords: details.seo.keywords,
		alternates: {
			canonical: details.canonicalPath,
		},
		openGraph: {
			type: "website",
			locale: "pl_PL",
			title: details.seo.title,
			description: details.seo.description,
			url: `${SITE_URL}${details.canonicalPath}`,
			images: [
				{
					url: details.hero.image.src,
					alt: details.hero.image.alt,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: details.seo.title,
			description: details.seo.description,
			images: [details.hero.image.src],
		},
	};
}

export default async function KatowicePage() {
	const data = await getPageData();
	if (!data) return notFound();
	const { details, location } = data;

	const structuredData = buildStructuredData({ details, location });

	return (
		<>
			<TopBar />
			<Navigation />
			<LocationBreadcrumb
				crumbs={[
					{ href: "/", label: "Strona główna" },
					{ href: "/#lokalizacje", label: "Lokalizacje" },
					{ label: `${location.city} · ${location.venue}` },
				]}
			/>
			<main className="flex-1">
				<LocationHero location={location} details={details} />
				<LocationContact location={location} details={details} />
				<LocationDescription location={location} details={details} />
				<LocationOffer location={location} details={details} />
				<LocationLodojadyCta location={location} details={details} />
				<LocationReviews location={location} details={details} />
				<LocationGallery location={location} details={details} />
				<LocationFaq location={location} details={details} />
			</main>
			<Footer />

			{structuredData.map((data, i) => (
				<script
					// biome-ignore lint/suspicious/noArrayIndexKey: structured data has fixed order
					key={`ld-${i}`}
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD payload is controlled
					dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
				/>
			))}
		</>
	);
}

/* ---------------------------------------------------------------- */
/*  Structured data (Schema.org) — IceCreamShop + FAQ + Breadcrumb  */
/* ---------------------------------------------------------------- */

type StructuredInput = {
	details: ReturnType<typeof getLocationDetails>;
	location: (typeof locations)[number];
};

function buildStructuredData({
	details,
	location,
}: {
	details: NonNullable<StructuredInput["details"]>;
	location: (typeof locations)[number];
}) {
	const pageUrl = `${SITE_URL}${details.canonicalPath}`;

	const iceCreamShop = {
		"@context": "https://schema.org",
		"@type": "IceCreamShop",
		"@id": `${pageUrl}#icecreamshop`,
		name: `American Ice Dream ${location.city}`,
		description: details.seo.description,
		url: pageUrl,
		image: [`${SITE_URL}${details.hero.image.src}`],
		logo: `${SITE_URL}/logo.png`,
		telephone: details.phone,
		email: details.email,
		priceRange: "$$",
		address: {
			"@type": "PostalAddress",
			streetAddress: location.address,
			addressLocality: location.city,
			postalCode: location.postal.split(" ")[0] ?? "",
			addressCountry: "PL",
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: location.lat,
			longitude: location.lng,
		},
		openingHoursSpecification: [
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: [
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday",
				],
				opens: toIsoTime(location.hours.weekdays.split("–")[0]?.trim() ?? ""),
				closes: toIsoTime(location.hours.weekdays.split("–")[1]?.trim() ?? ""),
			},
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: "Sunday",
				opens: toIsoTime(location.hours.sunday.split("–")[0]?.trim() ?? ""),
				closes: toIsoTime(location.hours.sunday.split("–")[1]?.trim() ?? ""),
			},
		],
		servesCuisine: ["Lody włoskie", "Desery", "Kawa"],
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: details.reviews.aggregate.rating,
			reviewCount: details.reviews.aggregate.count,
			bestRating: 5,
			worstRating: 1,
		},
		review: details.reviews.items.map((r) => ({
			"@type": "Review",
			author: { "@type": "Person", name: r.author },
			datePublished: r.date,
			reviewBody: r.content,
			reviewRating: {
				"@type": "Rating",
				ratingValue: r.rating,
				bestRating: 5,
				worstRating: 1,
			},
		})),
		hasMap: `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`,
		areaServed: [
			{ "@type": "City", name: "Katowice" },
			{ "@type": "City", name: "Sosnowiec" },
			{ "@type": "City", name: "Mysłowice" },
		],
	};

	const breadcrumb = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Strona główna",
				item: SITE_URL,
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Lokalizacje",
				item: `${SITE_URL}/#lokalizacje`,
			},
			{
				"@type": "ListItem",
				position: 3,
				name: `${location.city} · ${location.venue}`,
				item: pageUrl,
			},
		],
	};

	const faqPage = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: details.faqs.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer,
			},
		})),
	};

	return [iceCreamShop, breadcrumb, faqPage];
}

/**
 * "9:00" / "9:30" → "09:00" / "09:30" (ISO 8601 compatible with schema.org time).
 */
function toIsoTime(hhmm: string): string {
	const m = hhmm.match(/(\d{1,2}):(\d{2})/);
	if (!m) return hhmm;
	const hours = m[1].padStart(2, "0");
	return `${hours}:${m[2]}`;
}
