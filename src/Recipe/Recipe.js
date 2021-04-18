import React from 'react';
import style from './Recipe.module.css';

const Recipe = (props) => {

    let timeFeature = "";

    if (props.time != 0) {
        timeFeature = props.time + " min";
    }
    else {
        timeFeature = "N/A";
    };


    return(
        <div className={style.recipe}>
            <img src={props.image} alt={props.title + " image"} className={style.image}></img>
            <section className={style.recipeInfo}>
                <h2 className={style.title}>{props.title}</h2>
                <h3 className={style.mealType}>{props.mealType}</h3>
                <div className={style.meta}>
                    <div className={style.metaItem}>
                        <p className={style.metaTitle}>Servings:</p>
                        <p className={style.metaValue}>{props.yield}</p>
                    </div>
                    <div className={`${style.metaItem} ${style.divider}`}>
                        <p className={style.metaTitle}>Calories:</p>
                        <p className={style.metaValue}>{Math.floor(props.calories / props.yield)} p/s</p>
                    </div>
                    <div className={style.metaItem}>
                    <p className={style.metaTitle}>Time:</p>
                        <p className={style.metaValue}>{timeFeature}</p>
                    </div>
                </div>
                <h3 className={style.ingredientsTitle}>Ingredients: </h3>
                <ul className={style.ingredientsList}>
                    {props.ingredients.map((ingredient, index) => (
                        <li 
                        className={style.ingredient}
                        key={index}>
                            {ingredient.text}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default Recipe;