import React, { useEffect, useState } from 'react'

const SimpsonApi = () => {
    const [simpson, setSimpson] = useState([{}])
    const urlApi = 'https://thesimpsonsquoteapi.glitch.me/quotes'

    useEffect(() => {
        fetch(urlApi)
            .then(response => response.json())
            .then(data => setSimpson(data))
    }, [])

    console.log(simpson);

  return (
    <div>
      <h3>{simpson[0].character}</h3>
      <img src={simpson[0].image} alt="" />
    </div>
  )
}

export default SimpsonApi
