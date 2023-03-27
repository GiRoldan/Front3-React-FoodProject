import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Deserts from './components/Deserts'
import Navbar from './components/Navbar'
import RecipeDetail from './components/RecipeDetail'
import Vegetarians from './components/Vegetarians'
import Veggie from './components/Veggie'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Ingredients from './Pages/Ingredients'
import NotFound from './Pages/NotFound'
import Recipes from './Pages/Recipes'
import {routes} from './routes'


function App() {
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
  /* 1° Dependencias ARRAY VACIO: useEffect() se ejecuta UNA SOLA VEZ
     2° Si coloco alguna dependencia, o sea le pongo algo al array, useEffect() se ejecutará cada vez que se actualice eso q ponga, por ejemplo:
   Si en las dependencias pongo otro estado, por ej un contador, se actualizará cada vez q ese contador se actualice.
   OJO! Si en las dependencias pongo recipies se va a generar un loop infinito.
   */

  console.log(recipes);


  //La idea es NO colocar componentes sueltos en APP sino solamente colocar RUTAS,
  //En la APP no figuran componentes sueltos NI estados.
  //Generalmente se colocan solo RUTAS y a lo sumo alguna operación lógica para trabajar con las rutas.
  return (
    <div className="App">
      {/* <LoginForm/> */}
      <Navbar/>
      <Routes>
        {/* <Route path={routes.home} element={<Home/>}/> */}
        {/* Ahora Home no es tanto un componente sino una pag donde dentro de Home podrian haber otros componentes,
        por cual me conviene crear una carpeta nueva de PAGES, dentro de la cual pondremos a Home*/}
        <Route path={routes.home} element={<Home/>}>
          <Route path={routes.vegetarians} element={<Vegetarians/>}>
             <Route path="/vegetarianas/veggie" element={<Veggie/>}/>
          </Route>
          <Route path={routes.deserts} element={<Deserts/>}/>
        </Route>
        <Route path={routes.ingredients} element={<Ingredients/>}/>
        <Route path={routes.recipes} element={<Recipes recipes={recipes}/>}/>
        <Route path={routes.recipe} element={<RecipeDetail recipes={recipes}/>}/>
        <Route path={routes.contact} element={<Contact/>}/>
        <Route path={routes.about} element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
