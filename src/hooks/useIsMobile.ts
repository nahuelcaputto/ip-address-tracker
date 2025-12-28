import { useEffect, useState } from "react";

export function useIsMobile(breakpoint = 768) {
  const query = `(max-width: ${breakpoint}px)`;
  const media = window.matchMedia(query);

  const [isMobile, setIsMobile] = useState(media.matches);

  useEffect(() => {
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [media]);

  return isMobile;
}
