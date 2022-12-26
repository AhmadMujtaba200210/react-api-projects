import {  useLoadScript } from "@react-google-maps/api";
import './style.css';
import { Map } from "./Components/maps/maptest";
export default function MapHome() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries:['places'],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
  <Map />
  );
}

