import React, { useEffect } from "react";
import Geocode from "react-geocode";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { StyledMapContainer } from "./styles";


interface CustomLocation {
  lat: number;
  lng: number;
}

const containerStyle = {
  width: "150px",
  height: "150px"
};


const Map = () => {
  const [location, setLocation] = React.useState<CustomLocation | null>()

  useEffect(() => {
    Geocode.setApiKey(`${process.env.GEOCODE_API_KEY}`);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      //handle ERROR
      console.log("Geolocation not supported");
    }
  }, []);


  function success (position: { coords: { latitude: any; longitude: any; }; }) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ lat: latitude, lng: longitude });
  }

  function error () {
    //handle ERROR
    console.log("Unable to retrieve your location");
  }

  const handleMarkerDragEnd = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      setLocation({ lat, lng });
    }
  };

  return (
    location &&
    <StyledMapContainer>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={16}
      >
        <Marker
          visible
          position={location}
          draggable
          onDragEnd={handleMarkerDragEnd}
        />
      </GoogleMap>
    </StyledMapContainer >
  );
};

export default Map;
