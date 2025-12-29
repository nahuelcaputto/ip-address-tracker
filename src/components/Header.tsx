import { JSX } from "react";
import { useIsMobile } from "../hooks/useIsMobile";
import mobilePattern from "../assets/pattern-bg-mobile.png";
import desktopPattern from "../assets/pattern-bg-desktop.png";

export default function Header(): JSX.Element {
  const isMobile = useIsMobile();

  return (
    <div className="text-white py-6 text-center relative h-[35vh] sm:h-[33vh]">
      <h1 className="text-2xl font-medium">IP Address Tracker</h1>
      <img
        src={isMobile ? mobilePattern : desktopPattern}
        alt="Header background pattern"
        className="w-full h-full absolute top-0 left-0 z-[-1] object-cover"
      />
    </div>
  );
}
