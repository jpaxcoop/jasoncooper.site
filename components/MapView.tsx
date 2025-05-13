'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

type MapViewProps = {
  lat: number;
  lng: number;
  height?: number;
  zoom?: number;
};

export default function MapView({ lat, lng, height = 400, zoom = 13 }: MapViewProps) {
  return (
    <div style={{ height: height, width: '100%' }}>
      <MapContainer center={[lat, lng]} zoom={zoom} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
          <Popup>
            Latitude: {lat}, Longitude: {lng}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
