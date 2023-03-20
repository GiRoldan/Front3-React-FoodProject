import React, { useEffect, useState } from 'react'

const FuncComponent = (props) => {
    const [name, setName] = useState('Judith')
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('2° Se montó el componente de FUNCION. Este se ejecuta cdo se monta y cdo se actualiza.');
        setTimeout(() => {
            setName('Ciro')
        }, 5000)
        return() => {
            console.log('4° Se desmontó el componente de función.');
        }
    }, [])
    

    useEffect(()=>{
        console.log('3° Se actualizó el componente de función por el count-cambió el nombre.');
    }, [count])


    console.log('1° Se renderizó el componente de FUNCION. '
    + 'Los componentes de FCION no tienen constructor, q es lo q se ejecutaría 1ro. '
    + 'Solamente tenemos el RENDER.');
  return (
    <div>
      <h1>{props.titulo}</h1>
      <h3>{name}</h3>
      <button onClick={() => setCount (count+1)}>+</button>
      <h3>{count}</h3>
      <button onClick={() => setCount (count-1)}>-</button>
    </div>
  )
}

export default FuncComponent
