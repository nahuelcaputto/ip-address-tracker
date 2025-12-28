import { IpData } from "@/types/ip";

export default function InfoPanel({ isp, ip, location }: IpData) {
  return (
    <div className="absolute top-44 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl bg-white rounded-xl shadow grid grid-cols-1 md:grid-cols-4 gap-6 p-6 z-10">
      <div>
        <p className="text-xs text-gray-400 uppercase">IP Address</p>
        <p className="font-semibold">{ip || "—"}</p>
      </div>
      <div>
        <p className="text-xs text-gray-400 uppercase">Location</p>
        <p className="font-semibold">
          {location?.city || "—"}, {location?.region || "—"},{" "}
          {location?.country || "—"}
        </p>
      </div>
      <div>
        <p className="text-xs text-gray-400 uppercase">Timezone</p>
        <p className="font-semibold">{location?.timezone || "—"}</p>
      </div>
      <div>
        <p className="text-xs text-gray-400 uppercase">ISP</p>
        <p className="font-semibold">{isp || "—"}</p>
      </div>
    </div>
  );
}
