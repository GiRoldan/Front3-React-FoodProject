import React, { useEffect, useState } from 'react'

const Home = () => {
    const [recipes, setRecipes] = useState([])
    //Debe estar inicializado paa q pueda mapear sino se rompe, o sea
    //si no le pongo nada a useState() entonces me dirá q no puede mapear undefined,
    //tiene q ser sí o sí un array vacío para q lo pueda mapear: useState([]).
    //Si lo inicializo como un objeto useState({}) tampoco podrá mapearlo, se romperá.
    const url = 'https://api.spoonacular.com/recipes/random?number=10&apiKey=66b599ca388d4d0793cdd19741565fcb'

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            //.then(data => console.log(data.recipes))
            .then(data => setRecipes(data.recipes))
    //El endpoint como tal jsonificado (data) me da un objeto(data) q tiene arrays(recipes), yo lo inicialicé con un array vacío pero es un objeto q tiene arrays,
    //por lo cual debo desestructurarlo. Vemos con console.log la data, entonces vemos q si tomamos data.recipes tenemos el array.
    }, [])

    console.log(recipes);

  return (
    <div>
        <h1>Home</h1>
        {recipes.map(recipe => (
            <div key={recipe.id}>
                <h3>{recipe.title}</h3>
                <img src={recipe.image} alt="" />
            </div>
         ))}
    </div>
  )
}

export default Home
