import React from 'react'

const Card = ({recipe}) => {
  return (
    <div className='card'>
        <h4>{recipe.title}</h4>
        <img src={recipe.image} alt="" className='card-img' />
    </div>
  )
}

export default Card
