import { useEffect, useState } from "react"
import { WiCloudy, WiDaySunny, WiRain, WiSnow, WiStormShowers } from "react-icons/wi"
import { CustomLocation, WeatherLocation, WeatherProps } from "./utils/types"
import useGeoPosition from "./utils/useGeoLocation"

const keyQuery = `appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
const server = "http://api.openweathermap.org/data/2.5"

function getIconUrl (code: string) {
  const icons = [
    { type: "Rain", icon: <WiRain /> },
    { type: "Clouds", icon: <WiCloudy /> },
    { type: "Thunderstorm", icon: <WiStormShowers /> },
    { type: "Drizzle", icon: <WiRain /> },
    { type: "Snow", icon: <WiSnow /> },
    { type: "Clear", icon: <WiDaySunny /> }
  ]
  return icons.find(icon => icon.type === code)
}

const Weather = () => {
  const [weather, setWeather] = useState<WeatherProps>()
  const [currentLocation, setCurrentLocation] = useState<WeatherLocation>()
  const { location } = useGeoPosition()

  useEffect(() => {
    ; (async function () {
      if (location) {
        const currentWeather = await getCurrentWeather(location)
        setCurrentLocation({
          coord: currentWeather.coords,
          id: currentWeather.id,
          name: currentWeather.name
        })
        const weather = await readWeather(currentWeather.id)
        setWeather(weather)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  const getCurrentWeather = async (location: CustomLocation) => {
    const b = await fetch(`${server}/weather?lat=${location.lat}&lon=${location.lng}&${keyQuery}`)
    return await b.json()
  }

  async function readWeather (locationId: number): Promise<WeatherProps> {
    const current = await fetch(`${server}/weather?id=${locationId}&${keyQuery}&units=metric&lang=fr`)
    if (current.status !== 200) throw new Error("Failed to read location data")
    return await current.json()
  }

  return (
    currentLocation &&
    weather && (
      <>
        <div>{currentLocation.name}</div>
        <div>{weather.main.temp}°C</div>
        <div>
          ({weather.main.temp_min}°C / {weather.main.temp_max}°C)
        </div>
        {weather.weather.map(condition => {
          return (
            <div key={condition.id}>
              {getIconUrl(condition.main)?.icon}
              <div>{condition.description}</div>
            </div>
          )
        })}
        <div>Humidity: {weather.main.humidity}%</div>
      </>
    )
  )
}

export default Weather
