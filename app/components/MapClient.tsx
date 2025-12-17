'use client';

import { useEffect } from 'react';
import L from 'leaflet';

// plugin search
import 'leaflet-search';
import 'leaflet-search/dist/leaflet-search.css';

// leaflet css
import 'leaflet/dist/leaflet.css';

export default function MapClient() {
  useEffect(() => {
    // pastikan DOM ada
    const map = L.map('map', {
      zoomControl: true,
    }).setView([-7.8, 110.2], 10);

    // basemap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    // ⚠️ CONTOH LAYER — ganti dengan layer qgis2web kamu
    const layer = L.geoJSON((window as any).json_kulprogkeckeckp_1).addTo(map);

    // SEARCH CONTROL
    const searchControl = new (L.Control as any).Search({
      layer,
      propertyName: 'WADMKC',
      hideMarkerOnCollapse: true,
      position: 'topright',
    });

    map.addControl(searchControl);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="map"
      style={{
        width: '100%',
        height: '100vh',
      }}
    />
  );
}
