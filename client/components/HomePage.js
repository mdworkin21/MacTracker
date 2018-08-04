import React, {Component} from 'react'
import Navbar from './Navbar'
import { connect } from 'react-redux';
import {getFoodFromLog} from '../store'
import {Grid, Segment} from 'semantic-ui-react'
import SearchPage from './SearchPage';

class HomePage extends Component {
  componentDidMount(){
   this.props.displayFood()
  }

  render(){
  return (
    <React.Fragment>
      <Navbar />
      <h1 className="pageTitle" id="homePageTitle">Your Macros Are Showing</h1>
      <div id="displayContainer">
      <Grid>
        <Grid.Row>
          <Segment className="display" id="cal">
            Calories:<br/>{this.props.state.cal.toFixed(2)}
          </Segment>

          <Segment className="display" id="protein">
            Protein:<br/>{this.props.state.protein.toFixed(2)}
          </Segment>

          <Segment className="display" id="carb">
            Carb:<br/>{this.props.state.carb.toFixed(2)}
          </Segment>

          <Segment className="display" id="fat"> 
            Fat:<br/>{this.props.state.fat.toFixed(2)}
          </Segment>
          </Grid.Row>
        </Grid>
      </div>
      <SearchPage  />
    </React.Fragment>
  )
 }
}

const mapStateToProps = (state) => {
  state.food.forEach((item) => {
    state.cal = Number(item.calories) + state.cal,
    state.carb += Number(item.fat),
    state.protein += Number(item.protein)    
})
  return {state}
}


const mapDispatchToProps = (dispatch) => {
  return {
    displayFood: () => dispatch(getFoodFromLog())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

