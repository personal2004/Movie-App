import React from 'react'
import { Link } from 'react-router-dom'
import './MovieCard.scss'

export const MovieCard = ({ data }) => {


  return (
    
    <Link to={`/movie/${data.imdbID}`}>
    {data.Poster!=='N/A' &&
    <div className='MovieCard'>
        <div className='MovieCard-Image'>
           <img src={data.Poster} alt={data.Title} />
        </div>
        <div className='MovieCard-info'>
          <h4>{data.Title}</h4>
          <p>{data.Year}</p>
        </div>
        
    </div>}
    </Link>
  )
}
