import { GoogleMap, MarkerF } from "@react-google-maps/api"
import { StyledMapContainer } from "./styles"
import useGeoLocation from "./utils/useGeoLocation"

const containerStyle = {
  width: "150px",
  height: "150px"
}

const Map = () => {
  const { location, setLocation } = useGeoLocation()

  const handleDragEnd = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      const lat = e.latLng.lat()
      const lng = e.latLng.lng()
      setLocation({ lat, lng })
    }
  }

  if (!location) return null
  return (
    <StyledMapContainer>
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={16}>
        <MarkerF visible position={location} draggable onDragEnd={handleDragEnd} />
      </GoogleMap>
    </StyledMapContainer>
  )
}

export default Map
