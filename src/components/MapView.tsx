import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { LatLngTuple } from "leaflet";
import { useEffect } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import iconPath from "../assets/icon-location.svg";

interface Props {
  lat: number;
  lng: number;
}

function ChangeView({ center }: { center: LatLngTuple }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center);
  }, [center, map]);
  return null;
}

export default function MapView({ lat, lng }: Props) {
  const isMobile = useIsMobile();

  const customMarkerIcon = L.icon({
    iconUrl: iconPath,
    iconSize: [46, 56],
    iconAnchor: [23, 56],
  });

  return (
    <div className="flex-1 w-full z-0">
      <MapContainer
        center={[lat, lng] as LatLngTuple}
        zoom={isMobile ? 13 : 15}
        className="h-full w-full"
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
      >
        <ChangeView center={[lat, lng]} />
        <TileLayer
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]} icon={customMarkerIcon} />
      </MapContainer>
    </div>
  );
}
