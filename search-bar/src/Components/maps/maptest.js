import { useMemo, useState } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import './style.css'
import { SearchBar } from "../searchBar";

export function Map() {
  const center = useMemo(() => ({ lat: 40, lng: 80 }), []);
  return (
    <>
      <div>
        <SearchBar />
      </div>
      {/* <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
        <MarkerF position={center} />
      </GoogleMap> */}
    </>
  );
}