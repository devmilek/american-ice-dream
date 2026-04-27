import type { SVGProps } from "react";

export function Pin(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden {...props}>
			<path
				fill="currentColor"
				d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7m0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5"
			/>
		</svg>
	);
}

export function Clock(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden {...props}>
			<path
				fill="currentColor"
				d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8m.5-13H11v6l5.2 3.1l.8-1.3l-4.5-2.7Z"
			/>
		</svg>
	);
}

export function Star(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden {...props}>
			<path
				fill="currentColor"
				d="m12 17.3l-6.2 3.7l1.6-7.1L2 9.2l7.2-.6L12 2l2.8 6.6l7.2.6l-5.4 4.7l1.6 7.1z"
			/>
		</svg>
	);
}

export function TikTok(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden {...props}>
			<path
				fill="currentColor"
				d="M19.6 6.3a5.3 5.3 0 0 1-3.3-1.2a5.3 5.3 0 0 1-1.9-3.1H10.9v13.1a2.9 2.9 0 1 1-2-2.8V8.1a5.9 5.9 0 1 0 4.9 5.8V9.6a8.2 8.2 0 0 0 5.8 2V6.3Z"
			/>
		</svg>
	);
}

export function Instagram(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden {...props}>
			<path
				fill="currentColor"
				d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7m10.5 1.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2M12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6"
			/>
		</svg>
	);
}

export function Facebook(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden {...props}>
			<path
				fill="currentColor"
				d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.2-1.5 1.6-1.5h1.6V4.3a22 22 0 0 0-2.4-.1c-2.4 0-4 1.4-4 4.1v2.5H7.6V14h2.7v8z"
			/>
		</svg>
	);
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
			<path
				d="M4 7h16M4 12h16M4 17h16"
				stroke="currentColor"
				strokeWidth="1.8"
				strokeLinecap="round"
			/>
		</svg>
	);
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
			<path
				d="M6 6l12 12M18 6L6 18"
				stroke="currentColor"
				strokeWidth="1.8"
				strokeLinecap="round"
			/>
		</svg>
	);
}

export function FiveStars({ className }: { className?: string }) {
	return (
		<div className={className} aria-label="5 na 5">
			{[0, 1, 2, 3, 4].map((i) => (
				<Star key={i} className="h-4 w-4 fill-gold text-gold" />
			))}
		</div>
	);
}
