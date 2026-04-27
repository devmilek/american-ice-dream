export type Review = {
	id: string;
	author: string;
	initials: string;
	city: string;
	timeAgo: string;
	quote: string;
	avatarTone: "a" | "b" | "c";
};

export const reviews: Review[] = [
	{
		id: "r1",
		author: "Katarzyna B.",
		initials: "KB",
		city: "Bielsko",
		timeAgo: "2 dni temu",
		quote:
			"Polecam to miejsce! 🍦 Lody są naprawdę przepyszne. Obsługa zawsze uśmiechnięta i pomocna, a cała atmosfera sprawia, że chce się wracać 🥰",
		avatarTone: "a",
	},
	{
		id: "r2",
		author: "Żaneta B.",
		initials: "ZB",
		city: "Żory Wiślanka",
		timeAgo: "5 dni temu",
		quote:
			"Pyszne lody, polecam!!! Obsługa również na wysokim poziomie, zawsze miła i uśmiechnięta ❤️",
		avatarTone: "b",
	},
	{
		id: "r3",
		author: "Barbara K.",
		initials: "BK",
		city: "Żory Wiślanka",
		timeAgo: "1 tydzień temu",
		quote:
			"Super, bardzo polecam bardzo ale to bardzo miła obsługa, przepyszne lody,granita z całego serca polecam 😘…",
		avatarTone: "c",
	},
];
