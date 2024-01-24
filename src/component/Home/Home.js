import React, { useEffect } from 'react';
import { MovieListing } from "../MovieListing/MovieListing";

import { useDispatch } from 'react-redux';
import { fetchAsynShows, fetchAsyncMovies } from '../../features/movies/movieSlice';

export const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const ShowText = "percy jackson";
  useEffect(() => {
    console.log('dispatch')
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsynShows(ShowText));
  }, [dispatch]);

  return (
    <div className='Home'>
      <div className='banner-img'></div>
      <MovieListing />
    </div>
  )
}
