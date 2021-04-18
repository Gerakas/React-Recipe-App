import React, { useEffect, useState } from 'react';
import style from './App.module.css';

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
    console.log(data.hits)
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
    <div className={style.App}>
      <div className={style.searchBarCont}>
        <form onSubmit={formSubmit} className={style.searchForm}> 
          <input className={style.searchBar} type="text" value={search} onChange={searchInput}/>
          <button className={style.searchButton} type="submit">Search</button>
        </form>
      </div>
      <div className={style.recipeContainer}>
        {recipes.map((recipe, index) => (
          <Recipe
            key={recipe.recipe.label + "-" + index}
            title={recipe.recipe.label} 
            image={recipe.recipe.image} 
            calories={Math.ceil(recipe.recipe.calories)} 
            yield={recipe.recipe.yield}
            ingredients={recipe.recipe.ingredients}
            time={recipe.recipe.totalTime}
            mealType={recipe.recipe.mealType}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
