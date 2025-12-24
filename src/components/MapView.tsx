import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import { useEffect } from "react";

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
  return (
    <div className="flex-1 w-full z-0">
      <MapContainer
        center={[lat, lng] as LatLngTuple}
        zoom={13}
        className="h-full w-full"
        style={{ height: "100%", width: "100%" }}
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
