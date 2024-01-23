import React, { useEffect } from 'react';
import { MovieListing } from "../MovieListing/MovieListing";
import { movieApi } from "../../common/apis/movieApi";
import { APIKEY } from '../../common/apis/MovieApiKey';
export const Home = () => {

  useEffect(() => {
    const movieText = "Harry";
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?i=tt3896198&apikey=${APIKEY}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Err:", err);
        });
      console.log("The response from API", response);
    };
    fetchMovies();
  }, []);

  return (
    <div className='Home'>
      <div className='banner-img'></div>
      <MovieListing />
    </div>
  )
}
