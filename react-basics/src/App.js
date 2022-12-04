import React,{ useState } from 'react';
// import "./style.css";

function App() {
  
  var [count, setCount] = useState(0);
  return (
    <>
    <div className="App">
      You pressed {count} times.
      <button className="buttonClick" onClick={()=> setCount(count+1)} style={{height:30, width:60 }}>
        Click me!
      </button>

    </div>
    <div style={{backgroundColor: 'lime', color: 'white'}}>Avocado</div>
    <div
  style={{
    backgroundColor: isActive ? 'violet' : '',
    color: isActive ? 'white' : '',
  }}
>
  Hello world
</div>

    </>
  );
}

export default App;
