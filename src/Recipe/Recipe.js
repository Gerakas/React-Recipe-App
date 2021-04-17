import React from 'react';
import style from './Recipe.module.css';

const Recipe = (props) => {

    let timeFeature = "";

    if (props.time != 0) {
        timeFeature = props.time + " min";
    }; 


    return(
        <div className={style.recipe}>
            <img src={props.image} alt={props.title + " image"} className={style.image}></img>
            <section className={style.recipeInfo}>
                <h2 className={style.title}>{props.title}</h2>
                <h3 className={style.mealType}>{props.mealType}</h3>
                <div className={style.meta}>
                    <p className={style.servings}>Servings: {props.yield}</p>
                    <p className={style.calories}>{props.calories} calories ({Math.floor(props.calories / props.yield)} p/s)</p>
                    <p className={style.time}>{timeFeature}</p>
                </div>
                <u className={style.ingredientsList}>
                    {props.ingredients.map(ingredient => (
                        <li className={style.ingredient}>{ingredient.text}</li>
                    ))}
                </u>
            </section>
        </div>
    );
}

export default Recipe;