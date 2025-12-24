export interface IpLocation {
  city: string;
  region: string;
  country: string;
  timezone: string;
  lat: number;
  lng: number;
}

export interface IpData {
  ip: string;
  isp: string;
  location: IpLocation;
}
