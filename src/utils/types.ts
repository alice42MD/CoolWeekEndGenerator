import { ReactElement } from "react";

export interface Coordinates {
  lon: number;
  lat: number;
}

export interface WeatherLocation {
  coord: Coordinates;
  id: number;
  name: string;
}

export interface WeatherConditions {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface MainWeatherData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}


export interface WeatherProps {
  weather: WeatherConditions[];
  main: MainWeatherData;
  dt: number;
}

export interface CustomLocation {
  lat: number;
  lng: number;
}

export   interface MenuRenderProps {
    [key: number]: ReactElement<any, any>
  }