import React, { useEffect } from 'react'
import { FaCalendar, FaStar, FaClock, FaThumbsUp } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchMovieorShwDetails, getSelectedMoviesorShows } from '../../features/movies/movieSlice';
import "./MovieDetails.scss"
// import { useContext } from 'react'
// import { appcontext } from '../../features/context/Appcontext'

export const MovieDetails = () => {

  const { imdbID } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieorShwDetails(imdbID))
  }, [dispatch]);
  const data = useSelector(getSelectedMoviesorShows);
  
  // const { favourite, addtofavourite, removefromFavourite } = useContext(appcontext);

  // const handleadd=()=>{
  //   addtofavourite(data)
  //   console.log(favourite);
  // };

  // const handleremove=()=>{
  //   removefromFavourite(data.id)
  //   console.log(favourite);
  // }
  return (
    <div className='MovieDetails'>
      <div className='MovieDetails-left'>
        <div className='Movie-title'>{data.Title}</div>
        <div className='Movie-rating'>
          <span><FaStar style={{ color: '#FFD700' }} />IMDB Rating:{data.imdbRating}</span>
          <span><FaThumbsUp style={{ color: '#00FF00' }} /> IMDB Votes:{data.imdbVotes}</span>
          <span><FaClock style={{ color: '#FFA500' }} />Runtine:{data.Runtime}</span>
          <span><FaCalendar style={{ color: '#FF69B4' }} />Year:{data.Year}</span>
        </div>
        <div className='Movie-plot'>{data.Plot}</div>
        <div className='Movie-info'>
          <div>
            <span>Directors:</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars:</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Genres:</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Languages:</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards:</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>

      <div className='MovieDetails-right'>
        <img src={data.Poster} alt={data.Title}></img>
        {/* <button onClick={handleadd}>Add to Favourite</button>
        <button onClick={handleremove}>Remove from Favourite</button> */}
      </div>
    </div>
  )
}
