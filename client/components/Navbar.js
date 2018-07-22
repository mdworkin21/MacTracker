import React from 'react'
import {Link} from 'react-router-dom'



const Navbar = (props) => {
  return(
    <nav id="navBar">
      <Link to="/" id="homeLink" className="link">Home</Link>
      <Link to="/search" id="searchLink" className="link">Search</Link>
    </nav>
  )
}

export default Navbar