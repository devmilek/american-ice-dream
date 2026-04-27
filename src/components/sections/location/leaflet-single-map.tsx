"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import { LocalizationEntry } from "@/keystatic/location-collection";

type Props = {
	details: LocalizationEntry;
	zoom?: number;
};

export function LeafletSingleMap({ details, zoom = 15 }: Props) {
	const containerRef = useRef<HTMLDivElement>(null);
	const mapRef = useRef<L.Map | null>(null);

	useEffect(() => {
		if (!containerRef.current || mapRef.current) return;

		const lat = Number.parseFloat(details.address.coordinates.lat);
		const lng = Number.parseFloat(details.address.coordinates.lng);
		if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;

		const map = L.map(containerRef.current, {
			zoomControl: false,
			scrollWheelZoom: false,
			attributionControl: true,
			minZoom: 11,
			maxZoom: 18,
			zoomSnap: 0.5,
			center: [lat, lng],
			zoom,
		});
		mapRef.current = map;

		L.control.zoom({ position: "bottomright" }).addTo(map);

		L.tileLayer(
			"https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png",
			{
				attribution:
					'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
				maxZoom: 19,
				subdomains: "abcd",
			},
		).addTo(map);

		L.tileLayer(
			"https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png",
			{
				maxZoom: 19,
				subdomains: "abcd",
				pane: "shadowPane",
			},
		).addTo(map);

		const icon = L.divIcon({
			className: "aid-marker-wrap",
			html: `
        <div class="aid-marker">
          <span class="aid-marker__pulse"></span>
          <span class="aid-marker__dot"></span>
          <span class="aid-marker__label">${details.address.city} · ${details.address.venue}</span>
        </div>
      `,
			iconSize: [24, 24],
			iconAnchor: [12, 22],
		});

		const marker = L.marker([lat, lng], {
				icon,
				riseOnHover: true,
			},
		).addTo(map);

		const gmaps = `https://www.google.com/maps/dir/?api=1&destination=${lat}%2C${lng}`;

		marker
			.bindPopup(
				`
        <article class="aid-popup">
          <span class="aid-popup__venue">${details.address.venue}</span>
          <h4 class="aid-popup__city">${details.address.city}</h4>
          <p class="aid-popup__addr">${details.address.street}<br/>${details.address.postal}</p>
          <div class="aid-popup__hours">
            <span><strong>Pon – Sob</strong>${details.hours.weekdays}</span>
            <span><strong>Niedziele handlowe</strong>${details.hours.sunday}</span>
          </div>
          <a class="aid-popup__link" target="_blank" rel="noopener" href="${gmaps}">
            Wyznacz trasę
            <svg viewBox="0 0 24 24" aria-hidden="true" width="14" height="14"><path d="M5 12h14m-6-6l6 6l-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
          </a>
        </article>
        `,
				{
					className: "aid-popup-wrapper",
					closeButton: false,
					maxWidth: 280,
					minWidth: 240,
					offset: [0, -8],
				},
			)
			.openPopup();

		const handleResize = () => map.invalidateSize();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
			map.remove();
			mapRef.current = null;
		};
	}, [details, zoom]);

	return (
		<div
			ref={containerRef}
			className="aid-map h-full w-full"
			role="application"
			aria-label={`Mapa lokalizacji American Ice Dream ${details.address.city} ${details.address.venue}`}
		/>
	);
}
