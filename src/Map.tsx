import { GoogleMap, Marker } from "@react-google-maps/api"
import { useState } from "react"
import { StyledMapContainer } from "./styles"
import useGeoLocation from "./utils/useGeoLocation"

const containerStyle = {
  width: "150px",
  height: "150px"
}

const Map = () => {
  const { location, setLocation } = useGeoLocation()

  const initialCenter = {
    lat: 37.7749, // Coordinates for San Francisco
    lng: -122.4194
  }
  const [, setCenter] = useState(initialCenter)
  const handleDragEnd = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      if (e.latLng) {
        const lat = e.latLng.lat()
        const lng = e.latLng.lng()
        setCenter({ lat, lng })
        setLocation({ lat, lng })
        // setSelectedOption("");
      }
    }
  }

  return (
    location && (
      <StyledMapContainer>
        <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={16}>
          <Marker visible position={location} draggable onDragEnd={handleDragEnd} />
        </GoogleMap>
      </StyledMapContainer>
    )
  )
}

export default Map
