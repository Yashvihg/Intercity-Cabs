import React from 'react'
import BackIcon from '../../assets/Back.png'
import NotificationIcon from '../../assets/notification.png'
import './header.css';
import { Link } from "react-router-dom";

const Header = ({children}) => {
  return (
    <header className='header'>
        <Link to="/localtrips"><button className='header-button'><img src={BackIcon} alt="back-icon" /></button></Link>
        <p className='header-travels'>{children}</p>
        <Link to="/"><button className='header-button'><img src={NotificationIcon} alt="notification-icon" /></button></Link>
    </header>
  )
}

export default Header