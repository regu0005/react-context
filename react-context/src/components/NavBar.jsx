import React from 'react'
import '../App.css';

export const NavBar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li><a href="/">Users</a></li>
        <li><a href="/favs">Favourites</a></li>
      </ul>
    </nav>
  )
}
