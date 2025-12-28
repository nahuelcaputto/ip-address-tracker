import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import { useEffect } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

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
        <Marker position={[lat, lng]} />
      </MapContainer>
    </div>
  );
}
