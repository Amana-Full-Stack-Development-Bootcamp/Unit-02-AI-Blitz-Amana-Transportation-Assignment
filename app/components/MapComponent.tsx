"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import { BusLine } from "../data/amanaData";

// Emoji Icons
const busEmojiIcon = new L.DivIcon({
  html: `<div class="bg-white-800 rounded-full w-7 h-7 text-xl flex items-center justify-center">🚌</div>`,
  className: "",
  iconSize: [64, 64],
  iconAnchor: [16, 32],
});

const stopEmojiIcon = new L.DivIcon({
  html: "🛑",
  className: "text-2xl",
  iconSize: [25, 25],
  iconAnchor: [12, 25],
});

// Component to recenter map
interface RecenterMapProps {
  position: [number, number];
}
const RecenterMap = ({ position }: RecenterMapProps) => {
  const map = useMap();
  useEffect(() => {
    map.setView(position, map.getZoom(), { animate: true });
  }, [position]);
  return null;
};

interface MapComponentProps {
  busLines: BusLine[];
}
const MapComponent = ({ busLines }: MapComponentProps) => {
  if (!busLines || busLines.length === 0) return null;

  const [selectedBusId, setSelectedBusId] = useState(busLines[0]?.id);
  const selectedBus = busLines.find((bus) => bus.id === selectedBusId);

  if (!selectedBus) return null;

  const defaultPosition: [number, number] = [
    selectedBus.current_location.latitude,
    selectedBus.current_location.longitude,
  ];

  // Coordinates for full route polyline
  const routeCoordinates: [number, number][] = selectedBus.bus_stops.map(
    (stop) => [stop.latitude, stop.longitude]
  );

  // Connect bus → FIRST bus stop
  const firstStop = selectedBus.bus_stops[0];
  // Ensure we have a first stop and the bus has a current location
  const busToFirstStopLine: [number, number][] = [];

  if (firstStop && selectedBus.current_location) {
    const busPosition: [number, number] = [
      selectedBus.current_location.latitude,
      selectedBus.current_location.longitude,
    ];

    const firstStopPosition: [number, number] = [
      firstStop.latitude,
      firstStop.longitude,
    ];

    busToFirstStopLine.push(busPosition, firstStopPosition);
  }

  return (
    <div className="container mx-auto p-4 bg-gray-100 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Active Bus Map 🗺️
      </h2>

      {/* Bus Route Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {busLines.map((bus) => (
          <button
            key={bus.id}
            onClick={() => setSelectedBusId(bus.id)}
            className={`py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
              selectedBusId === bus.id
                ? "bg-green-600 text-white shadow-lg"
                : "bg-gray-300 text-gray-800 hover:bg-green-500 hover:text-white"
            }`}
          >
            {bus.route_number}
          </button>
        ))}
      </div>

      {/* Map */}
      <MapContainer
        center={defaultPosition}
        zoom={13}
        scrollWheelZoom={true}
        className="w-full h-96 rounded-lg shadow-inner relative z-0"
        key={selectedBusId}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <RecenterMap position={defaultPosition} />

        {/* Full route line */}
        {routeCoordinates.length > 1 && (
          <Polyline positions={routeCoordinates} color="lime" weight={4} />
        )}

        {/* Line from bus to FIRST stop */}
        {busToFirstStopLine.length === 2 && (
          <Polyline
            positions={busToFirstStopLine}
            color="red"
            weight={3}
            dashArray="5,10"
          />
        )}

        {/* Bus Stops */}
        {selectedBus.bus_stops.map((stop) => (
          <Marker
            key={stop.id}
            position={[stop.latitude, stop.longitude]}
            icon={stopEmojiIcon}
          >
            <Popup className="text-sm">
              <div className="font-semibold">{stop.name}</div>
              <div>Next Arrival: {stop.estimated_arrival}</div>
            </Popup>
          </Marker>
        ))}

        {/* Active Bus */}
        {selectedBus.status === "Active" && (
          <Marker
            position={[
              selectedBus.current_location.latitude,
              selectedBus.current_location.longitude,
            ]}
            icon={busEmojiIcon}
          >
            <Popup className="text-sm">
              <div className="font-semibold text-lg">Bus {selectedBus.id}</div>
              <div>Status: {selectedBus.status}</div>
              <div>
                Capacity: {selectedBus.passengers.utilization_percentage}%
              </div>
              <div>First Stop: {firstStop?.name || "N/A"}</div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
