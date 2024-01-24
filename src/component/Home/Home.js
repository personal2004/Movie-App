import React, { useEffect } from 'react';
import { MovieListing } from "../MovieListing/MovieListing";

import { useDispatch } from 'react-redux';
import { fetchAsynShows, fetchAsyncMovies } from '../../features/movies/movieSlice';

export const Home = () => {
  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsynShows());
  }, [dispatch]);

  return (
    <div className='Home'>
      <div className='banner-img'></div>
      <MovieListing />
    </div>
  )
}
