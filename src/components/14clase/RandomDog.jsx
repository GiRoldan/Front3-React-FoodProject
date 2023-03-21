import React, { useEffect, useState } from 'react'

const RandomDog = () => {
    const [perrito, setPerrito] = useState({})
    const url = 'https://dog.ceo/api/breeds/image/random'

    const fetchData = () => {
        fetch(url)
            .then((response) => response.json())
            //response es la respuesta del fetch, luego lo convierto en un json
            //y me queda información procesada, es decir la DATA
            .then((data) => setPerrito(data))
    }

    //Fetch debe estar dentro de un useEffect para q se renderice una sola vez sino se re-renderiza muchas veces, con cada info
    useEffect(()=>{
        fetchData()
    }, [])

    console.log(perrito);

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <img src={perrito.message} alt="" width={300} height={300} />
      <button onClick={() => fetchData()}>Cambiar de perrito</button>
    </div>
  )
}

export default RandomDog
