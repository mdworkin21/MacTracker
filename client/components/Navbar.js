import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
  return(
    <nav id="navBar">
      <Link to="/" id="homeLink">Home</Link>
      <Link to="/search" id="searchLink">Search</Link>
    </nav>
  )
}

export default Navbar