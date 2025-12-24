import { IpData } from "../types/ip";

export async function fetchIpData(query?: string): Promise<IpData> {
  const url = query ? `API_URL?query=${query}` : `API_URL`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch IP data");
  }

  return res.json();
}
