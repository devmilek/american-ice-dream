export type Location = {
  id: string;
  city: string;
  venue: string;
  address: string;
  postal: string;
  lat: number;
  lng: number;
  description?: string;
  hours: {
    weekdays: string;
    sunday: string;
  };
};

/**
 * Prawdziwe lokalizacje American Ice Dream.
 * Współrzędne dobrane z przybliżeniem ulic/centrów handlowych — dla produkcji warto
 * przepuścić adresy przez geokoder (Nominatim / Mapbox / Google Geocoding).
 */
export const locations: Location[] = [
  {
    id: "katowice-auchan",
    city: "Katowice",
    venue: "Auchan",
    address: "Trasa Nikodema i Józefa Renców 30",
    postal: "40-878 Katowice",
    lat: 50.2582,
    lng: 19.001,
    description:
      "Wyjątkowe desery i orzeźwiające granity, które podbiją Twoje podniebienie.",
    hours: {
      weekdays: "9:00 – 21:00",
      sunday: "9:30 – 19:00",
    },
  },
  {
    id: "bielsko-auchan",
    city: "Bielsko-Biała",
    venue: "Auchan",
    address: "ul. Bohaterów Monte Cassino 421",
    postal: "43-382 Bielsko-Biała",
    lat: 49.7906,
    lng: 19.0436,
    description:
      "Nasza duma — serwujemy najwyższą jakość w Bielsku-Białej już od 18 lat.",
    hours: {
      weekdays: "9:00 – 21:00",
      sunday: "9:30 – 20:00",
    },
  },
  {
    id: "zory-wislanka",
    city: "Żory",
    venue: "Galeria Wiślanka",
    address: "ul. Katowicka 10",
    postal: "44-240 Żory",
    lat: 50.0513,
    lng: 18.6943,
    description:
      "Specjalność: chrupiące rurki z bitą śmietaną i najdelikatniejsze lody.",
    hours: {
      weekdays: "9:00 – 21:00",
      sunday: "12:00 – 20:00",
    },
  },
  {
    id: "zory-auchan",
    city: "Żory",
    venue: "Auchan",
    address: "ul. Francuska 11",
    postal: "44-240 Żory",
    lat: 50.0447,
    lng: 18.7079,
    hours: {
      weekdays: "9:00 – 21:00",
      sunday: "9:30 – 20:00",
    },
  },
  {
    id: "mikolow-auchan",
    city: "Mikołów",
    venue: "Auchan",
    address: "ul. Gliwicka 3",
    postal: "43-190 Mikołów",
    lat: 50.1769,
    lng: 18.8981,
    description:
      "Poczuj smak wyjątkowych specjałów w miejscu, gdzie tradycja łączy się z jakością.",
    hours: {
      weekdays: "9:00 – 21:00",
      sunday: "9:30 – 19:30",
    },
  },
  {
    id: "wroclaw-bielany",
    city: "Wrocław",
    venue: "Aleja Bielany",
    address: "ul. Czekoladowa 7/9",
    postal: "55-040 Bielany Wrocławskie",
    lat: 51.0146,
    lng: 16.9931,
    description:
      "Idealny przystanek na słodką chwilę podczas zakupów z rodziną i przyjaciółmi.",
    hours: {
      weekdays: "10:00 – 21:00",
      sunday: "10:00 – 20:00",
    },
  },
];
