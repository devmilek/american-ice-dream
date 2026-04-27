import type { Metadata } from "next";
import { AboutAuthority } from "@/components/sections/about-page/authority";
import { AboutExperience } from "@/components/sections/about-page/experience";
import { AboutExpertise } from "@/components/sections/about-page/expertise";
import { AboutHero } from "@/components/sections/about-page/hero";
import { AboutTrust } from "@/components/sections/about-page/trust";
import { env } from "@/env";
import { aboutPage } from "@/lib/data/about";

const PAGE_PATH = "/o-nas";

export const metadata: Metadata = {
	title:
		"O nas - Agnieszka Socha i rzemieślnicza lodziarnia American Ice Dream od 2006",
	description:
		"Poznaj historię American Ice Dream - rodzinnej lodziarni założonej w 2006 roku przez Agnieszkę Sochę. Proces produkcji, dostawcy, certyfikaty i zespół 6 lodziarni na Śląsku, w Małopolsce i na Dolnym Śląsku.",
	keywords: [
		"American Ice Dream o nas",
		"Agnieszka Socha lodziarnia",
		"rzemieślnicza lodziarnia Śląsk",
		"lody włoskie 2006",
		"rodzinna lodziarnia Polska",
		"historia American Ice Dream",
	],
	alternates: { canonical: PAGE_PATH },
	openGraph: {
		type: "profile",
		locale: "pl_PL",
		title: "O nas - Agnieszka Socha, założycielka American Ice Dream (od 2006)",
		description:
			"Rodzinna lodziarnia z 18-letnią historią. Poznaj założycielkę, nasz proces produkcji i dostawców.",
		url: `${env.NEXT_PUBLIC_SITE_URL}${PAGE_PATH}`,
		images: [
			{
				url: aboutPage.founder.portrait.src,
				alt: aboutPage.founder.portrait.alt,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "O American Ice Dream - rzemieślnicza lodziarnia od 2006",
		description: aboutPage.hero.lead,
		images: [aboutPage.founder.portrait.src],
	},
};

export default function AboutPage() {
	const data = aboutPage;
	const structuredData = buildStructuredData();

	return (
		<>
			<AboutHero data={data} />
			<AboutExperience data={data} />
			<AboutExpertise data={data} />
			<AboutAuthority data={data} />
			<AboutTrust data={data} />

			{structuredData.map((payload, i) => (
				<script
					key={`ld-${i}`}
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD payload is controlled
					dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
				/>
			))}
		</>
	);
}

/* ---------------------------------------------------------------- */
/*  Structured data (Schema.org) - AboutPage + Organization + Person */
/* ---------------------------------------------------------------- */

function buildStructuredData() {
	const { founder, trust, authority } = aboutPage;
	const { company } = trust;
	const pageUrl = `${env.NEXT_PUBLIC_SITE_URL}${PAGE_PATH}`;

	const organization = {
		"@context": "https://schema.org",
		"@type": "Organization",
		"@id": `${env.NEXT_PUBLIC_SITE_URL}#organization`,
		name: company.legalName,
		alternateName: company.tradeName,
		url: env.NEXT_PUBLIC_SITE_URL,
		logo: `${env.NEXT_PUBLIC_SITE_URL}/logo.png`,
		foundingDate: company.establishedOn,
		founder: {
			"@id": `${env.NEXT_PUBLIC_SITE_URL}#founder`,
		},
		taxID: company.taxId,
		vatID: company.taxId,
		identifier: [
			{
				"@type": "PropertyValue",
				propertyID: "NIP",
				value: company.taxId,
			},
			{
				"@type": "PropertyValue",
				propertyID: "REGON",
				value: company.regon,
			},
		],
		address: {
			"@type": "PostalAddress",
			streetAddress: company.headquarters.street,
			postalCode: company.headquarters.postal,
			addressLocality: company.headquarters.city,
			addressCountry: "PL",
		},
		contactPoint: [
			{
				"@type": "ContactPoint",
				contactType: "customer service",
				email: company.contact.email,
				telephone: company.contact.phone,
				availableLanguage: ["pl"],
			},
		],
		award: authority.awards.map((a) => a.title),
		sameAs: [env.NEXT_PUBLIC_SITE_URL],
	};

	const person = {
		"@context": "https://schema.org",
		"@type": "Person",
		"@id": `${env.NEXT_PUBLIC_SITE_URL}#founder`,
		name: founder.name,
		jobTitle: founder.role,
		description: founder.quoteLong,
		image: `${env.NEXT_PUBLIC_SITE_URL}${founder.portrait.src}`,
		worksFor: { "@id": `${env.NEXT_PUBLIC_SITE_URL}#organization` },
		nationality: { "@type": "Country", name: "Poland" },
		alumniOf: {
			"@type": "CollegeOrUniversity",
			name: "Uniwersytet Wrocławski",
		},
		knowsAbout: [
			"Lody włoskie",
			"Rzemieślnicze lodziarstwo",
			"Prowadzenie rodzinnej firmy",
			"Gastronomia",
		],
	};

	const aboutPageLd = {
		"@context": "https://schema.org",
		"@type": "AboutPage",
		"@id": `${pageUrl}#about`,
		name: "O American Ice Dream",
		description: aboutPage.hero.lead,
		url: pageUrl,
		mainEntity: { "@id": `${env.NEXT_PUBLIC_SITE_URL}#organization` },
		about: [
			{ "@id": `${env.NEXT_PUBLIC_SITE_URL}#organization` },
			{ "@id": `${env.NEXT_PUBLIC_SITE_URL}#founder` },
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
				item: env.NEXT_PUBLIC_SITE_URL,
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "O nas",
				item: pageUrl,
			},
		],
	};

	return [organization, person, aboutPageLd, breadcrumb];
}
