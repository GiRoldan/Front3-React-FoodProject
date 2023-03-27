import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Vegetarians = () => {
  return (
    <div>
      Lista de recetas vegetarianas, bien saludable!
      <Link to="/vegetarianas/veggie"><h3>Veggie</h3></Link>
      <Outlet/>
    </div>
  )
}

export default Vegetarians