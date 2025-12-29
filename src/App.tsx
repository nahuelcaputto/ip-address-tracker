import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import InfoPanel from "./components/InfoPanel";
import MapView from "./components/MapView";
import Header from "./components/Header";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { isValidIPv4, isValidIPv6 } from "./utils/ip";
import { fetchIpData } from "./services/ipService";
import { useIsMobile } from "./hooks/useIsMobile";

export default function App() {
  const [lat, setLat] = useState(51.505);
  const [lng, setLng] = useState(-0.09);
  const [ip, setIp] = useState("");
  const [isp, setIsp] = useState("");
  const [location, setLocation] = useState({
    city: "",
    region: "",
    country: "",
    timezone: "",
    lat: 0,
    lng: 0,
  });
  const isMobile = useIsMobile();

  useEffect(() => {
    const getInitialIp = async () => {
      try {
        const response = await fetchIpData();
        setIp(response.ip);
        setIsp(response.isp);
        setLocation(response.location);
        setLat(response.location.lat);
        setLng(response.location.lng);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch initial IP data");
      }
    };
    getInitialIp();
  }, []);

  const handleSearch = async (ip: string) => {
    if (!isValidIPv4(ip) && !isValidIPv6(ip)) {
      toast.error("Invalid IP address or domain");
      return;
    }
    try {
      const response = await fetchIpData(ip);
      setIp(response.ip);
      setIsp(response.isp);
      setLocation(response.location);
      setLat(response.location.lat);
      setLng(response.location.lng);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch IP data");
    }
  };

  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <div className="absolute w-full z-10">
        <SearchBar handleSearch={handleSearch} />
        <InfoPanel ip={ip} isp={isp} location={location} />
      </div>
      <MapView lat={lat} lng={lng} />
      <ToastContainer position={isMobile ? "top-center" : "bottom-center"} />
    </div>
  );
}
