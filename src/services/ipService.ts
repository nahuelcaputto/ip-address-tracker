import { IpData } from "../types/ip";

const API_URL = "https://geo.ipify.org/api/v2/";

export async function fetchIpData(ip?: string): Promise<IpData> {
  try {
    const url = `${API_URL}country,city?apiKey=at_PmUw1djme8nLiAhdS42QTiqIKI878&ipAddress=${
      ip || ""
    }`;

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Failed to fetch IP data");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching IP data:", error);
    throw error;
  }
}
