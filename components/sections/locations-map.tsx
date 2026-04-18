"use client";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(
  () => import("./leaflet-map").then((m) => m.LeafletMap),
  {
    ssr: false,
    loading: () => <MapSkeleton />,
  },
);

export function LocationsMap() {
  return <LeafletMap />;
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
