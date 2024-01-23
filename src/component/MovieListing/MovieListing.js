import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movies/movieSlice'
import { MovieCard } from '../MovieCard/MovieCard'
import "./MovieListing.scss"

export const MovieListing = () => {
  const movie = useSelector(getAllMovies);
  console.log(movie);
  let renderMovies = '';
  renderMovies = movie.Response === "True" ? (
    console.log('y'),
    movie.Search.map((movie, index) => {
      return (<MovieCard key={index} data={movie} />)
    })
  ) : (
    <div className='movies-error'>
      <h2>{movie.Error}</h2>
    </div>
  );
  return (
    <div className='MovieListing'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>
          {renderMovies}
        </div>
      </div>
    </div>
  )
}
