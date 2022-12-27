import {  useLoadScript } from "@react-google-maps/api";
import './style.css';
import { Map } from "./Components/maps/maptest";
export default function MapHome() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCrWhnWjGwZ_euC9O6oNn3W1tVXfhrFgwY",
    libraries:['places'],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
  <Map />
  );
}

