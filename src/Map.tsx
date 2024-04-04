import { DirectionsRenderer, DirectionsService, GoogleMap, MarkerF } from "@react-google-maps/api"
import { StyledMapContainer } from "./styles"
import useGeoLocation from "./utils/hooks/useGeoLocation"
import imageContent from "./assets/img/chiracos5.png"
import { CustomLocation } from "./utils/types"

const containerStyle = {
  width: "150px",
  height: "150px"
}

interface ItinaryProps {
  customLocation: CustomLocation | undefined
  optDirection: {
    value: string
    checked: boolean
  }[]
  directionsCallback: (
    res: React.SetStateAction<google.maps.DirectionsResult | undefined> | null,
    status: google.maps.DirectionsStatus
  ) => void
  directions: google.maps.DirectionsResult | undefined
  containerStyle: {
    width: string
    height: string
  }
}

interface MapProps {
  itinary?: ItinaryProps
}

const Map: React.FC<MapProps> = ({ itinary }) => {
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
    scaledSize: new google.maps.Size(80, 80),
    rotation: [10]
  }

  if (!location) return null
  return (
    <StyledMapContainer
      itinarydisplay={itinary ? "true" : "false"}
      containerstyle={itinary ? itinary.containerStyle : containerStyle}
    >
      <GoogleMap mapContainerStyle={itinary ? itinary.containerStyle : containerStyle} center={location} zoom={16}>
        <MarkerF icon={icon} visible position={location} draggable onDragEnd={handleDragEnd} />

        {itinary?.customLocation && (
          <DirectionsService
            options={{
              avoidFerries: itinary.optDirection.find(opt => opt.value === "ferries")?.checked,
              avoidTolls: itinary.optDirection.find(opt => opt.value === "tolls")?.checked,
              avoidHighways: itinary.optDirection.find(opt => opt.value === "highways")?.checked,
              origin: location,
              destination: itinary.customLocation,
              travelMode: google.maps.TravelMode.DRIVING
            }}
            callback={itinary.directionsCallback}
          />
        )}
        {itinary?.directions && <DirectionsRenderer directions={itinary.directions} />}
      </GoogleMap>
    </StyledMapContainer>
  )
}

export default Map
