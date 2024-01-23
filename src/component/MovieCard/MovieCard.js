import React from 'react'
import './MovieCard.scss'
export const MovieCard = ({ data }) => {
  return (
    <div className='MovieCard'>
      <div className='MovieCard-top'>
        <img src={data.Poster} alt={data.Title} />
      </div>
        <div className='MovieCard-info'>
          <h4>{data.Title}</h4>
          <p>{data.Year}</p>
        </div>
    </div>
  )
}
