import React from 'react'
import { useParams } from 'react-router-dom';

const RecipeDetail = ({recipes}) => {

    const params = useParams();
    // console.log(recipes);

    const recipeSelected = recipes.find((recipe) => params.id == recipe.id)
    console.log(recipeSelected);

  return (
    <div>
        <h2>{recipeSelected.title}</h2>
        <img src={recipeSelected.image} alt="" />
        <h4>{recipeSelected.instructions}</h4>
    </div>
  )
}

export default RecipeDetail
