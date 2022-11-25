import React from 'react'
import '../styles/App.css';
const App = () => {
  const [titles,setTitles]=useState({
  button:"polo"'
    h1:"Marco",
  });
  const swap=()=>{
  setTitles((prevState)=>{
    return{
      button:prevState.h1,
      h1:prevState.button
    };
  });
  };
  
  
  return (
    <div id="main">
<h1 id= "marco-polo">{titles.h1}</h1>
    <button onClick={swap}id="marco-polo-toggler">{titles.button}</button>
    
    </div>
  )
}


export default App;
