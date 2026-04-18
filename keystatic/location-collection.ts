import { collection, fields } from "@keystatic/core";

/** Schemat zgodny z typem `LocationDetails` — pliki w `content/lokalizacje/*.json`. */
export const lokalizacjeCollection = collection({
	label: "Lokalizacje",
	slugField: "slug",
	path: "content/lokalizacje/*",
	format: "json",
	columns: ["slug", "locationId"],
	schema: {
		slug: fields.text({
			label: "Slug URL",
			description: "Np. katowice → /lokalizacje/katowice",
			validation: { length: { min: 1 } },
		}),
		locationId: fields.text({
			label: "ID punktu",
			description: "Musi odpowiadać wpisowi w lib/data/locations.ts (np. katowice-auchan)",
			validation: { length: { min: 1 } },
		}),
		phone: fields.text({
			label: "Telefon",
			description: "Opcjonalnie",
		}),
		email: fields.text({
			label: "E-mail",
			description: "Opcjonalnie",
		}),
		canonicalPath: fields.text({
			label: "Ścieżka kanoniczna",
			description: "Np. /lokalizacje/katowice",
		}),
		hero: fields.object(
			{
				image: fields.object(
					{
						src: fields.text({ label: "Obraz — ścieżka public" }),
						alt: fields.text({ label: "Alt obrazu" }),
						placeholder: fields.checkbox({
							label: "Placeholder (do wymiany)",
							defaultValue: false,
						}),
					},
					{ label: "Obraz hero" },
				),
				badge: fields.text({ label: "Badge (np. Auchan · od 2006)" }),
			},
			{ label: "Hero" },
		),
		neighborhood: fields.text({
			label: "Sąsiedztwo / okolica",
		}),
		transport: fields.object(
			{
				car: fields.text({ label: "Dojazd autem" }),
				public: fields.text({ label: "Komunikacja miejska" }),
				parking: fields.text({ label: "Parking" }),
				accessibility: fields.text({ label: "Dostępność" }),
			},
			{ label: "Dojazd i parking" },
		),
		description: fields.object(
			{
				lead: fields.text({ label: "Lead (akapit wprowadzający)" }),
				body: fields.array(fields.text({ label: "Akapit" }), {
					label: "Treść (akapity)",
					itemLabel: (props) => props.value ?? "Akapit",
				}),
			},
			{ label: "Opis" },
		),
		offer: fields.object(
			{
				intro: fields.text({ label: "Wstęp oferty" }),
				highlights: fields.array(
					fields.object({
						productId: fields.text({
							label: "ID produktu",
							description: "Z lib/data/products.ts",
						}),
						callout: fields.text({ label: "Krótki opis lokalny" }),
					}),
					{
						label: "Wyróżnienia oferty",
						itemLabel: (props) =>
							props.fields.productId.value ?? "Produkt",
					},
				),
			},
			{ label: "Oferta" },
		),
		lodojady: fields.object(
			{
				intro: fields.text({ label: "Tekst Lodojady" }),
				qr: fields.object(
					{
						url: fields.url({ label: "URL kodu QR" }),
						alt: fields.text({ label: "Alt dla QR" }),
					},
					{ label: "QR" },
				),
			},
			{ label: "Lodojady" },
		),
		reviews: fields.object(
			{
				aggregate: fields.object(
					{
						rating: fields.number({
							label: "Średnia ocena",
							validation: { min: 1, max: 5 },
						}),
						count: fields.integer({
							label: "Liczba opinii",
							validation: { min: 0 },
						}),
					},
					{ label: "Agregat" },
				),
				items: fields.array(
					fields.object({
						id: fields.text({ label: "ID opinii" }),
						author: fields.text({ label: "Autor" }),
						rating: fields.number({
							label: "Ocena (1–5, można .5)",
							validation: { min: 1, max: 5 },
						}),
						date: fields.text({
							label: "Data (YYYY-MM-DD)",
						}),
						content: fields.text({
							label: "Treść",
							multiline: true,
						}),
					}),
					{
						label: "Opinie",
						itemLabel: (props) =>
							props.fields.author.value ?? "Opinia",
					},
				),
			},
			{ label: "Opinie" },
		),
		gallery: fields.array(
			fields.object({
				src: fields.text({ label: "Ścieżka obrazu" }),
				alt: fields.text({ label: "Alt" }),
				caption: fields.text({ label: "Podpis", description: "Opcjonalnie" }),
				placeholder: fields.checkbox({
					label: "Placeholder",
					defaultValue: false,
				}),
			}),
			{
				label: "Galeria",
				itemLabel: (props) => props.fields.alt.value ?? "Zdjęcie",
			},
		),
		faqs: fields.array(
			fields.object({
				id: fields.text({ label: "ID FAQ" }),
				question: fields.text({ label: "Pytanie" }),
				answer: fields.text({ label: "Odpowiedź", multiline: true }),
			}),
			{
				label: "FAQ",
				itemLabel: (props) => props.fields.question.value ?? "FAQ",
			},
		),
		seo: fields.object(
			{
				title: fields.text({ label: "Meta title" }),
				description: fields.text({
					label: "Meta description",
					multiline: true,
				}),
				keywords: fields.array(fields.text({ label: "Fraza" }), {
					label: "Słowa kluczowe",
					itemLabel: (props) => props.value ?? " Słowo",
				}),
				headline: fields.text({ label: "Nagłówek H1" }),
				lead: fields.text({ label: "Lead pod H1" }),
			},
			{ label: "SEO" },
		),
	},
});
