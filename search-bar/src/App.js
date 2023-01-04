import { useLoadScript } from "@react-google-maps/api";
import { GoogleMap, MarkerF } from "@react-google-maps/api";

import './style.css';
import { SearchBar } from "./Components/searchBar";
export default function MapHome() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  if (!isLoaded) return <div>Loading...</div>;
  
  return (
    <>
      {/* <SearchBar /> */}
      <MapTest />
    </>
  );
}

function MapTest() {
  const center = { lat: 40, lng: 80 }
  return (
    <>
      <GoogleMap zoom={5} center={center} mapContainerClassName="map-container">
        <MarkerF position={center} />
      </GoogleMap>
    </>
  );
}




