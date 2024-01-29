import React from 'react';
import { useSelector } from 'react-redux';
import { getfavorite } from '../../features/movies/movieSlice';
import { MovieCard } from '../MovieCard/MovieCard';
import './FavouriteListing.scss';

const FavouriteListing = () => {
  const fav = useSelector(getfavorite);

  return (
    <div className='favouriteListing'>
      <div className='favourite-list'>
        <div className='favourite-container'>
          {fav.map((favItem, index) => (
            <MovieCard key={index} data={favItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavouriteListing;
