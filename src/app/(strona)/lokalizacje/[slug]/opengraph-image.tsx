import { env } from "@/env";
import { keystaticReader } from "@/lib/keystatic/reader";
import { white } from "next/dist/lib/picocolors";
import { ImageResponse } from "next/og";
// import { getPost } from "@/app/lib/data";
export const runtime = "nodejs";
// Image metadata
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const data = await keystaticReader.collections.lokalizacje.readOrThrow(slug);

	return new ImageResponse(
		// ImageResponse JSX element
		<div style={{ display: "flex", width: size.width, height: size.height }}>
			<img
				src={env.NEXT_PUBLIC_SITE_URL + data.hero.image.src}
				style={{
					width: "100%",
					height: "100%",
					objectFit: "cover",
					display: "block",
				}}
				alt="Logo"
			/>
			<img
				src={env.NEXT_PUBLIC_SITE_URL + "/logo.png"}
				alt="Logo"
				style={{
					width: "200px",
					objectFit: "cover",
					display: "block",
					position: "absolute",
					left: 30,
					bottom: 30,
				}}
			/>
			<div
				style={{
					position: "absolute",
					display: "flex",
					backgroundColor: "white",
					left: "130px",
					bottom: "30px",
				}}
			>
				<h1 style={{ fontSize: 24, fontWeight: 700, color: "#0F2D5C" }}>
					{data.locationName}
				</h1>
			</div>
		</div>,
		{ ...size },
	);
}
