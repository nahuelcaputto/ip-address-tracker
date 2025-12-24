import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import InfoPanel from "./components/InfoPanel";
import MapView from "./components/MapView";

export default function App() {
  const [lat, setLat] = useState(51.505);
  const [lng, setLng] = useState(-0.09);

  return (
    <main className="relative flex-1 h-screen flex flex-col w-full">
      <Header />
      <SearchBar />
      <InfoPanel />
      <MapView lat={lat} lng={lng} />
    </main>
  );
}
