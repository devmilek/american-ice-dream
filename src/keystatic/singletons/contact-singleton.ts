import { collection, fields, singleton } from "@keystatic/core";

export const contactSingletion = singleton({
	label: "Kontakt",
	path: "./src/content/singletons/contact",

	format: "json",
	schema: {
		phoneNumbers: fields.array(fields.text({ label: "Numer telefonu" }), {
			label: "Numery telefonów",
			itemLabel: (props) => props.value ?? "Numer telefonu",
		}),
		email: fields.text({
			label: "E-mail",
		}),
		address: fields.object(
			{
				street: fields.text({ label: "Ulica i numer" }),
				postalCode: fields.text({ label: "Kod pocztowy" }),
				city: fields.text({ label: "Miejscowość" }),
				country: fields.text({ label: "Kraj", defaultValue: "Polska" }),
			},
			{ label: "Adres siedziby" },
		),
		companyInfo: fields.object(
			{
				companyName: fields.text({
					label: "Nazwa firmy",
				}),
				tradeName: fields.text({
					label: "Marka handlowa",
				}),
				nip: fields.text({
					label: "NIP",
				}),
				regon: fields.text({
					label: "REGON",
				}),
				establishedOn: fields.date({
					label: "Data założenia",
					description: "YYYY-MM-DD",
				}),
			},
			{ label: "Dane firmy" },
		),
		socialMedia: fields.object(
			{
				facebook: fields.object(
					{
						url: fields.text({
							label: "URL",
						}),
						username: fields.text({
							label: "Nazwa użytkownika",
						}),
					},
					{ label: "Facebook" },
				),
				instagram: fields.object(
					{
						url: fields.text({
							label: "URL",
						}),
						username: fields.text({
							label: "Nazwa użytkownika",
						}),
					},
					{ label: "Instagram" },
				),
				tiktok: fields.object(
					{
						url: fields.text({
							label: "URL",
						}),
						username: fields.text({
							label: "Nazwa użytkownika",
						}),
					},
					{ label: "TikTok" },
				),
			},
			{ label: "Social Media" },
		),
	},
});
