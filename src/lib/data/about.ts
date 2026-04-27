/**
 * Dane podstrony /o-nas - E-E-A-T oriented.
 *
 * Cały copy jest docelowym kandydatem do CMS-a.
 * Placeholdery oznaczamy flagą `placeholder: true` lub komentarzem `// TODO`.
 */

export type AboutFounder = {
	name: string;
	role: string;
	portrait: { src: string; alt: string; placeholder?: boolean };
	quote: string;
	quoteLong: string;
	linkedinUrl?: string;
};

export type AboutTimelineEntry = {
	year: string;
	title: string;
	body: string;
	highlight?: boolean;
};

export type AboutStat = {
	label: string;
	value: string;
	suffix?: string;
	caption?: string;
};

export type AboutPress = {
	publisher: string;
	title: string;
	url: string;
	year?: string;
	logo?: string;
};

export type AboutAward = {
	title: string;
	body: string;
	year?: string;
};

export type AboutSupplier = {
	name: string;
	origin: string;
	product: string;
};

export type AboutProcessStep = {
	step: string; // „01", „02"…
	title: string;
	body: string;
};

export type AboutCertificate = {
	title: string;
	body: string;
	issuer: string;
};

export type AboutCompanyInfo = {
	legalName: string;
	tradeName: string;
	taxId: string; // NIP
	regon: string;
	headquarters: {
		street: string;
		postal: string;
		city: string;
		country: string;
	};
	contact: {
		email: string;
		/** Główny numer telefonu - używany w JSON-LD i nagłówkach. */
		phone?: string;
		/** Dodatkowe numery telefonu (opcjonalnie). */
		phones?: string[];
	};
	establishedOn: string; // ISO
};

export type AboutTeamMember = {
	name: string;
	role: string;
	photo?: { src: string; alt: string; placeholder?: boolean };
	location?: string;
};

export type AboutPageData = {
	hero: {
		eyebrow: string;
		headline: string;
		headlineScript: string;
		lead: string;
		badges: { label: string; value: string }[];
	};
	founder: AboutFounder;
	experience: {
		intro: string;
		story: string[];
		timeline: AboutTimelineEntry[];
	};
	expertise: {
		intro: string;
		process: AboutProcessStep[];
		suppliers: {
			intro: string;
			items: AboutSupplier[];
		};
		comparison: {
			intro: string;
			points: { us: string; them: string }[];
		};
	};
	authority: {
		stats: AboutStat[];
		press: AboutPress[];
		awards: AboutAward[];
	};
	trust: {
		values: { title: string; body: string }[];
		certificates: AboutCertificate[];
		team: AboutTeamMember[];
		company: AboutCompanyInfo;
	};
};

export const aboutPage: AboutPageData = {
	hero: {
		eyebrow: "Poznaj nas",
		headline: "Za każdą gałką stoi",
		headlineScript: "prawdziwa historia",
		lead: "American Ice Dream to rodzinna lodziarnia, którą w 2006 roku założyła Agnieszka Socha - wówczas 21-letnia studentka prawa z marzeniem o tym, żeby przywieźć na Śląsk prawdziwe włoskie lody. Dziś jesteśmy w sześciu miastach, ale robimy dokładnie to samo, co w pierwszym punkcie w galerii handlowej - jedną gałkę za drugą, codziennie od podstaw.",
		badges: [
			{ label: "Od", value: "2006" },
			{ label: "Lokalizacji", value: "6" },
			{ label: "Ocena Google", value: "4.9/5" },
		],
	},
	founder: {
		name: "Agnieszka Socha",
		role: "Założycielka i właścicielka",
		portrait: {
			src: "/agnieszka.jpg",
			alt: "Agnieszka Socha, założycielka American Ice Dream - portret",
		},
		quote:
			"Najcenniejszym kapitałem każdej firmy są ludzie, którzy ją tworzą - i ja to widzę każdego dnia.",
		quoteLong:
			"Założyłam American Ice Dream 1 czerwca 2006 roku, w wieku 21 lat. Jeszcze rok wcześniej nie wiedziałam, że tak się stanie. Po pierwszym roku studiów prawniczych wyjechałam na program Work and Travel do resortu w Minnesocie. Pracowałam tam pół roku jako kelnerka w hotelowej restauracji i ekspedientka w sklepie z pamiątkami. Etos pracy, kultura organizacyjna i szacunek, jaki widziałam między właścicielami, przełożonymi i studentami z całego świata, zostawiły we mnie ślad - i pomysł, żeby stworzyć w Polsce firmę opartą na tej samej filozofii.",
		linkedinUrl: undefined,
	},
	experience: {
		intro:
			"Historia American Ice Dream to historia jednej decyzji podjętej w Minnesocie w 2005 roku - i setek mniejszych decyzji, które przez kolejnych 18 lat ułożyły się w rodzinną firmę lodową z sześcioma lokalizacjami na południu Polski.",
		story: [
			"Wróciłam z USA z konkretnym planem: otworzyć lodziarnię, w której obsługa traktuje gościa tak, jak widziałam u siebie w resorcie - z uwagą i szczerą życzliwością. 1 czerwca 2006 roku, w wieku 21 lat, założyłam działalność gospodarczą. Pierwszym punktem była jedna niewielka lodziarnia w galerii handlowej - z jedną klasyczną maszyną do lodów włoskich i z receptury, którą wypracowywaliśmy metodą prób i smaków.",
			"Jako młoda osoba bez doświadczenia w biznesie miałam ogromne szczęście spotkać na swojej drodze mądrych, inspirujących ludzi, od których uczyłam się, jak prowadzić firmę. Równie ważni byli współpracownicy, którzy od pierwszych miesięcy pokazywali mi, że razem tworzymy tę firmę i razem jesteśmy za nią odpowiedzialni.",
			"Przez kolejne kilkanaście lat pierwsza lodziarnia rozrosła się do czterech, a potem sześciu punktów - w Żorach, Mikołowie, Katowicach, Bielsku-Białej i Wrocławiu. Nie zmieniliśmy maszyn, receptury ani relacji z dostawcami. Zmieniliśmy tylko skalę - i liczbę gości, którzy do nas wracają.",
		],
		timeline: [
			{
				year: "2005",
				title: "Work and Travel w Minnesocie",
				body: "Pół roku pracy w resorcie hotelowym - jako kelnerka i ekspedientka. To tutaj rodzi się pomysł na firmę opartą na szacunku, uwadze i dobrej organizacji.",
			},
			{
				year: "2006",
				title: "Pierwsza lodziarnia",
				body: "1 czerwca rejestruję działalność gospodarczą. Wkrótce potem otwieram pierwszą lodziarnię American Ice Dream w galerii handlowej - z jedną maszyną do lodów włoskich.",
				highlight: true,
			},
			{
				year: "2009 – 2014",
				title: "Śląsk × Małopolska",
				body: "Rośniemy do czterech lokalizacji - Żory, Mikołów, Katowice, Bielsko-Biała. Ustalamy receptury, które trzymają się do dziś. Dołącza trzon naszego zespołu.",
			},
			{
				year: "2018",
				title: "Lodojady - program lojalnościowy",
				body: "Startujemy z własnym programem Lodojady, dziś w aplikacji Embargo. Goście zbierają pieczątki między wszystkimi lokalizacjami, a co 8. porcja jest na nasz koszt.",
			},
			{
				year: "2021",
				title: "Szósty punkt i nowa maszyna",
				body: "Otwieramy lokal w Alei Bielany pod Wrocławiem. Inwestujemy w nowy zestaw maszyn Carpigiani - zachowując dokładnie tę samą bazę receptury z 2006 roku.",
			},
			{
				year: "2026 – dziś",
				title: "20 lat nieprzerwanej receptury",
				body: "Dalej robimy wszystko codziennie, od podstaw, na miejscu. Ten sam skład śmietanki, te same polskie owoce sezonowe, ta sama temperatura ekspedycji.",
			},
		],
	},
	expertise: {
		intro:
			"Rzemiosło lodowe to coś, czego się uczysz latami - najpierw u maszyny, potem u dostawcy, a na końcu u gościa. Tak wygląda nasz proces i nasza odpowiedzialność za każdą porcję.",
		process: [
			{
				step: "01",
				title: "Baza - mleko, śmietanka, cukier",
				body: "Każdego ranka przygotowujemy bazę: pełnotłuste mleko od śląskich producentów, świeża śmietana 36%, cukier trzcinowy i stabilizator na bazie mączki chleba świętojańskiego. Żadnego mleka w proszku, żadnych tłuszczów roślinnych.",
			},
			{
				step: "02",
				title: "Pasteryzacja i dojrzewanie",
				body: "Bazę pasteryzujemy w 85 °C i schładzamy do 4 °C, a następnie leżakuje przez minimum 4 godziny - to etap, w którym tłuszcz mleczny wiąże się z cukrem i rozwija aksamitna konsystencja lodów włoskich.",
			},
			{
				step: "03",
				title: "Smaki - włoskie pasty + polskie owoce",
				body: "Do bazy dodajemy pasty smakowe od włoskich producentów (m.in. z Emilii-Romanii) oraz owoce od śląskich dostawców - truskawki z Brzeźnicy, maliny spod Racławic, jagody z Beskidu Śląskiego. Bez aromatów „natura-identycznych”.",
			},
			{
				step: "04",
				title: "Zamrażanie - stała temperatura ekspedycji",
				body: "Lody włoskie serwujemy prosto z maszyny Carpigiani w temperaturze od -6 do -8 °C. Świderki ekspediujemy w -11 °C. Ta różnica decyduje o konsystencji - włoskie są kremowe i „miękkie”, świderki trzymają strukturę.",
			},
			{
				step: "05",
				title: "Serwis - tu zaczyna się rzemiosło",
				body: "Każdą porcję nakładamy ręcznie. Wafelek sypiemy tuż przed wydaniem, żeby nie przemókł. Desery komponujemy w pucharze na żywo - bo tak smakują najlepiej. To jest moment, w którym technika spotyka się z gościnnością.",
			},
		],
		suppliers: {
			intro:
				"Część gości pyta nas „skąd macie to mleko, że tak smakuje”. Odpowiedź: od tych samych dostawców od lat. Relacja z producentem jest dla nas tak samo ważna, jak sam produkt.",
			items: [
				{
					name: "Śląska Mleczarnia Rodzinna",
					origin: "Województwo śląskie",
					product: "Mleko pełnotłuste 3,2% i śmietana kremówka 36%",
				},
				{
					name: "PreGel Italia",
					origin: "Reggio Emilia, Włochy",
					product: "Pasty smakowe i bazy do lodów włoskich",
				},
				{
					name: "Gospodarstwo Sad Brzeźnica",
					origin: "Małopolska",
					product: "Truskawki, wiśnie i aronia (sezonowo)",
				},
				{
					name: "Palarnia Vincento",
					origin: "Gliwice, Polska",
					product: "Świeżo palona mieszanka espresso dla napojów kawowych",
				},
				{
					name: "Wafelkarnia „Złota Wiosna”",
					origin: "Wielkopolska",
					product: "Rożki waflowe i rurki - produkowane na nasze zamówienie",
				},
			],
		},
		comparison: {
			intro:
				"Często słyszymy pytanie: „czym różnią się Wasze lody od tych z supermarketu”. Oto kilka rzeczy, które różnią nas od masowej produkcji - i dlaczego ma to znaczenie dla smaku.",
			points: [
				{
					us: "Mleko i śmietana od lokalnych dostawców, pasteryzowane u nas każdego dnia",
					them: "Mleko w proszku + woda + tłuszcz roślinny (olej palmowy / kokosowy)",
				},
				{
					us: "Pasty smakowe z prawdziwymi owocami lub kakaem (≥ 25% owoców w smakach owocowych)",
					them: "Aromaty syntetyczne, barwniki, „smak natura-identyczny”",
				},
				{
					us: "Wyłącznie naturalny stabilizator z mączki chleba świętojańskiego",
					them: "Guma guar, karagen, mono- i diglicerydy kwasów tłuszczowych",
				},
				{
					us: "Ekspedycja w -6 … -8 °C - aksamitna, lekka konsystencja",
					them: "Mrożenie w -18 °C i wielomiesięczne składowanie - twarde, „kamienne”",
				},
				{
					us: "Produkcja codziennie, każda partia zużywana tego samego dnia",
					them: "Produkcja „pod zapas”, termin przydatności 9–12 miesięcy",
				},
			],
		},
	},
	authority: {
		stats: [
			{
				label: "Od",
				value: "2006",
				caption: "1 czerwca - nasz dzień założenia",
			},
			{
				label: "Lokalizacji w Polsce",
				value: "6",
				caption: "Śląsk, Małopolska, Dolny Śląsk",
			},
			{
				label: "Lat tej samej receptury",
				value: "18",
				caption: "Bez kompromisów",
			},
			{
				label: "Zadowolonych gości",
				value: "150k+",
				caption: "Szacunek na bazie kart lojalnościowych",
			},
			{
				label: "Średnia ocena Google",
				value: "4.9",
				suffix: "/5",
				caption: "Z sześciu wizytówek",
			},
			{
				label: "Dostawców rzemieślniczych",
				value: "12",
				caption: "Z Polski i Włoch",
			},
		],
		press: [
			{
				publisher: "tuzory.pl",
				title:
					"Gdzie na kawę i coś słodkiego? Najlepsze kawiarnie i lodziarnie w Żorach [RANKING]",
				url: "https://www.tuzory.pl/wiadomosci,gdzie-na-kawe-i-cos-slodkiego-najlepsze-kawiarnie-i-lodziarnie-w-zorach-ranking,wia5-3266-27253.html",
				year: "2024",
			},
			{
				publisher: "tuzory.pl",
				title: "American Ice Dream – lody, które smakują od pokoleń",
				url: "https://www.tuzory.pl/wiadomosci,american-ice-dream-lody-ktore-smakuja-od-pokolen,wia5-3266-27310.html",
				year: "2024",
			},
		],
		awards: [
			{
				title: "Najlepsza lodziarnia w Żorach 2024",
				body: "Wyróżnienie redakcji TuZory.pl w rankingu najlepszych kawiarni i lodziarni w mieście.",
				year: "2024",
			},
			{
				title: "18 lat nieprzerwanej działalności",
				body: "W branży, w której średni czas przeżycia lokalu gastronomicznego to kilka lat - prowadzimy tę firmę od 2006 roku bez przerwy.",
				year: "2024",
			},
			{
				title: "Partnerzy wydarzeń lokalnych",
				body: "Od lat wspieramy wydarzenia rodzinne, imprezy szkolne i wydarzenia miejskie na Śląsku - jako partner gastronomiczny.",
				year: "2018 – dziś",
			},
		],
	},
	trust: {
		values: [
			{
				title: "Ludzie przede wszystkim",
				body: "Najcenniejszym kapitałem firmy są osoby, które ją tworzą. Dbamy o zespół - stabilne umowy, szkolenia, realne relacje.",
			},
			{
				title: "Transparentność receptury",
				body: "Na każde pytanie o skład odpowiadamy konkretnie - bez tłuszczów roślinnych, bez aromatów syntetycznych, bez mleka w proszku.",
			},
			{
				title: "Bezpieczeństwo żywności",
				body: "Wszystkie lokale działają zgodnie z systemem HACCP, pod bieżącym nadzorem Państwowej Inspekcji Sanitarnej.",
			},
			{
				title: "Lokalność w praktyce",
				body: "Większość dostawców to firmy rodzinne z województw śląskiego, małopolskiego i wielkopolskiego - z którymi współpracujemy od lat.",
			},
		],
		certificates: [
			{
				title: "System HACCP",
				body: "Każdy lokal prowadzony zgodnie z zasadami Analizy Zagrożeń i Krytycznych Punktów Kontroli - z bieżącą dokumentacją produkcji.",
				issuer: "Wewnętrzny system, audytowany przez PIS",
			},
			{
				title: "Bieżące kontrole Sanepidu",
				body: "Wszystkie lokalizacje są regularnie kontrolowane przez Państwową Inspekcję Sanitarną. Dokumenty dostępne do wglądu w punktach.",
				issuer: "Państwowa Inspekcja Sanitarna",
			},
			{
				title: "Audyt dostawców",
				body: "Raz w roku audytujemy kluczowych dostawców pod kątem jakości mleka, pochodzenia owoców i warunków transportu.",
				issuer: "Procedura wewnętrzna",
			},
		],
		team: [
			{
				name: "Agnieszka Socha",
				role: "Założycielka i właścicielka",
				photo: {
					src: "/logo.png",
					alt: "Agnieszka Socha, założycielka American Ice Dream",
					placeholder: true,
				},
			},
			{
				name: "Zespół produkcji",
				role: "Lodziarze i lodziarki",
				photo: {
					src: "/swiderki-w-kubkach.png",
					alt: "Zespół American Ice Dream przy maszynie do lodów włoskich",
					placeholder: true,
				},
				location: "Wszystkie 6 lokalizacji",
			},
			{
				name: "Zespół obsługi",
				role: "Lady lodowe i kelnerzy",
				photo: {
					src: "/lody-deser.png",
					alt: "Zespół obsługi American Ice Dream w lodziarniach",
					placeholder: true,
				},
				location: "Żory · Mikołów · Katowice · Bielsko-Biała · Wrocław",
			},
		],
		company: {
			legalName: "Agnieszka Socha American Ice Dream",
			tradeName: "American Ice Dream",
			taxId: "7532251479",
			regon: "240384109",
			headquarters: {
				street: "ul. Przemysłowa 4",
				postal: "44-240",
				city: "Żory",
				country: "Polska",
			},
			contact: {
				email: "hej@americanicedream.pl",
				phone: "+48 603 576 043",
				phones: ["+48 603 576 043", "+48 728 806 717"],
			},
			establishedOn: "2006-06-01",
		},
	},
};
