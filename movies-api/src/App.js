import React,{useState,useEffect} from "react"; 
import './App.css'

function App() {
  const [endPoints,setEndPoints]=useState('');  // using state to 
  const [containers,setContainers]=useState([]);
  const [finalPoints,setFinalPoint]=useState([]);
  
  useEffect( ()=>{  // will rerender the data when ever we have change in endPoints only
    fetchMe()
  },[finalPoints])// rerendering every word when we hit the submit button instead of every letter 
  
  const fetchMe=()=>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '896d80135emshd0ca526eb10f457p1e522bjsn03366f97dbbb',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
      }
    };
  
  fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=+${endPoints}`, options)
    .then(response => {
      return response.json(); //returning the JSON response instead of just consoling on log
    })
    .then(data => {
      setContainers(data.d);// storing the data returned from the server respective to query
    }) 
    .catch(err => console.error(err));
  }

    const onChangeHandler = (e) => { // to read the data from input 'e' will be the target every value we entered into the input bar
      setEndPoints(e.target.value);
    }

    const submitHandler = e =>{ // for preventing the whole page to reload on every submit 
      e.preventDefault()
      setFinalPoint(endPoints)
    }
  return (
    <>
    <div className="App">

    <form onSubmit={submitHandler}>
      <input type="text" value={endPoints} onChange={onChangeHandler}/>
      <button type='submit'>Submit</button>
    </form>
    <div className="element">
      {containers.map((item,index)=>{
        return (
          <div key={index} className="element-div">
            <img src={item?.i?.imageUrl} alt="" />
          <p>{item.l}</p>
          </div>
        )
      })}
      </div>
    </div>
    </>
  );
}

export default App;
