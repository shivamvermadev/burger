import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
        return [...Array(props.ingredients[igKey])].map((_, index) => {
            return <BurgerIngredient key= {igKey + index} type = {igKey}></BurgerIngredient>
        });
    }).reduce((prev, cur) => { return prev.concat(cur) }, []);

    console.log(transformedIngredients);
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients to Burger!</p>
    }

    return (
        <div className = {classes.Burger}>
            <BurgerIngredient type = "bread-top"></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type = "bread-bottom"></BurgerIngredient>
        </div>
    );
}

export default burger;