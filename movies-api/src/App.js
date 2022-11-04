import React,{useState,useEffect} from "react"; 

function App() {
  const [endPoints,setEndPoints]=useState('');  // using state to 
  const [containers,setContainers]=useState([]);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4dc9e30b52msh53ed92d97147bfap1a7a51jsn7ec3a25a2121',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
  };
  
  fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=+${endPoints}`, options)
    .then(response => {
      return response.json() //returning the JSON response instead of just consoling on log
    })
    .then(data=>{
      setContainers(data.d);// storing the data returned from the server respective to query
    })
    .catch(err => console.error(err));
  return (
    <div className="App">

    <form >
      <input type="text" />
      <button type='submit'>Submit</button>
    </form>

    </div>
  );
}

export default App;
