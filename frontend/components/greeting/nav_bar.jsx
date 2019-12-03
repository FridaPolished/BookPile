import React from 'react';
import {Link} from 'react-router-dom';
import NavBarContainer from './nav_bar_container';

const NavBar = ({currentUser, logout}) => {
  if (currentUser) {
    return (
       <nav className='top-bar'>
         <div>
            <Link to='/shelves'>My books</Link>
            <Link to='/'>Browse</Link>
          </div>
        </nav>
    )
  } else {
    return ( 
      <div></div>
    )
  }

};

export default NavBar;



