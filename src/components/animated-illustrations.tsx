import {
	motion,
	type SVGMotionProps,
	useScroll,
	useTransform,
} from "motion/react";

interface YearStampProps extends SVGMotionProps<SVGSVGElement> {
	targetRef: React.RefObject<HTMLElement | null>;
}

export function YearStamp({ targetRef, ...props }: YearStampProps) {
	// 1. Śledzimy postęp scrollowania wewnątrz przekazanej sekcji
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});

	// 2. Mapujemy postęp (0 do 1) na obrót (np. 0 do 360 stopni)
	// Możesz zmienić 360 na 720, jeśli ma się kręcić szybciej
	const rotate = useTransform(scrollYProgress, [0, 1], [-60, 60]);

	return (
		<motion.svg
			viewBox="0 0 220 220"
			aria-hidden
			style={{ rotate }} // To sprawia, że SVG się obraca
			{...props}
		>
			<defs>
				<path id="arcTop" d="M 30 110 a 80 80 0 0 1 160 0" fill="none" />
				<path id="arcBottom" d="M 190 110 a 80 80 0 0 1 -160 0" fill="none" />
			</defs>

			{/* ... reszta Twoich elementów SVG ... */}
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
		</motion.svg>
	);
}
