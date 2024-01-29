import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { icon } from '../../Assets/Images/index';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import "./Header.scss";
import { fetchAsynShows, fetchAsyncMovies } from '../../features/movies/movieSlice';
import { FaHeart } from 'react-icons/fa';


export const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location =useLocation();
  const [searchterm, setsearchterm] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(searchterm));
    dispatch(fetchAsynShows(searchterm));
    setsearchterm('');
  }
  
  console.log('come to header');
  return (
    <div className='Header'>

      <div className='logo' onClick={() => { console.log('home'); navigate('/') }}>
        Movie App
      </div>
    {location.pathname==="/" && (
      <div className='Search-bar'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={searchterm}
            placeholder='Search Movies or Shows'
            onChange={(e) => setsearchterm(e.target.value)}>
          </input>
          <button type='submit'><FaSearch /></button>
        </form>
      </div>)}
      <div className='favourite' onClick={()=>navigate('/favourite')}>
        <FaHeart className='favourite-icon'/>
        <h4>Favourite</h4>
      </div>
      <div className='profile'>
        <img src={icon} alt='' />
      </div>
    </div>
  )
}
