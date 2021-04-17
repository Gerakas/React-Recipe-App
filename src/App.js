import React, { useEffect, useState } from 'react';
import './App.css';

import Recipe from './Recipe/Recipe';

const App = () => {

  const APP_ID = '28ad872e';
  const APP_KEY = 'c0cbb11915531768a3bd9de43716f761';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const searchInput = event => {
    setSearch(event.target.value);
  }

  const formSubmit = event => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  }


  return (
    <div className="App">
      <form onSubmit={formSubmit} className="search-form"> 
        <input className="search-bar" type="text" value={search} onChange={searchInput}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map((recipe, index) => (
        <Recipe
          key={recipe.recipe.label + "-" + index}
          title={recipe.recipe.label} 
          image={recipe.recipe.image} 
          calories={Math.ceil(recipe.recipe.calories)} 
          yield={recipe.recipe.yield}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  )
}

export default App;
