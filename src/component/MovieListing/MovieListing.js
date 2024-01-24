import React from 'react'
import { useSelector } from 'react-redux'
import { getAllShows, getAllMovies } from '../../features/movies/movieSlice'
import { MovieCard } from '../MovieCard/MovieCard'
import "./MovieListing.scss"

export const MovieListing = () => {
  const movie = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  console.log(movie);

  let renderMovies, renderShows = '';

  renderMovies = movie.Response === "True" ? (
    movie.Search.map((movie, index) => {
      return (<MovieCard key={index} data={movie} />)
    })
  ) : (
    <div className='movies-error'>
      <h2>{movie.Error}</h2>
    </div>
  );

  renderShows = shows.Response === "True" ? (
    console.log(shows),
    shows.Search.map((shows, index) => {
      return (<MovieCard key={index} data={shows} />)
    })
  ) : (
    <div className='movies-error'>
      <h2>{shows.Error}</h2>
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
      <div className='show-list'>
        <h2>Shows</h2>
        <div className='movie-container'>
          {renderShows}
        </div>
      </div>
    </div>
  )
}
