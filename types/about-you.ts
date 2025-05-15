export type SkyMap = {
  sunHeight: string;
  sunColor: string;
  skyGradient: string;
  groundGradient: string;
};
  
export type WeatherData = {
  temp: number | undefined;
  main: string;
};
  
export type Visitor = {
  ip: string;
  city: string | null;
  region: string | null;
  country: string | null;
  latitude: number;
  longitude: number;
  timezone: string | undefined;
  browser: string | null;
  os: string | null;
  weather: WeatherData | null;
};