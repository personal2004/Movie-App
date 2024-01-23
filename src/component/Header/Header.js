import React from 'react'
import { Link } from 'react-router-dom'
import {icon} from '../../Assets/Images/index';
import "./Header.scss";
export const Header = () => {
  return (
    <div className='Header'>
     <Link to='/'>
      <div className='logo'>Movie App</div>
     </Link>
     <div className='profile'>
      <img src={icon} alt=''/>
     </div>
    </div>
  )
}
