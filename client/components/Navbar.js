import React from 'react'
import {Link} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'
import {connect} from 'react-redux'
import DisplayGoals from './DisplayGoals'


//Not dry but good enough for now
const Navbar = (props) => {
  return !props.dailyGoals.calories ? 
  ( 
    <Menu inverted>
        <Link to="/" id="homeLink" className="link">Home</Link>
        <Link to="/calc" id="searchLink" className="link">Calc</Link>
        <Link to="/log" id="searchLink" className="link">Log</Link>
    </Menu>
  ) : (
    <Menu inverted>
        <Link to="/" id="homeLink" className="link">Home</Link>
        <Link to="/calc" id="searchLink" className="link">Calc</Link>
        <Link to="/log" id="searchLink" className="link">Log</Link>
        <DisplayGoals />
    </Menu>
  )
}

const mapStateToProps = state => {
  return {
    dailyGoals: state.dailyGoals
  }
}

export default connect(mapStateToProps)(Navbar)


