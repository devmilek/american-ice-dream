import type { Metadata } from "next";
import { Fraunces, Manrope, Caveat } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
	variable: "--font-fraunces",
	subsets: ["latin", "latin-ext"],
	weight: ["400", "500", "600", "700"],
	style: ["normal", "italic"],
	display: "swap",
});

const manrope = Manrope({
	variable: "--font-manrope",
	subsets: ["latin", "latin-ext"],
	weight: ["300", "400", "500", "600", "700"],
	display: "swap",
});

const caveat = Caveat({
	variable: "--font-caveat",
	subsets: ["latin", "latin-ext"],
	weight: ["400", "600", "700"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "American Ice Dream - Rzemieślnicza lodziarnia od 2006",
	description:
		"Rzemieślnicze lody włoskie, świderki, desery, rurki z bitą śmietaną i granity. Stała receptura od 2006 roku. Odwiedź jedną z naszych sześciu lodziarni na Śląsku.",
	metadataBase: new URL("https://americanicedream.pl"),
	openGraph: {
		title: "American Ice Dream - Rzemieślnicza lodziarnia",
		description:
			"Aksamitne lody włoskie, kremowe świderki, desery i granity. Od 2006 roku.",
		type: "website",
		locale: "pl_PL",
	},
	icons: {
		icon: "/logo.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="pl"
			className={`${fraunces.variable} ${manrope.variable} ${caveat.variable} h-full antialiased`}
		>
			<body className="flex min-h-full flex-col bg-cream text-ink font-sans">
				<div className="grain-overlay" aria-hidden />
				{children}
			</body>
		</html>
	);
}
