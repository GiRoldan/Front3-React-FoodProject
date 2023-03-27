import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Card from '../components/Card'

const Home = () => {
    

  return (
    <div>
      <h1>Recetario DH</h1>
      <Outlet/>
        {/* Para trabajar con rutas anidadas, necesito Outlet,
        Outlet lo usamos en cada componentes donde se debería mostrar esa ruta anidada. */}
    </div>
  )
}

export default Home
