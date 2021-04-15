import React from 'react';
import './App.css';

const App = () => {

  const APP_ID = '28ad872e';
  const APP_KEY = 'c0cbb11915531768a3bd9de43716f761';
  const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;


  return (
    <div className="App">
      <form className="search-form"> 
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  )
}

export default App;
