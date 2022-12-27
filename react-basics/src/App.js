import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import { useEffect } from "react";

function App() {
  const [value, setValue] = useEffect;

  return (
    <div
      style={
        {
          height:'20px',
          backgroundColor:'black'
        }
      }
    >
      <Combobox>
        <ComboboxInput
          
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search an address"
        />
        <ComboboxPopover>
          <ComboboxList></ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}

export default App;
