import { useMemo } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "./style.css";

export function MapTest2() {
    const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    })
    
    
    if (!isLoaded) {
        return <div>Loading...</div>
    }
    
    return (
        <div className="map-container"
        style={{height:"100vh",width:"100vw"}}
        h='100vh'
        w='100vw'
    >
        <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: '100%', height: '100%' }}
        >
        </GoogleMap>
    </div>
    );
}