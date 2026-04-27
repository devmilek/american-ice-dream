import type {
	AggregateRating,
	Answer,
	BreadcrumbList,
	DayOfWeek,
	FAQPage,
	GeoCoordinates,
	Graph,
	IceCreamShop,
	ListItem,
	OpeningHoursSpecification,
	Person,
	PostalAddress,
	Question,
	Rating,
	Review,
} from "schema-dts";
import { LocalizationEntry } from "../../../keystatic/location-collection";
import { env } from "@/env";
import slugify from "@sindresorhus/slugify";

const WEEKDAY_DAYS: readonly DayOfWeek[] = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

function toIsoTime(hhmm: string): string {
	const m = hhmm.match(/(\d{1,2}):(\d{2})/);
	if (!m) return hhmm;
	return `${m[1].padStart(2, "0")}:${m[2]}`;
}

/** Wyciąga pierwszy zakres HH:MM–HH:MM z tekstu (np. z dopisków w nawiasach). */
function extractTimeRange(
	line: string,
): { opens: string; closes: string } | undefined {
	const compact = line.replace(/\s+/g, " ");
	const m = compact.match(/(\d{1,2}:\d{2})\s*[–-]\s*(\d{1,2}:\d{2})/);
	if (!m) return undefined;
	return { opens: toIsoTime(m[1]), closes: toIsoTime(m[2]) };
}

/**
 * JSON-LD (@graph) dla podstrony lokalizacji: IceCreamShop, BreadcrumbList, FAQPage.
 */
export function buildLocationPageGraph(
	details: LocalizationEntry,
	siteUrl: string,
): Graph {
	const pageUrl = `${env.NEXT_PUBLIC_SITE_URL}/lokalizacje/${slugify(details.locationName)}`;
	const shopId = `${pageUrl}#icecreamshop` as const;

	const lat = Number.parseFloat(details.address.coordinates.lat);
	const lng = Number.parseFloat(details.address.coordinates.lng);

	const postalAddress: PostalAddress = {
		"@type": "PostalAddress",
		streetAddress: details.address.street,
		addressLocality: details.address.city,
		postalCode: details.address.postal,
		addressCountry: "PL",
	};

	const geo: GeoCoordinates | undefined =
		Number.isFinite(lat) && Number.isFinite(lng)
			? {
					"@type": "GeoCoordinates",
					latitude: lat,
					longitude: lng,
				}
			: undefined;

	const weekdayRange = extractTimeRange(details.hours.weekdays);
	const sundayRange = extractTimeRange(details.hours.sunday);

	const openingHoursSpecification: OpeningHoursSpecification[] = [];
	if (weekdayRange) {
		openingHoursSpecification.push({
			"@type": "OpeningHoursSpecification",
			dayOfWeek: [...WEEKDAY_DAYS],
			opens: weekdayRange.opens,
			closes: weekdayRange.closes,
		});
	}
	if (sundayRange) {
		openingHoursSpecification.push({
			"@type": "OpeningHoursSpecification",
			dayOfWeek: "Sunday",
			opens: sundayRange.opens,
			closes: sundayRange.closes,
		});
	}

	const heroSrc = details.hero.image.src;
	const images = heroSrc
		? [`${env.NEXT_PUBLIC_SITE_URL}${heroSrc}`]
		: undefined;

	const aggregate = details.reviews.aggregate;
	const hasAggregate =
		aggregate &&
		typeof aggregate.rating === "number" &&
		typeof aggregate.count === "number" &&
		aggregate.count > 0;

	let aggregateRating: AggregateRating | undefined;
	if (hasAggregate) {
		aggregateRating = {
			"@type": "AggregateRating",
			ratingValue: aggregate.rating,
			reviewCount: aggregate.count,
			bestRating: 5,
			worstRating: 1,
		};
	}

	const reviewNodes: Review[] = (details.reviews.items ?? [])
		.filter(
			(r): r is typeof r & { rating: number } =>
				typeof r.rating === "number" && !Number.isNaN(r.rating),
		)
		.map((r) => {
			const reviewRating: Rating = {
				"@type": "Rating",
				ratingValue: r.rating,
				bestRating: 5,
				worstRating: 1,
			};
			const author: Person = {
				"@type": "Person",
				name: r.author,
			};
			return {
				"@type": "Review",
				author,
				datePublished: r.date,
				reviewBody: r.content,
				reviewRating,
				itemReviewed: { "@id": shopId },
			};
		});

	const iceCreamShop: IceCreamShop = {
		"@type": "IceCreamShop",
		"@id": shopId,
		name: `American Ice Dream ${details.address.city}`,
		description: details.seo.description,
		url: pageUrl,
		...(images ? { image: images } : {}),
		logo: `${env.NEXT_PUBLIC_SITE_URL}/logo.png`,
		...(details.phone?.trim() ? { telephone: details.phone.trim() } : {}),
		...(details.email?.trim() ? { email: details.email.trim() } : {}),
		priceRange: "$$",
		address: postalAddress,
		...(geo ? { geo } : {}),
		...(openingHoursSpecification.length > 0
			? { openingHoursSpecification }
			: {}),
		servesCuisine: "Lody włoskie, desery lodowe, kawa",
		...(aggregateRating ? { aggregateRating } : {}),
		...(reviewNodes.length > 0 ? { review: reviewNodes } : {}),
		hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${details.address.street}, ${details.address.postal} ${details.address.city}`)}`,
		areaServed: { "@type": "City", name: details.address.city },
		...(details.address.googleBusinessId?.trim()
			? { identifier: details.address.googleBusinessId.trim() }
			: {}),
	};

	const breadcrumb: BreadcrumbList = {
		"@type": "BreadcrumbList",
		itemListOrder: "ItemListOrderAscending",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Strona główna",
				item: siteUrl,
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Lokalizacje",
				item: `${siteUrl}/#lokalizacje`,
			},
			{
				"@type": "ListItem",
				position: 3,
				name: `${details.address.city} · ${details.address.venue}`,
				item: pageUrl,
			},
		] satisfies ListItem[],
	};

	const mainEntity: Question[] = details.faqs.map((faq) => {
		const acceptedAnswer: Answer = {
			"@type": "Answer",
			text: faq.answer,
		};
		return {
			"@type": "Question",
			name: faq.question,
			acceptedAnswer,
		};
	});

	const graphNodes: Graph["@graph"][number][] = [iceCreamShop, breadcrumb];

	if (mainEntity.length > 0) {
		const faqPage: FAQPage = {
			"@type": "FAQPage",
			"@id": `${pageUrl}#faq`,
			url: pageUrl,
			mainEntity: mainEntity as FAQPage["mainEntity"],
		};
		graphNodes.push(faqPage);
	}

	return {
		"@context": "https://schema.org",
		"@graph": graphNodes,
	};
}
