import React, { useEffect, useState } from "react"
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete"
import { AutoComplete, Input, Space, Switch } from "antd"
import { IoMdCloseCircleOutline } from "react-icons/io"
import useGeoLocation from "./utils/useGeoLocation"
import { StyledAddressContainer, StyledAddressItinaryContainer, StyledTitle, StyledWeatherContainer } from "./styles"
import { CustomLocation, MainWeatherData, WeatherConditions, WeatherProps } from "./utils/types"
import Map from "./Map"
import Weather, { getIconUrl } from "./Weather"

interface ItinaryResultsProps {
  directions: google.maps.DirectionsResult
  setSelectedOption: any
  setDirections: any
  setLocation: any
  setCustomLocation: any
  optDirection: any
  onChange: any
}
const ItinaryResults: React.FC<ItinaryResultsProps> = ({
  directions,
  setSelectedOption,
  setDirections,
  setLocation,
  setCustomLocation,
  optDirection,
  onChange
}) => {
  return (
    <>
      <StyledAddressItinaryContainer>
        <div>From : {directions?.routes[0].legs[0].start_address}</div>
        <IoMdCloseCircleOutline
          onClick={() => {
            setSelectedOption("")
            setDirections(undefined)
            setLocation({ lat: 0, lng: 0 })
            setCustomLocation({ lat: 0, lng: 0 })
          }}
        />
      </StyledAddressItinaryContainer>

      <StyledAddressItinaryContainer>
        <div>To: {directions?.routes[0].legs[0].end_address}</div>
        <IoMdCloseCircleOutline
          onClick={() => {
            setCustomLocation({ lat: 0, lng: 0 })
            setSelectedOption("")
            setDirections(undefined)
          }}
        />
      </StyledAddressItinaryContainer>

      <div className="switch-container">
        {optDirection.map((opt: { value: string | undefined; checked: boolean | undefined }, i: number) => (
          <div key={i}>
            <p>{`${opt.value}`}</p>
            <Switch
              id={opt.value}
              checked={opt.checked}
              checkedChildren={"avoid"}
              unCheckedChildren={"with"}
              onChange={onChange}
            />
          </div>
        ))}
      </div>

      <div className="directions-container">
        <div>{directions?.routes[0].legs[0].distance?.text}</div>
        <div>{directions?.routes[0].legs[0].duration?.text}</div>
      </div>
    </>
  )
}

const containerStyle = {
  width: "400px",
  height: "400px"
}

const Itinary = () => {
  const [customLocation, setCustomLocation] = useState<CustomLocation>()
  const [selectedOption, setSelectedOption] = useState<string>("")
  const [directions, setDirections] = useState<google.maps.DirectionsResult>()
  const [optDirection, setOptDirection] = useState([
    { value: "tolls", checked: true },
    { value: "ferries", checked: true },
    { value: "highways", checked: true }
  ])
  const [forecast, setForecast] = useState<WeatherProps[] | null>(null)
  const { location, setLocation } = useGeoLocation()

  let count = React.useRef(0)
  const directionsCallback = React.useCallback(
    (
      res: React.SetStateAction<google.maps.DirectionsResult | undefined> | null,
      status: google.maps.DirectionsStatus
    ) => {
      if (res && res !== null) {
        if (status === "OK" && count.current < 2) {
          count.current += 1
          setDirections(res)
        } else count.current = 0
      }
    },
    []
  )

  const handleSelect = async (value: string) => {
    const results = await geocodeByAddress(value)
    const latLng = await getLatLng(results[0])
    setCustomLocation(latLng)
    setSelectedOption(value)
  }

  const onChange = (checked: boolean, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setOptDirection(
      optDirection.map(opt => {
        if (opt.value === event.currentTarget.id) {
          return {
            value: event.currentTarget.id,
            checked
          }
        } else {
          return opt
        }
      })
    )
  }

  const isItinarySet = directions?.routes[0].legs[0].end_address && directions?.routes[0].legs[0].start_address
  const itinaryDetails = [
    { type: "from", value: location },
    { type: "to", value: customLocation }
  ]

  const keyQuery = `appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
  const server = "http://api.openweathermap.org/data/2.5"

  useEffect(() => {
    ;(async function () {
      if (customLocation) {
        const weatherForecast = await readForecast(customLocation)
        setForecast(weatherForecast)
      }
    })()
  }, [customLocation])

  async function readForecast(customLocation: CustomLocation): Promise<[]> {
    const forecast = await fetch(
      `${server}/forecast?lat=${customLocation.lat}&lon=${customLocation.lng}&${keyQuery}&lang=fr&units=metric`
    )

    if (forecast.status !== 200) throw new Error("Failed to read location data")
    return (await forecast.json()).list
  }

  return (
    <StyledAddressContainer>
      <div>
        <h1>WHERE DO WE GO?!</h1>
        {!isItinarySet ? (
          itinaryDetails.map((itinaryDetail, i) => (
            <div>
              <PlacesAutocomplete
                key={i}
                searchOptions={{
                  componentRestrictions: { country: "fr" }
                }}
                value={selectedOption}
                onSelect={handleSelect}
                onChange={setSelectedOption}
              >
                {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                  <AutoComplete
                    children={<Input {...getInputProps({ placeholder: `Type address ${itinaryDetail.type}` })} />}
                    options={suggestions.map(suggestion => {
                      return {
                        label: <div {...getSuggestionItemProps(suggestion)}>{suggestion.description}</div>,
                        value: suggestion.description
                      }
                    })}
                  />
                )}
              </PlacesAutocomplete>
            </div>
          ))
        ) : (
          <>
            <ItinaryResults
              directions={directions}
              setSelectedOption={setSelectedOption}
              setDirections={setDirections}
              setLocation={setLocation}
              setCustomLocation={setCustomLocation}
              optDirection={optDirection}
              onChange={onChange}
            />
            <div className="forecast-container">
              {forecast &&
                forecast
                  .filter(data => data.dt_txt.includes("12:00"))
                  .map((day, i) => (
                    <div className="forecast-item" key={i}>
                      <div>{new Date(day.dt_txt).toLocaleDateString("fr-FR", { day: "numeric", month: "short" })}</div>
                      <div>{day.main.temp}</div>
                      {day.weather.map(condition => (
                        <>
                          <div> {getIconUrl(condition.main)?.icon} </div>
                          <div> {condition.description} </div>
                        </>
                      ))}
                    </div>
                  ))}
            </div>
          </>
        )}
      </div>
      {location && <Map itinary={{ customLocation, optDirection, directionsCallback, directions, containerStyle }} />}
    </StyledAddressContainer>
  )
}

export default Itinary
