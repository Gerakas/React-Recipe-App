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
    console.log(data.hits);
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
        <h1 className={style.logo}>Recipe Buddy.</h1>
        <h2 className={style.header}>Find the perfect recipe by typing any ingredient below</h2>
        <form onSubmit={formSubmit} className={style.searchForm}> 
          <input className={style.searchBar} type="text" value={search} placeholder="e.g. salmon" onChange={searchInput}/>
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
            link={recipe.recipe.url}
          />
        ))} 
      </div>
      <div className={style.heroImageCont}>
        <img src="https://raw.githubusercontent.com/Gerakas/React-Recipe-App/3a0edf0b7b331a7f760bb9585632201825edbf84/public/assets/images/graphic.svg" className={style.heroImage} id="heroImage"/>
      </div>
    </div>
  )
}

export default App;
