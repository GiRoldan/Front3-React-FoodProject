import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Ingredients from './Pages/Ingredients'
import NotFound from './Pages/NotFound'
import {routes} from './routes'


function App() {

  //La idea es NO colocar componentes sueltos en APP sino solamente colocar RUTAS,
  //En la APP no figuran componentes sueltos NI estados.
  //Generalmente se colocan solo RUTAS y a lo sumo alguna operación lógica para trabajar con las rutas.
  return (
    <div className="App">
      <Navbar/>
      <h1>Recetario DH</h1>
      <Routes>
        <Route path={routes.home} element={<Home/>}/>
        {/* Ahora Home no es tanto un componente sino una pag donde dentro de Home podrian haber otros componentes,
        por cual me conviene crear una carpeta nueva de PAGES, dentro de la cual pondremos a Home*/}
        <Route path={routes.ingredients} element={<Ingredients/>}/>
        <Route path={routes.contact} element={<Contact/>}/>
        <Route path={routes.about} element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
