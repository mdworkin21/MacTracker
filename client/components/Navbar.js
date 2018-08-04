import React from 'react'
import {Link} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'
import SearchPage from './SearchPage'

const Navbar = (props) => {
  return(
    <Menu inverted>
          <Link to="/" id="homeLink" className="link">Home</Link>
          <Link to="/calc" id="searchLink" className="link">Calc</Link>
          <Link to="/log" id="searchLink" className="link">Log</Link>
    </Menu>
    
  )
}

export default Navbar


