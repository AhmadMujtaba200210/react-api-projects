/* eslint-disable no-unused-vars */
import { useLoadScript } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption
} from "@reach/combobox";

export function PlacesAutoComplete() {
    const {isLoaded}=useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries:["places"]
    });

    const {
        ready,
        value,
        setValue,
        suggestions:{status,data},
        clearSuggestions,   
    }=usePlacesAutocomplete();
    
    const changeHandle=(e)=>{
    setValue(e.target.value);
    }
    if(!isLoaded) return <div>Loading..</div>
    return <Combobox>
        <ComboboxInput value={value} onChange={changeHandle} disabled={!ready}/>
    </Combobox>
}

