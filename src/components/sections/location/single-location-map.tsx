"use client";

import dynamic from "next/dynamic";
import type { Location } from "@/lib/data/locations";
import { LocalizationEntry } from "@/keystatic/location-collection";

const LeafletSingleMap = dynamic(
	() => import("./leaflet-single-map").then((m) => m.LeafletSingleMap),
	{
		ssr: false,
		loading: () => <MapSkeleton />,
	},
);

export function SingleLocationMap({
	details,
	zoom,
}: {
	details: LocalizationEntry;
	zoom?: number;
}) {
	return <LeafletSingleMap details={details} zoom={zoom} />;
}

function MapSkeleton() {
	return (
		<div className="flex h-full w-full items-center justify-center bg-[#eee4d1] text-sm text-navy/50">
			<span className="inline-flex items-center gap-2">
				<span
					className="h-2 w-2 rounded-full bg-gold"
					style={{ animation: "var(--animate-pulse-dot)" }}
				/>
				Ładuję mapę…
			</span>
		</div>
	);
}
