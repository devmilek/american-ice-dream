export type LoyaltyStep = {
	id: string;
	title: string;
	description: string;
};

export type LoyaltyMechanic = {
	id: string;
	headline: string;
	value: string;
	description: string;
};

export type LoyaltyFaqItem = {
	id: string;
	question: string;
	answer: string;
};

export type LoyaltyData = {
	hero: {
		eyebrow: string;
		title: string;
		scriptAccent: string;
		tagline: string;
		lead: string;
	};
	app: {
		/** Nazwa natywnej aplikacji, w której obsługiwany jest program. */
		name: string;
		/** Pełna nazwa w sklepach (do aria-label i schema). */
		fullName: string;
		/** Developer aplikacji (dla subline pod logo). */
		publisher: string;
		/** Ścieżka do ikony aplikacji w /public. */
		iconSrc: string;
		/** Link do App Store. */
		appStoreUrl: string;
		/** Link do Google Play. */
		googlePlayUrl: string;
		/** Link uniwersalny używany pod QR kodem (zazwyczaj dynamic link / landing appki). */
		universalUrl: string;
		/**
		 * URL enkodowany w QR kodzie do pobrania aplikacji. Po zeskanowaniu
		 * telefonem użytkownik trafia na landing z przyciskami App Store / Google Play
		 * (czyli na tę właśnie podstronę), gdzie wybiera swój sklep z aplikacjami.
		 */
		downloadTargetUrl: string;
	};
	steps: LoyaltyStep[];
	mechanics: LoyaltyMechanic[];
	faqs: LoyaltyFaqItem[];
};

export const loyalty: LoyaltyData = {
	hero: {
		eyebrow: "Program lojalnościowy",
		title: "Karta LODOJADA",
		scriptAccent: "Twoje lody, nasza wdzięczność.",
		tagline:
			"Zbieraj pieczątki w aplikacji — co 10. produkt jest na nasz koszt.",
		lead: "Karta LODOJADA to cyfrowa pieczątkarka w aplikacji Embargo. Jedno skanowanie przy kasie i punkty są już na Twoim koncie — nie musisz nosić papierowej karty ani podawać numeru telefonu.",
	},
	app: {
		name: "Embargo",
		fullName: "Embargo — Loyalty & Rewards",
		publisher: "Embargo Lifestyle Ltd.",
		iconSrc: "/emrago-icon.webp",
		appStoreUrl:
			"https://apps.apple.com/pl/app/embargo-loyalty-rewards/id1205758388?l=pl",
		googlePlayUrl:
			"https://play.google.com/store/apps/details?id=com.embargoapp.app&hl=pl",
		universalUrl: "https://embargoapp.com/",
		downloadTargetUrl: "https://americanicedream.pl/program-lojalnosciowy",
	},
	steps: [
		{
			id: "download",
			title: "Pobierz aplikację Embargo",
			description:
				"Bezpłatna aplikacja na iOS i Androida. Zajmuje mniej miejsca niż jedno zdjęcie deseru.",
		},
		{
			id: "activate",
			title: "Załóż Kartę LODOJADA",
			description:
				"Kilka sekund, bez papierowej karty. Karta aktywuje się automatycznie po pierwszej wizycie.",
		},
		{
			id: "collect",
			title: "Zbieraj pieczątki przy kasie",
			description:
				"Za każde 8 zł dostajesz pieczątkę. Przyłóż telefon do czytnika NFC lub pokaż QR — reszta dzieje się sama.",
		},
		{
			id: "redeem",
			title: "Odbieraj nagrodę",
			description:
				"10 pieczątek = darmowy produkt. Wybierasz co chcesz: świderka, rurkę, granit albo kawę.",
		},
	],
	mechanics: [
		{
			id: "stamp-value",
			headline: "Ile kosztuje pieczątka",
			value: "8 zł = 1 pieczątka",
			description:
				"Za każde wydane 8 zł dostajesz jedną pieczątkę. Kwoty z jednego rachunku sumują się — nie musisz płacić osobno za każdą porcję.",
		},
		{
			id: "reward",
			headline: "Co dostajesz za 10 pieczątek",
			value: "10 pieczątek = darmowy produkt",
			description:
				"Darmowy produkt z naszej karty do wartości odpowiadającej średniej cenie świderka. Ty decydujesz, kiedy zrealizować nagrodę.",
		},
		{
			id: "nfc",
			headline: "Jak odbija się pieczątka",
			value: "NFC lub QR",
			description:
				"Obsługa jest błyskawiczna — telefon przy czytniku NFC (iPhone i większość Androidów) albo skan kodu QR. Bez logowania się w kasie.",
		},
		{
			id: "grace",
			headline: "Zapomniałeś aplikacji?",
			value: "24h na doliczenie",
			description:
				"Jeśli nie miałeś przy sobie telefonu, masz 24h od wizyty, żeby założyć konto i doliczyć pieczątki z paragonu.",
		},
	],
	faqs: [
		{
			id: "loy-faq-1",
			question: "Czy pieczątki działają we wszystkich lodziarniach?",
			answer:
				"Tak. Karta LODOJADA jest wspólna dla wszystkich 6 naszych punktów — Żory (Wiślanka i Auchan), Katowice, Mikołów, Bielsko-Biała i Wrocław. Pieczątki zebrane w jednej lodziarni wykorzystasz w dowolnej innej.",
		},
		{
			id: "loy-faq-2",
			question: "Czy pieczątki przepadają?",
			answer:
				"Pieczątki są ważne 12 miesięcy od daty ich uzyskania. Aplikacja Embargo pokaże Ci, kiedy najstarsze punkty zaczną wygasać, żebyś zdążył je wykorzystać. Aktywni klienci zwykle odbierają nagrodę znacznie wcześniej.",
		},
		{
			id: "loy-faq-3",
			question: "Co dokładnie mogę odebrać za 10 pieczątek?",
			answer:
				"Dowolny produkt z naszej karty o wartości do jednej pełnej porcji świderka (M) lub lodów włoskich (M). W praktyce oznacza to świderka w rożku lub kubku, rurkę z bitą śmietaną, granit owocowy albo kawę z naszej karty — wybierasz przy kasie.",
		},
		{
			id: "loy-faq-4",
			question: "Czy nagrodę można łączyć z dodatkami i sosami?",
			answer:
				"Tak. Bazowa porcja jest na nasz koszt, a za posypki, sosy i dodatkowe elementy (np. podwójna kulka, brownie) dopłacasz według cennika. Dopłacona kwota również generuje nowe pieczątki.",
		},
		{
			id: "loy-faq-5",
			question: "Czy muszę podawać dane osobowe?",
			answer:
				"Do działania karty wystarczy konto w aplikacji Embargo. Nie prosimy Cię o numer telefonu, PESEL, adres ani zgodę marketingową. Jeśli chcesz, możesz dodać datę urodzin — dostaniesz wtedy urodzinową porcję gratis.",
		},
		{
			id: "loy-faq-6",
			question: "Zapomniałem aplikacji przy zakupie. Czy pieczątka przepadła?",
			answer:
				"Nie, jeśli zareagujesz w ciągu 24h. Pokaż pracownikowi paragon następnego dnia lub skontaktuj się z nami mailowo — doliczymy należne pieczątki ręcznie. Po 24h, niestety, nie będziemy mogli tego zrobić.",
		},
	],
};
