'use client'
import axios from "axios";
import Navbar from "./components/Navbar";
import { useQuery } from "@tanstack/react-query";
import { format, parseISO } from "date-fns";
import Container from "./components/Container";

export interface WeatherForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastItem[];
  city: City;
}

export interface ForecastItem {
  dt: number;
  main: MainWeather;
  weather: WeatherCondition[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number; // probability of precipitation
  rain?: Rain;
  sys: ForecastSys;
  dt_txt: string;
}

export interface MainWeather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
  dew_point?: number;
}

export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Clouds {
  all: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust?: number;
}

export interface Rain {
  "3h": number;
}

export interface ForecastSys {
  pod: "d" | "n";
}

export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface Coord {
  lat: number;
  lon: number;
}

export default function Home() {

   const { isLoading, error, data } = useQuery<WeatherForecastResponse>({
    queryKey: ['repoData'],
    queryFn: async () =>
    {
      const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=noida&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&cnt=56`);

      return data
    }
      // fetch('https://api.github.com/repos/TanStack/query').then((res) =>
      //   res.json(),
      // ),
  })

  const firstData = data?.list[0]

  console.log("Data" , data)

  if (isLoading) return (
    <div className="flex items-center justify-center min-h-screen ">

      <p className="animate-bounce">
    Loading...
      </p>

    </div>
  )
  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className="flex flex-col gap-4 min-h-screen bg-gray-600">
      <Navbar />
      <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 pt-4">

        <section>
          <div>
            <h2 className="flex gap-2 text-2xl items-end">
              <p>{format(parseISO(firstData?.dt_txt ?? ""), "EEEE")}</p>
              <p className="text-lg">({format(parseISO(firstData?.dt_txt ?? ""), "dd.MM.yyyy")})</p>

            </h2>
            <Container className="gap-10 px-6 items-center"></Container>
          </div>
        </section>

      </main>
    </div>
  );
}
