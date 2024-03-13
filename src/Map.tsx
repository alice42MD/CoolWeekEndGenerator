import { GoogleMap, MarkerF } from "@react-google-maps/api"
import { StyledMapContainer } from "./styles"
import useGeoLocation from "./utils/useGeoLocation"
import imageContent from "./assets/img/chiracos5.png"

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



  var icon = {
    url: imageContent,
    scaledSize: new google.maps.Size(50, 50),
    rotation: [10]
  };

  if (!location) return null
  return (
    <StyledMapContainer>

      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={16}>
        <MarkerF

          icon={icon}
          visible position={location} draggable onDragEnd={handleDragEnd} />
      </GoogleMap>

    </StyledMapContainer>
  )
}

export default Map
