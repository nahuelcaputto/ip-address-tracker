import { fetchIpData } from "@/services/ipService";
import { Icon } from "./Icon";
import { useState } from "react";
import { isValidIPv4, isValidIPv6 } from "@/utils/ip";
import { toast } from "react-toastify";

export default function SearchBar({
  handleSearch,
}: {
  handleSearch: (ip: string) => void;
}) {
  const [ip, setIp] = useState("");

  return (
    <div className="absolute flex items-center top-21 left-1/2 -translate-x-1/2 w-[90%] max-w-xl z-10">
      <div className="flex w-full overflow-hidden rounded-2xl bg-white">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className="flex-1 px-5 py-4 text-xs text-gray-900 placeholder:text-gray-400 outline-none"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch(ip);
            }
          }}
        />

        <button
          type="button"
          aria-label="Search"
          onClick={() => handleSearch(ip)}
          className="flex items-center justify-center bg-black px-5 text-white hover:bg-gray-700 hover:cursor-pointer"
        >
          <Icon name="arrow" size={16} />
        </button>
      </div>
    </div>
  );
}
