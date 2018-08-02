import React, {Component} from 'react'
import Navbar from './Navbar'
import { connect } from 'react-redux';
import {getFoodFromLog} from '../store'

class HomePage extends Component {
  componentDidMount(){
   this.props.displayFood()
  
  }

  

  render(){
  return (
    <React.Fragment>
      <Navbar />
      <h1 className="pageTitle" id="homePageTitle">MacTrack2018!</h1>
      <input type="text" className="searchBox"></input>
      <button type="submit" className="submitBtn">submit</button>

      <div id="displayContainer">
        <div className="display" id="cal">
          <p className="macroText">Calories:<br/>{this.props.state.cal.toFixed(2)}</p>  
        </div>

        <div className="display" id="protein">
          <p className="macroText">Protein:<br/>{this.props.state.protein.toFixed(2)}</p>
        </div>

        <div className="display" id="carb">
          <p className="macroText">Carb:<br/>{this.props.state.carb.toFixed(2)}</p>
        </div>

        <div className="display" id="fat">
          <p className="macroText">Fat:<br/>{this.props.state.fat.toFixed(2)}</p>
        </div>
      </div>
    </React.Fragment>
  )
 }
}

const mapStateToProps = (state) => {
  console.log(state.food)
  state.food.forEach((item) => {
    state.cal += Number(item.calories),
    state.carb += Number(item.fat),
    state.protein += Number(item.protein)    
})
  return {
   state
  }
 
}


const mapDispatchToProps = (dispatch) => {
  return {
    displayFood: () => dispatch(getFoodFromLog())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

