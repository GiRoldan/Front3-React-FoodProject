import React, { useEffect, useState } from 'react'
import Mesa13Producto from './Mesa13Producto'

const Mesa13Pedido = () => {
  const [pedido, setPedido] = useState()

  useEffect(() => {
    console.log('Se montó el componente.');
    setTimeout(() => {
        setPedido('Pizza')
    }, 2000)
}, [])

  const cancelarPedido = () =>{
    setPedido()
    alert('El pedido ha sido cancelado!')
  }


  return (
    <div>
      <h1>Su pedido:</h1>
      {pedido && <Mesa13Producto pedido={pedido}/>}
      <button onClick={cancelarPedido}>Cancelar pedido!</button>
    </div>
  )
}

export default Mesa13Pedido