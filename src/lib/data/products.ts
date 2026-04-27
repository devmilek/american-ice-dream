import type { ComponentType, SVGProps } from "react";
import {
	CoffeeCup,
	CreamRoll,
	Granita,
	ItalianCone,
	SoftServe,
	Sundae,
} from "@/components/illustrations";

export type ProductPhoto = {
	src: string;
	alt: string;
	/** object-position value, e.g. "50% 50%" or "25% center". */
	position?: string;
	/** Padding inside the image box in rem. Lower = larger image. Default 1.25. */
	padding?: number;
};

export type Product = {
	id: string;
	title: string;
	tag?: string;
	description: string;
	meta: string;
	accent: string;
	Illustration: ComponentType<SVGProps<SVGSVGElement>>;
	photo?: ProductPhoto;
	featured?: boolean;
};

export const products: Product[] = [
	{
		id: "lody-wloskie",
		title: "Lody włoskie",
		// tag: "Bestseller · od 2006",
		description:
			"Ciesz się aksamitnymi lodami włoskimi, które wyróżniają się kremową konsystencją i wyjątkowym smakiem.",
		meta: "kremowa konsystencja - receptura 2006",
		accent: "#3cb6e3",
		Illustration: ItalianCone,
		photo: {
			src: "/swiderki-w-kubkach.png",
			alt: "Trzy kubki lodów włoskich American Ice Dream - waniliowo-czekoladowy, czekoladowy i truskawkowy",
			padding: 1.5,
		},
		// featured: true,
	},
	{
		id: "swiderki",
		title: "Lody świderki",
		description:
			"Gęsta konsystencja i intensywny smak. Dostępne w różnych wariantach - serwowane z posypkami, świeżymi owocami i naszymi domowymi sosami.",
		meta: "posypki · sosy · owoce",
		accent: "#0f2d5c",
		Illustration: SoftServe,
		photo: {
			src: "/swiderki-w-rozkach.png",
			alt: "Lody świderki w rożku waflowym - klasyczny czekoladowo-waniliowy i tęczowy owocowy",
			padding: 0.75,
		},
	},
	{
		id: "desery",
		title: "Desery lodowe",
		description:
			"Wykwintne desery, które łączą smaki i tekstury. Przygotowywane z najwyższą starannością - idealne na każdą okazję, od rodzinnej niedzieli po pierwszą randkę.",
		meta: "6 autorskich deserów",
		accent: "#c19a5b",
		Illustration: Sundae,
		photo: {
			src: "/lody-deser.png",
			alt: "Puchar deseru lodowego z trzema gałkami, bitą śmietaną, wisienką i wafelkiem",
			padding: 0.9,
		},
	},
	{
		id: "granity",
		title: "Granity owocowe",
		description:
			"Na gorące dni - orzeźwiające granity owocowe uwielbiane przez dzieci i dorosłych. Każdy łyk to eksplozja smaku i ochłody, prosto z polskich owoców sezonowych.",
		meta: "truskawka · cytryna · arbuz",
		accent: "#e06b6b",
		Illustration: Granita,
	},
	{
		id: "rurki",
		title: "Rurki z bitą śmietaną",
		description:
			"Chrupiące rurki z bitą śmietaną to klasyka, która nigdy się nie starzeje. Świeżo przygotowane, z lekką i puszystą bitą śmietaną - idealny dodatek do każdej lodowej uczty.",
		meta: "klasyk od pokoleń",
		accent: "#a56e2b",
		Illustration: CreamRoll,
		photo: {
			src: "/rurki-z-bitasmietana.png",
			alt: "Chrupiące rurki z bitą śmietaną posypane kakao",
			padding: 1.25,
		},
	},
	{
		id: "kawa",
		title: "Najlepsza kawa",
		description:
			"Oferujemy różnorodne warianty kawy, które zadowolą nawet najbardziej wymagających miłośników - od klasycznego espresso po kremowe latte z naszą świeżą mlecznością.",
		meta: "espresso · cappuccino · latte",
		accent: "#6b3a1f",
		Illustration: CoffeeCup,
		photo: {
			src: "/kawa-mrozona.png",
			alt: "Mrożona kawa w wysokiej szklance z bitą śmietaną i karmelem",
			padding: 0.75,
		},
	},
];
