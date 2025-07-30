import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import { useEffect } from 'react';

const iconColors = {
  pickup: "green",
  dropoff: "red",
  fuel: "orange",
  current: "blue"
};

const getIcon = (color) =>
  new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

// Helper to auto-fit bounds
function FitBounds({ positions }) {
  const map = useMap();
  useEffect(() => {
    if (positions.length > 0) {
      map.fitBounds(positions);
    }
  }, [map, positions]);
  return null;
}

export default function TripMap({ stops }) {
  if (!stops || stops.length === 0) return null;

  const positions = stops.map(s => [s.latitude, s.longitude]);

  return (
    <div className="p-4 bg-white rounded shadow-md mt-4">
      <h2 className="text-lg font-bold mb-2">Trip Map</h2>
      <MapContainer
        center={positions[0]}
        zoom={6}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {stops.map((stop, i) => (
          <Marker key={i} position={[stop.latitude, stop.longitude]} icon={getIcon(iconColors[stop.stop_type] || "blue")}>
            <Popup>
              <b>{stop.name}</b><br />
              {stop.stop_type}
            </Popup>
          </Marker>
        ))}
        <Polyline positions={positions} color="blue" />
        <FitBounds positions={positions} />
      </MapContainer>
    </div>
  );
}
