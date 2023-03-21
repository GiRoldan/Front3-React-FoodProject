import React from 'react'
import { useState } from 'react'
import ClassComponent from './ClassComponent'
import FuncComponent from './FuncComponent'
import Mesa13 from './Mesa13'

const AppMesa13 = () => {

   const [toggle, setToggle] = useState(false)


  return (
    <div className="App">
       {/* {toggle ?
            <ClassComponent titulo='Soy el componente de CLASE'/>
            :
            <FuncComponent titulo='Soy el componente de FUNCION'/>
        }
        <button onClick={() => setToggle(!toggle)}>
            Cambiar a componente de {toggle ? 'funcion' : 'clase' }
        </button> */}

        <p>**************************************************************************************************</p>
        <h2>Mesas de trabajo clase 13: </h2>
        <Mesa13/>
    </div>
  )

}

export default AppMesa13
