import  { useState, useEffect} from 'react'
import Geocode from "react-geocode";

interface CustomLocation {
  lat: number;
  lng: number;
}

const useGeoLocation = () => {
  const [location, setLocation] = useState<CustomLocation>();

  useEffect(() => {
    Geocode.setApiKey(`${process.env.REACT_APP_GEO_CODE_API_KEY}`);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      //handle ERROR
      console.log("Geolocation not supported");
    }
  }, [])

  function success (position: { coords: { latitude: any; longitude: any; }; }) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ lat: latitude, lng: longitude });
  }
  
  function error () {
    //handle ERROR
    console.log("Unable to retrieve your location");
  }
  return {location, setLocation}
}

  export default useGeoLocation;