import React, {Component} from 'react'
import Navbar from './Navbar'
import { connect } from 'react-redux';
import {getFoodFromLog} from '../store'
import {Grid, Segment} from 'semantic-ui-react'

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

    <Grid columns={1} divided>
      <Grid.Row stretched>
      <div id="displayContainer">
        <Segment className="display" id="cal">
          {/* <p className="macroText"> */}
          Calories:<br/>{this.props.state.cal.toFixed(2)}
          {/* </p>   */}
        </Segment>

        <Segment className="display" id="protein">
          {/* <p className="macroText"> */}
          Protein:<br/>{this.props.state.protein.toFixed(2)}
          {/* </p> */}
        </Segment>

        <Segment className="display" id="carb">
          {/* <p className="macroText"> */}
          Carb:<br/>{this.props.state.carb.toFixed(2)}
          {/* </p> */}
        </Segment>

        <Segment className="display" id="fat">
          {/* <p className="macroText"> */}
          Fat:<br/>{this.props.state.fat.toFixed(2)}
          {/* </p> */}
        </Segment>
      </div>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  )
 }
}

const mapStateToProps = (state) => {
  state.food.forEach((item) => {
    state.cal += Number(item.calories),
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

