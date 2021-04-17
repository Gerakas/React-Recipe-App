import React from 'react';

const Recipe = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <p>Servings: {props.yield}</p>
            <p>{props.calories} calories ({Math.floor(props.calories / props.yield)} p/s)</p>
            <img src={props.image} alt={props.title + " image"}></img>
        </div>
    );
}

export default Recipe;