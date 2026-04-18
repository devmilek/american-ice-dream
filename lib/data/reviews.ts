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
    author: "Agnieszka G.",
    initials: "AG",
    city: "Katowice",
    timeAgo: "2 dni temu",
    quote:
      "Najlepsze lody włoskie jakie jadłam w życiu — kremowe, prawdziwie waniliowe, z wyraźną nutą mleka. Wracamy z całą rodziną co weekend.",
    avatarTone: "a",
  },
  {
    id: "r2",
    author: "Michał K.",
    initials: "MK",
    city: "Gliwice",
    timeAgo: "5 dni temu",
    quote:
      "Rurki z bitą śmietaną jak u babci. Smak dzieciństwa, który od lat trzyma poziom. Obsługa sympatyczna, kolejka idzie szybko mimo tłumu.",
    avatarTone: "b",
  },
  {
    id: "r3",
    author: "Patrycja K.",
    initials: "PK",
    city: "Tychy",
    timeAgo: "1 tydzień temu",
    quote:
      "Granit truskawkowy w 35-stopniowy dzień to było objawienie. Dzieciaki zachwycone, a ja się cieszę, że bez syropów i sztuczności.",
    avatarTone: "c",
  },
];
