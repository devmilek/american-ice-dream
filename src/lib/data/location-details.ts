/**
 * Rozszerzone dane dla podstron lokalizacji.
 *
 * Źródło prawdy w repo: Keystatic → `content/lokalizacje/<slug>.json`
 * (panel: `/keystatic`). Opcjonalny fallback: `locationDetails` w kodzie.
 *
 * Każda lokalizacja ma osobne, unikalne copy - to kluczowe dla SEO,
 * żeby Google nie uznał podstron za duplikaty.
 */

import { cache } from "react";

import { keystaticReader } from "@/lib/keystatic/reader";

export type LocationReview = {
	id: string;
	author: string;
	rating: number; // 1..5, można .5
	date: string; // YYYY-MM-DD
	content: string;
};

export type LocationFaqItem = {
	id: string;
	question: string;
	answer: string;
};

export type LocationGalleryImage = {
	src: string;
	alt: string;
	caption?: string;
	/** Placeholder = użytkownik CMS ma wymienić. */
	placeholder?: boolean;
};

export type LocationOfferHighlight = {
	productId: string; // ref do lib/data/products.ts
	callout: string; // krótki, lokalny copy (parafraza!)
};

export type LocationTransport = {
	car: string;
	public: string;
	parking: string;
	accessibility: string;
};

export type LocationSeo = {
	title: string;
	description: string;
	keywords: string[];
	/** Używane w <h1>. */
	headline: string;
	/** Lead pod H1 - jedno zdanie wzmacniające frazę. */
	lead: string;
};

export type LocationDetails = {
	/** Klucz URL (app/lokalizacje/[slug]). */
	slug: string;
	/** Ref do `locations.ts#id`. */
	locationId: string;
	phone?: string;
	email?: string;
	/** URL (SEO): canonical. */
	canonicalPath: string;
	hero: {
		image: { src: string; alt: string; placeholder?: boolean };
		badge: string;
	};
	neighborhood: string;
	transport: LocationTransport;
	description: {
		lead: string;
		body: string[];
	};
	offer: {
		intro: string;
		highlights: LocationOfferHighlight[];
	};
	lodojady: {
		intro: string;
		qr: { url: string; alt: string };
	};
	reviews: {
		aggregate: { rating: number; count: number };
		items: LocationReview[];
	};
	gallery: LocationGalleryImage[];
	faqs: LocationFaqItem[];
	seo: LocationSeo;
};

export const getLocationDetails = cache(async (slug: string) => {
	const fromKs =
		await keystaticReader.collections.lokalizacje.readOrThrow(slug);
	return fromKs;
});

export const getAllLocationDetails = cache(async () => {
	const fromFiles = await keystaticReader.collections.lokalizacje.all();

	return fromFiles;
});

/** Mapa `locationId` → `slug` podstrony szczegółów (Keystatic + fallback). */
export const getLocationIdToDetailsSlugMap = cache(
	async (): Promise<Record<string, string>> => {
		const list = await getAllLocationDetails();
		return list.reduce<Record<string, string>>((acc, d) => {
			acc[d.entry.locationName] = d.slug;
			return acc;
		}, {});
	},
);
