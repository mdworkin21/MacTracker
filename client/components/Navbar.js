import React from 'react'
import {Link} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'


const Navbar = (props) => {
  return(
    <nav id="navBar">
          <Link to="/" id="homeLink" className="link">Home</Link>
          <Link to="/search" id="searchLink" className="link">Search</Link>
          <Link to="/calc" id="searchLink" className="link">Calc</Link>
          <Link to="/log" id="searchLink" className="link">Log</Link>
    </nav>
    
  )
}

export default Navbar


