"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import { locations } from "@/lib/data/locations";

export function LeafletMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      zoomControl: false,
      scrollWheelZoom: false,
      attributionControl: true,
      minZoom: 6,
      maxZoom: 16,
      zoomSnap: 0.5,
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

    const bounds = L.latLngBounds([]);

    const makeIcon = (city: string) =>
      L.divIcon({
        className: "aid-marker-wrap",
        html: `
          <div class="aid-marker">
            <span class="aid-marker__pulse"></span>
            <span class="aid-marker__dot"></span>
            <span class="aid-marker__label">${city}</span>
          </div>
        `,
        iconSize: [24, 24],
        iconAnchor: [12, 22],
      });

    locations.forEach((loc) => {
      const marker = L.marker([loc.lat, loc.lng], {
        icon: makeIcon(loc.city),
        riseOnHover: true,
      }).addTo(map);

      const gmaps = `https://www.google.com/maps/dir/?api=1&destination=${loc.lat}%2C${loc.lng}`;
      const descriptionBlock = loc.description
        ? `<p class="aid-popup__desc">${loc.description}</p>`
        : "";

      marker.bindPopup(
        `
        <article class="aid-popup">
          <span class="aid-popup__venue">${loc.venue}</span>
          <h4 class="aid-popup__city">${loc.city}</h4>
          <p class="aid-popup__addr">${loc.address}<br/>${loc.postal}</p>
          <div class="aid-popup__hours">
            <span><strong>Pon – Sob</strong>${loc.hours.weekdays}</span>
            <span><strong>Niedziele handlowe</strong>${loc.hours.sunday}</span>
          </div>
          ${descriptionBlock}
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
      );

      bounds.extend([loc.lat, loc.lng]);
    });

    map.fitBounds(bounds, { padding: [70, 70], maxZoom: 10 });

    const handleResize = () => map.invalidateSize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="aid-map h-full w-full"
      role="application"
      aria-label="Interaktywna mapa lokalizacji American Ice Dream"
    />
  );
}
