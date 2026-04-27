import { collection, fields } from "@keystatic/core";
import { Entry } from "@keystatic/core/reader";
import keystaticConfig from "./keystatic.config";

/** Schemat zgodny z typem `LocationDetails` - pliki w `content/lokalizacje/*.json`. */
export const lokalizacjeCollection = collection({
	label: "Lokalizacje",
	slugField: "locationName",
	path: "./src/content/lokalizacje/*",
	format: "json",
	columns: ["locationName"],
	schema: {
		locationName: fields.slug({
			name: {
				label: "Nazwa lokalizacji",
				description: "Np. Katowice Auchan",
				validation: { length: { min: 1 } },
			},
			slug: {
				description: "Np. katowice → /lokalizacje/katowice-auchan",
			},
		}),
		address: fields.object(
			{
				city: fields.text({ label: "Miasto" }),
				venue: fields.text({ label: "Miejsce / Obiekt (np. Auchan)" }),
				street: fields.text({ label: "Ulica i numer" }),
				postal: fields.text({ label: "Kod pocztowy" }),
				googleBusinessId: fields.text({ label: "ID Google Business" }),
				coordinates: fields.object(
					{
						lat: fields.text({
							label: "Szerokość (Lat)",
							validation: {
								pattern: { regex: /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/ },
							},
						}),
						lng: fields.text({
							label: "Długość (Lng)",
							validation: {
								pattern: { regex: /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/ },
							},
						}),
					},
					{ label: "Współrzędne GPS" },
				),
			},
			{ label: "Dane adresowe i lokalizacja" },
		),
		hours: fields.object(
			{
				weekdays: fields.text({
					label: "Dni robocze",
					defaultValue: "9:00 – 21:00",
				}),
				sunday: fields.text({
					label: "Niedziela",
					defaultValue: "9:30 – 19:00",
				}),
			},
			{ label: "Godziny otwarcia" },
		),
		shortDescription: fields.text({
			label: "Krótki opis (Wizytówka)",
			multiline: true,
		}),
		phone: fields.text({
			label: "Telefon",
			description: "Opcjonalnie",
		}),
		email: fields.text({
			label: "E-mail",
			description: "Opcjonalnie",
		}),
		hero: fields.object(
			{
				image: fields.object(
					{
						src: fields.image({
							label: "Obraz",
							directory: "public/lokalizacje",
							publicPath: "/lokalizacje",
						}),
						alt: fields.text({ label: "Alt obrazu" }),
					},
					{ label: "Obraz hero" },
				),
				subheading: fields.text({ label: "Podtytuł" }),
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
				subheading: fields.text({ label: "Podtytuł" }),
				lead: fields.text({ label: "Lead (akapit wprowadzający)" }),
				body: fields.array(fields.text({ label: "Akapit" }), {
					label: "Treść (akapity)",
					itemLabel: (props) => props.value ?? "Akapit",
				}),
			},
			{ label: "Opis" },
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
						itemLabel: (props) => props.fields.author.value ?? "Opinia",
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

export type LocalizationEntry = Entry<
	(typeof keystaticConfig)["collections"]["lokalizacje"]
>;
