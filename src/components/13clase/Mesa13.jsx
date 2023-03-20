import React, { useEffect, useState } from 'react'

const Mesa13 = (props) => {
  const [pedido, setPedido] = useState('')
  const [confirmaPedido, setConfirmaPedido] = useState('')

  useEffect(() => {
    console.log('Se montó el componente.');
    setTimeout(() => {
        setPedido('Pizza')
    }, 2000)
}, [])

useEffect(()=>{
  console.log('Se actualizó el componente.');
}, [pedido])

  return (
    <div>
      <h1>Su pedido:</h1>
      <h3>{pedido}</h3>
      <h3>{confirmaPedido}</h3>
      <button onClick={() => {
        setPedido('')
        &&
        setConfirmaPedido('El pedido fue cancelado')
        console.log('El pedido fue cancelado');
        }
        }>Cancelar pedido!</button>
    </div>
  )
}

export default Mesa13