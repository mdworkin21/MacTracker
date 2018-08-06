import React, {Component} from 'react'
import Navbar from './Navbar'
import { connect } from 'react-redux';
import {getFoodFromLog, getFoodTotals} from '../store'
import {Grid, Segment, Image, Divider} from 'semantic-ui-react'
import SearchPage from './SearchPage';


class HomePage extends Component {
  componentDidMount(){
   this.props.displayTotals()
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
            Calories<br/><br/>{this.props.state.cal.toFixed(2)}
          </Segment>

          <Segment className="display" id="protein">
            Protein<br/><br/>{this.props.state.protein.toFixed(2)}
          </Segment>

          <Segment className="display" id="carb">
            Carb<br/><br/>{this.props.state.carb.toFixed(2)}
          </Segment>

          <Segment className="display" id="fat"> 
            Fat<br/><br/>{this.props.state.fat.toFixed(2)}
          </Segment>
          </Grid.Row>
        </Grid>
      </div>
      <Divider />
      <SearchPage  />
    </React.Fragment>
  )
 }
}

const mapStateToProps = (state) => {
  return {state}
}

const mapDispatchToProps = (dispatch) => {
  return {
    displayTotals: () => dispatch(getFoodTotals())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

