import { IpData } from "@/types/ip";

export default function InfoPanel({ isp, ip, location }: IpData) {
  return (
    <div className="absolute top-44 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl bg-white rounded-xl shadow grid grid-cols-1 md:grid-cols-4 gap-6 p-6 z-10 text-center md:text-left">
      <div className="md:border-r md:border-gray-200 px-4 md:px-6 flex flex-col justify-center items-center md:items-start">
        <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">
          IP Address
        </p>
        <p className="font-medium text-xl md:text-2xl text-gray-900">
          {ip || "—"}
        </p>
      </div>
      <div className="md:border-r md:border-gray-200 px-4 md:px-6 flex flex-col justify-center items-center md:items-start">
        <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">
          Location
        </p>
        <p className="font-medium text-xl md:text-2xl text-gray-900">
          {location?.city ? (
            <>
              {location?.city}, {location?.region}
              <br className="md:hidden" /> {location?.country}
            </>
          ) : (
            "—"
          )}
        </p>
      </div>
      <div className="md:border-r md:border-gray-200 px-4 md:px-6 flex flex-col justify-center items-center md:items-start">
        <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">
          Timezone
        </p>
        <p className="font-medium text-xl md:text-2xl text-gray-900">
          {location?.timezone ? `UTC ${location.timezone}` : "—"}
        </p>
      </div>
      <div className="px-4 md:px-6 flex flex-col justify-center items-center md:items-start">
        <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">
          ISP
        </p>
        <p className="font-medium text-xl md:text-2xl text-gray-900">
          {isp || "—"}
        </p>
      </div>
    </div>
  );
}
