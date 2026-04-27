export type Faq = {
	id: string;
	question: string;
	answer: React.ReactNode;
};

export const faqs: Faq[] = [
	{
		id: "bez-laktozy",
		question: "Czy oferujecie lody bez laktozy?",
		answer:
			"Tak - codziennie mamy w karcie co najmniej 3 smaki bez laktozy, w tym sorbety owocowe i jeden kremowy smak na bazie mleka kokosowego lub migdałowego. Wszystkie alergeny są wyraźnie oznaczone w witrynie.",
	},
	{
		id: "catering",
		question: "Czy można u Was zamówić catering lub tort lodowy?",
		answer:
			"Oczywiście. Obsługujemy śluby, urodziny i eventy firmowe - dostarczamy mobilną wyspę z maszyną do lodów włoskich. Na tort lodowy wystarczy 48 godzin; pełna oferta znajduje się na podstronie /catering.",
	},
	{
		id: "codziennie",
		question: "Czy lody są produkowane codziennie?",
		answer:
			"Tak, każdą gałkę kręcimy codziennie rano w naszej lodziarni ze świeżych składników. Nie przechowujemy lodów dłużej niż jeden dzień - to dlatego są tak kremowe.",
	},
	{
		id: "dostawa",
		question: "Czy mogę zamówić dostawę?",
		answer:
			"Tak, dostarczamy lody w specjalnych opakowaniach termicznych przez Uber Eats, Glovo i Wolt. Sprawdź dostępność w swoim mieście w aplikacji.",
	},
	{
		id: "pieski",
		question: "Czy zwierzęta są mile widziane?",
		answer:
			"Jak najbardziej - w każdej lokalizacji czekają miski z wodą dla psów, a na życzenie dostaniesz małą porcję lodów naturalnych dla swojego pupila.",
	},
	{
		id: "karty-podarunkowe",
		question: "Czy macie karty podarunkowe?",
		answer:
			"Tak - karty podarunkowe dostępne są w lodziarniach (plastikowe) lub w wersji elektronicznej na stronie. Wartości od 30 zł do 300 zł, ważne 12 miesięcy.",
	},
];
