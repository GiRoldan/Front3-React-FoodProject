import React, { useEffect } from 'react'

const Mesa13Producto = ({pedido}) => {
  
    useEffect(() => {
        console.log('El componente ha sido actualizado');
        return () => {
            console.log('El componente fue desmontado');
          }
    }, [])
    //Este es el componente que se desmonta porque cdo hacemos click en cancelar, seteamos pedido a nada,
    //entonces si pedido es nada, no me tiene que mostrar Producto en esta logica:
    //{pedido && <Mesa13Producto pedido={pedido}/>}
    //pedo cdo pedido tiene un valor q no sea null, entonces ahi me tiene q mostrar Producto


    return (
    <li>
        {pedido}
    </li>
  )
}

export default Mesa13Producto
