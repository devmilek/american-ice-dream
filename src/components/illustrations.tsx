import type { SVGProps } from "react";

export function HeroCone(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 400 520" aria-hidden {...props}>
			<defs>
				<linearGradient id="swirlLight" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stopColor="#fff8e4" />
					<stop offset="100%" stopColor="#f1d98a" />
				</linearGradient>
				<linearGradient id="swirlDark" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stopColor="#6b3a1f" />
					<stop offset="100%" stopColor="#3b1e10" />
				</linearGradient>
				<linearGradient id="cone" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stopColor="#e7b870" />
					<stop offset="100%" stopColor="#a56e2b" />
				</linearGradient>
				<radialGradient id="shine" cx="30%" cy="30%" r="60%">
					<stop offset="0%" stopColor="#fff" stopOpacity="0.75" />
					<stop offset="100%" stopColor="#fff" stopOpacity="0" />
				</radialGradient>
			</defs>
			<ellipse
				cx="200"
				cy="498"
				rx="130"
				ry="14"
				fill="#0f2d5c"
				opacity="0.12"
			/>
			<g>
				<path
					d="M110 275 L200 490 L290 275 Z"
					fill="url(#cone)"
					stroke="#6b3a1f"
					strokeWidth="2"
				/>
				<g stroke="#6b3a1f" strokeWidth="1.2" fill="none" opacity="0.7">
					<path d="M128 300 L272 300" />
					<path d="M142 330 L258 330" />
					<path d="M156 360 L244 360" />
					<path d="M170 390 L230 390" />
					<path d="M184 420 L216 420" />
					<path d="M128 300 L200 490" opacity="0.35" />
					<path d="M272 300 L200 490" opacity="0.35" />
					<path d="M156 360 L244 300" opacity="0.25" />
					<path d="M244 360 L156 300" opacity="0.25" />
				</g>
			</g>
			<g>
				<ellipse cx="200" cy="278" rx="98" ry="30" fill="url(#swirlLight)" />
				<path
					d="M108 265 Q200 215 292 265 Q200 290 108 265Z"
					fill="url(#swirlDark)"
				/>
				<path
					d="M120 240 Q200 198 280 240 Q200 262 120 240Z"
					fill="url(#swirlLight)"
				/>
				<path
					d="M132 215 Q200 180 268 215 Q200 234 132 215Z"
					fill="url(#swirlDark)"
				/>
				<path
					d="M144 190 Q200 160 256 190 Q200 206 144 190Z"
					fill="url(#swirlLight)"
				/>
				<path
					d="M154 165 Q200 140 246 165 Q200 178 154 165Z"
					fill="url(#swirlDark)"
				/>
				<path
					d="M164 140 Q200 120 236 140 Q200 150 164 140Z"
					fill="url(#swirlLight)"
				/>
				<path
					d="M178 118 Q200 92 222 118 Q200 126 178 118Z"
					fill="url(#swirlDark)"
				/>
				<path
					d="M188 100 Q200 80 212 100 Q200 108 188 100Z"
					fill="url(#swirlLight)"
				/>
				<circle
					cx="200"
					cy="80"
					r="6"
					fill="#f1d98a"
					stroke="#6b3a1f"
					strokeWidth="1"
				/>
				<ellipse cx="160" cy="220" rx="36" ry="60" fill="url(#shine)" />
			</g>
			<g className="[&>*]:origin-center">
				<rect
					x="60"
					y="180"
					width="14"
					height="4"
					rx="2"
					fill="#3cb6e3"
					transform="rotate(-20 67 182)"
				/>
				<rect
					x="340"
					y="210"
					width="14"
					height="4"
					rx="2"
					fill="#c19a5b"
					transform="rotate(30 347 212)"
				/>
				<rect
					x="80"
					y="330"
					width="12"
					height="4"
					rx="2"
					fill="#0f2d5c"
					transform="rotate(40 86 332)"
				/>
				<rect
					x="330"
					y="320"
					width="12"
					height="4"
					rx="2"
					fill="#e06b6b"
					transform="rotate(-30 336 322)"
				/>
				<circle cx="70" cy="260" r="3" fill="#c19a5b" />
				<circle cx="340" cy="140" r="3" fill="#3cb6e3" />
				<circle cx="50" cy="400" r="3" fill="#0f2d5c" />
			</g>
		</svg>
	);
}

export function ItalianCone(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 200 260" aria-hidden {...props}>
			<defs>
				<linearGradient id="pIceL" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stopColor="#fff" />
					<stop offset="100%" stopColor="#f1d98a" />
				</linearGradient>
			</defs>
			<path
				d="M60 130 L100 250 L140 130 Z"
				fill="#a56e2b"
				stroke="#6b3a1f"
				strokeWidth="1.5"
			/>
			<g stroke="#6b3a1f" strokeWidth="1" fill="none" opacity="0.7">
				<path d="M72 150L128 150" />
				<path d="M80 175L120 175" />
				<path d="M88 200L112 200" />
			</g>
			<path
				d="M40 130 Q100 60 160 130 Q100 150 40 130Z"
				fill="url(#pIceL)"
				stroke="#d6b660"
				strokeWidth="1"
			/>
			<path
				d="M50 110 Q100 50 150 110 Q100 128 50 110Z"
				fill="url(#pIceL)"
				stroke="#d6b660"
				strokeWidth="1"
			/>
			<path
				d="M60 90 Q100 40 140 90 Q100 106 60 90Z"
				fill="url(#pIceL)"
				stroke="#d6b660"
				strokeWidth="1"
			/>
			<path
				d="M70 70 Q100 35 130 70 Q100 82 70 70Z"
				fill="url(#pIceL)"
				stroke="#d6b660"
				strokeWidth="1"
			/>
			<path
				d="M80 52 Q100 30 120 52 Q100 62 80 52Z"
				fill="url(#pIceL)"
				stroke="#d6b660"
				strokeWidth="1"
			/>
			<circle cx="100" cy="36" r="4" fill="#f1d98a" stroke="#6b3a1f" />
		</svg>
	);
}

export function SoftServe(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 160 220" aria-hidden {...props}>
			<path
				d="M50 110 L80 210 L110 110 Z"
				fill="#a56e2b"
				stroke="#6b3a1f"
				strokeWidth="1.5"
			/>
			<g stroke="#6b3a1f" strokeWidth="1" fill="none" opacity="0.6">
				<path d="M60 130L100 130" />
				<path d="M66 150L94 150" />
				<path d="M72 170L88 170" />
			</g>
			<path
				d="M50 110 Q100 96 110 110 Q60 90 50 100 Q110 80 110 96 Q50 70 50 86 Q110 60 110 76 Q50 50 50 66 Q110 40 110 56 Q50 30 65 46 Q100 20 95 38 Q80 8 80 30"
				fill="#fff6dd"
				stroke="#d6b660"
				strokeWidth="1.5"
			/>
			<circle cx="80" cy="12" r="4" fill="#fff6dd" stroke="#d6b660" />
		</svg>
	);
}

export function Sundae(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 180 220" aria-hidden {...props}>
			<path
				d="M35 85 L145 85 L120 200 L60 200 Z"
				fill="#fdfaf2"
				stroke="#0f2d5c"
				strokeWidth="1.5"
			/>
			<rect x="74" y="200" width="32" height="8" fill="#0f2d5c" />
			<rect x="60" y="208" width="60" height="6" fill="#c19a5b" />
			<circle
				cx="70"
				cy="70"
				r="22"
				fill="#f7c7c7"
				stroke="#0f2d5c"
				strokeWidth="1"
			/>
			<circle
				cx="108"
				cy="65"
				r="24"
				fill="#9ad2b6"
				stroke="#0f2d5c"
				strokeWidth="1"
			/>
			<circle
				cx="90"
				cy="50"
				r="20"
				fill="#f1d98a"
				stroke="#0f2d5c"
				strokeWidth="1"
			/>
			<rect
				x="120"
				y="28"
				width="6"
				height="38"
				rx="1"
				fill="#a56e2b"
				transform="rotate(20 123 47)"
			/>
			<path
				d="M55 85 Q60 100 52 110 Q45 120 55 128"
				fill="none"
				stroke="#c03b3b"
				strokeWidth="3"
				strokeLinecap="round"
			/>
		</svg>
	);
}

export function Granita(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 160 220" aria-hidden {...props}>
			<path
				d="M30 40 L130 40 L115 200 L45 200 Z"
				fill="#fee3e3"
				stroke="#0f2d5c"
				strokeWidth="1.5"
			/>
			<g fill="#fff" opacity="0.8">
				<polygon points="50,70 56,64 60,72" />
				<polygon points="70,85 80,78 82,90" />
				<polygon points="95,68 102,62 106,74" />
				<polygon points="65,110 72,104 78,115" />
				<polygon points="90,125 98,118 102,130" />
				<polygon points="55,145 62,138 68,150" />
				<polygon points="95,160 102,153 108,165" />
				<polygon points="70,180 76,172 82,184" />
			</g>
			<rect
				x="86"
				y="20"
				width="6"
				height="70"
				fill="#3cb6e3"
				transform="rotate(12 89 55)"
			/>
			<rect
				x="86"
				y="20"
				width="6"
				height="16"
				fill="#0f2d5c"
				transform="rotate(12 89 28)"
			/>
			<path
				d="M110 44 q8 -4 14 2 q0 10 -10 14 q-10 -4 -4 -16z"
				fill="#c03b3b"
			/>
			<path
				d="M110 44 q2 -6 10 -8"
				fill="none"
				stroke="#2a8b55"
				strokeWidth="2"
			/>
		</svg>
	);
}

export function CreamRoll(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 200 160" aria-hidden {...props}>
			<path
				d="M20 80 L180 40"
				stroke="#a56e2b"
				strokeWidth="38"
				strokeLinecap="round"
			/>
			<path
				d="M30 78 L170 44"
				stroke="#7e4f1b"
				strokeWidth="2"
				strokeLinecap="round"
				opacity="0.5"
				strokeDasharray="2 6"
			/>
			<circle
				cx="178"
				cy="42"
				r="22"
				fill="#fffaf0"
				stroke="#d6b660"
				strokeWidth="1.2"
			/>
			<circle
				cx="186"
				cy="30"
				r="14"
				fill="#fffaf0"
				stroke="#d6b660"
				strokeWidth="1.2"
			/>
			<circle
				cx="172"
				cy="26"
				r="12"
				fill="#fffaf0"
				stroke="#d6b660"
				strokeWidth="1.2"
			/>
			<circle
				cx="194"
				cy="16"
				r="9"
				fill="#fffaf0"
				stroke="#d6b660"
				strokeWidth="1.2"
			/>
			<circle cx="194" cy="8" r="5" fill="#c03b3b" />
			<path
				d="M194 3 q6 -8 12 -6"
				stroke="#2a8b55"
				strokeWidth="2"
				fill="none"
			/>
		</svg>
	);
}

export function CoffeeCup(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 180 200" aria-hidden {...props}>
			<path
				d="M30 70 L140 70 L128 180 L42 180 Z"
				fill="#fdfaf2"
				stroke="#0f2d5c"
				strokeWidth="1.5"
			/>
			<path
				d="M140 80 q28 6 24 34 q-2 22 -30 26"
				fill="none"
				stroke="#0f2d5c"
				strokeWidth="3"
			/>
			<ellipse cx="85" cy="72" rx="55" ry="7" fill="#6b3a1f" />
			<path
				d="M85 72 q-10 -6 -10 0 q0 6 10 10 q10 -4 10 -10 q0 -6 -10 0z"
				fill="#fffaf0"
			/>
			<g
				stroke="#0f2d5c"
				strokeWidth="2"
				fill="none"
				strokeLinecap="round"
				opacity="0.4"
			>
				<path d="M60 40 q6 -8 0 -16" />
				<path d="M85 40 q6 -8 0 -16" />
				<path d="M110 40 q6 -8 0 -16" />
			</g>
		</svg>
	);
}

export function YearStamp(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 220 220" aria-hidden {...props}>
			<defs>
				{/* górny łuk: lewo → prawo (tekst „stoi” na obwodzie od zewnątrz) */}
				<path id="arcTop" d="M 30 110 a 80 80 0 0 1 160 0" fill="none" />
				{/* dolny łuk: prawo → lewo, aby tekst też był czytelny z zewnątrz
            (bez tej zmiany tekst był odwrócony w dolnej połowie) */}
				<path id="arcBottom" d="M 190 110 a 80 80 0 0 1 -160 0" fill="none" />
			</defs>
			<circle
				cx="110"
				cy="110"
				r="104"
				fill="none"
				stroke="#c19a5b"
				strokeWidth="1.5"
				strokeDasharray="2 6"
			/>
			<circle
				cx="110"
				cy="110"
				r="90"
				fill="none"
				stroke="#c19a5b"
				strokeWidth="1"
			/>
			<text
				fontFamily="var(--font-manrope)"
				fontSize="9"
				letterSpacing="4"
				fill="#0f2d5c"
				fontWeight="600"
			>
				<textPath href="#arcTop" startOffset="50%" textAnchor="middle">
					AMERICAN ICE DREAM
				</textPath>
			</text>
			<text
				fontFamily="var(--font-manrope)"
				fontSize="9"
				letterSpacing="3"
				fill="#0f2d5c"
				fontWeight="600"
			>
				<textPath href="#arcBottom" startOffset="50%" textAnchor="middle">
					RZEMIOSŁO · TRADYCJA · SMAK
				</textPath>
			</text>
			{/* drobne „kropki" dekoracyjne po bokach, między tekstem górnym i dolnym */}
			<g fill="#c19a5b">
				<circle cx="24" cy="110" r="2" />
				<circle cx="196" cy="110" r="2" />
			</g>
			<text
				x="110"
				y="120"
				textAnchor="middle"
				fontFamily="var(--font-fraunces)"
				fontSize="48"
				fontWeight="700"
				fill="#0f2d5c"
			>
				2006
			</text>
			<text
				x="110"
				y="140"
				textAnchor="middle"
				fontFamily="var(--font-caveat)"
				fontSize="18"
				fill="#3cb6e3"
			>
				est.
			</text>
		</svg>
	);
}

export function LoyaltyCard(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 300 300" aria-hidden {...props}>
			<g transform="rotate(-8 150 150)">
				<rect
					x="40"
					y="60"
					width="220"
					height="130"
					rx="16"
					fill="#fbf6ec"
					stroke="#c19a5b"
					strokeWidth="2"
				/>
				<text
					x="60"
					y="98"
					fontFamily="var(--font-fraunces)"
					fontSize="22"
					fill="#0f2d5c"
					fontWeight="700"
				>
					LODOJADY
				</text>
				<text
					x="60"
					y="118"
					fontFamily="var(--font-caveat)"
					fontSize="16"
					fill="#3cb6e3"
				>
					karta stałego klienta
				</text>
				<g transform="translate(56 140)">
					<circle r="10" fill="#c19a5b" />
					<circle cx="26" r="10" fill="#c19a5b" />
					<circle cx="52" r="10" fill="#c19a5b" />
					<circle cx="78" r="10" fill="#c19a5b" />
					<circle
						cx="104"
						r="10"
						fill="#fbf6ec"
						stroke="#c19a5b"
						strokeWidth="2"
					/>
					<circle
						cx="130"
						r="10"
						fill="#fbf6ec"
						stroke="#c19a5b"
						strokeWidth="2"
					/>
					<circle
						cx="156"
						r="10"
						fill="#fbf6ec"
						stroke="#c19a5b"
						strokeWidth="2"
					/>
				</g>
			</g>
			<g transform="translate(195 30) rotate(15)">
				<path
					d="M0 40 L20 100 L40 40 Z"
					fill="#a56e2b"
					stroke="#6b3a1f"
					strokeWidth="1.5"
				/>
				<ellipse
					cx="20"
					cy="40"
					rx="26"
					ry="10"
					fill="#fff4c4"
					stroke="#d6b660"
				/>
				<path
					d="M-4 38 Q20 20 44 38 Q20 30 -4 38Z"
					fill="#fff4c4"
					stroke="#d6b660"
				/>
				<path
					d="M4 26 Q20 12 36 26 Q20 22 4 26Z"
					fill="#fff4c4"
					stroke="#d6b660"
				/>
				<circle cx="20" cy="14" r="4" fill="#fff4c4" stroke="#6b3a1f" />
			</g>
		</svg>
	);
}

export function GoldScribble(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 600 600" aria-hidden {...props}>
			<defs>
				<filter id="wiggle">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.02"
						numOctaves="2"
					/>
					<feDisplacementMap in="SourceGraphic" scale="3" />
				</filter>
			</defs>
			<circle
				cx="300"
				cy="300"
				r="270"
				fill="none"
				stroke="#c19a5b"
				strokeWidth="2.5"
				strokeDasharray="4 10"
				filter="url(#wiggle)"
			/>
			<circle
				cx="300"
				cy="300"
				r="250"
				fill="none"
				stroke="#c19a5b"
				strokeWidth="1.2"
				opacity="0.55"
			/>
		</svg>
	);
}

export function SocialScribble(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 120 40" aria-hidden {...props}>
			<path
				d="M4 20 Q30 -4 60 20 T116 20"
				fill="none"
				stroke="#c19a5b"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeDasharray="2 6"
			/>
		</svg>
	);
}

export function MapMock(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox="0 0 1200 520"
			preserveAspectRatio="xMidYMid slice"
			aria-hidden
			{...props}
		>
			<defs>
				<pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
					<path d="M40 0H0V40" fill="none" stroke="#dfe8f2" strokeWidth="1" />
				</pattern>
				<linearGradient id="mapBg" x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stopColor="#eef4fb" />
					<stop offset="100%" stopColor="#dde7f3" />
				</linearGradient>
			</defs>
			<rect width="1200" height="520" fill="url(#mapBg)" />
			<rect width="1200" height="520" fill="url(#grid)" />
			<path
				d="M0 320 Q200 260 400 300 T800 280 T1200 340"
				fill="none"
				stroke="#b8d4ee"
				strokeWidth="22"
				strokeLinecap="round"
			/>
			<path
				d="M0 180 Q300 200 600 170 T1200 200"
				fill="none"
				stroke="#fff"
				strokeWidth="6"
			/>
			<path
				d="M200 0 Q230 260 160 520"
				fill="none"
				stroke="#fff"
				strokeWidth="4"
			/>
			<path
				d="M820 0 Q780 240 860 520"
				fill="none"
				stroke="#fff"
				strokeWidth="4"
			/>
			<ellipse cx="350" cy="420" rx="90" ry="40" fill="#d5e7c8" opacity="0.9" />
			<ellipse
				cx="980"
				cy="120"
				rx="120"
				ry="50"
				fill="#d5e7c8"
				opacity="0.9"
			/>
		</svg>
	);
}

export function FeatureIconSweets(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 64 64" aria-hidden {...props}>
			<path
				d="M32 6c-9 0-14 8-14 14c0 7 5 10 5 15v11a6 6 0 0 0 6 6h6a6 6 0 0 0 6-6V35c0-5 5-8 5-15c0-6-5-14-14-14Z"
				fill="#fdfaf2"
				stroke="#0f2d5c"
				strokeWidth="2"
			/>
			<path
				d="M26 46h12M26 50h12"
				stroke="#c19a5b"
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	);
}

export function FeatureIconNature(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 64 64" aria-hidden {...props}>
			<path
				d="M32 4c-14 10-14 26-6 34s20 6 22-6c2-14-6-20-16-28Z"
				fill="#fdfaf2"
				stroke="#0f2d5c"
				strokeWidth="2"
			/>
			<path
				d="M32 20c-6 4-8 12-4 18"
				fill="none"
				stroke="#c19a5b"
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	);
}

export function FeatureIconHeritage(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 64 64" aria-hidden {...props}>
			<circle
				cx="32"
				cy="32"
				r="24"
				fill="#fdfaf2"
				stroke="#0f2d5c"
				strokeWidth="2"
			/>
			<path
				d="M32 18v14l10 6"
				stroke="#c19a5b"
				strokeWidth="2.4"
				strokeLinecap="round"
				fill="none"
			/>
			<path
				d="M20 12l4 4M44 12l-4 4"
				stroke="#0f2d5c"
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	);
}
