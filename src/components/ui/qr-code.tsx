import QRCode from "qrcode";

type Props = {
	/** URL / tekst enkodowany w QR kodzie. */
	value: string;
	/** Rozmiar w pikselach (kwadrat). Domyślnie 220. */
	size?: number;
	/** Kolor modułów („ciemny"). Domyślnie navy z naszej palety. */
	fg?: string;
	/** Kolor tła. Domyślnie paper (kremowy). */
	bg?: string;
	/** Poziom korekcji błędów (Low / Medium / Quartile / High). */
	level?: "L" | "M" | "Q" | "H";
	/**
	 * Margines jednostkowy QR (w modułach) - 0 oznacza brak marginesu wokół kodu,
	 * padding zapewnia sam komponent rodzica. Domyślnie 0.
	 */
	margin?: number;
	/** Dostępny opis dla czytników ekranu. */
	title?: string;
	className?: string;
};

/**
 * Statycznie generowany kod QR (SVG). Używa biblioteki `qrcode` do wygenerowania
 * macierzy i zwraca inline SVG - dzięki temu działa w pełni server-side, nie
 * generuje runtime'owych zapytań do CDN i jest ostry w każdej rozdzielczości.
 */
export async function QrCode({
	value,
	size = 220,
	fg = "#0f2d5c",
	bg = "#fdfaf2",
	level = "M",
	margin = 0,
	title,
	className,
}: Props) {
	const matrix = QRCode.create(value, { errorCorrectionLevel: level });
	const modules = matrix.modules.size;
	const data = matrix.modules.data as Uint8Array;

	const cells: string[] = [];
	for (let y = 0; y < modules; y++) {
		for (let x = 0; x < modules; x++) {
			if (data[y * modules + x]) {
				cells.push(`M${x + margin} ${y + margin}h1v1H${x + margin}z`);
			}
		}
	}
	const view = modules + margin * 2;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={`0 0 ${view} ${view}`}
			width={size}
			height={size}
			shapeRendering="crispEdges"
			role={title ? "img" : undefined}
			aria-hidden={title ? undefined : true}
			aria-label={title}
			className={className}
		>
			{title ? <title>{title}</title> : null}
			<rect width={view} height={view} fill={bg} />
			<path d={cells.join("")} fill={fg} />
		</svg>
	);
}
