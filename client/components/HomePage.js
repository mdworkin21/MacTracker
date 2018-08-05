import React, {Component} from 'react'
import Navbar from './Navbar'
import { connect } from 'react-redux';
import {getFoodFromLog, getFoodTotals} from '../store'
import {Grid, Segment, Image} from 'semantic-ui-react'
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
      {/* <Image id="pyramid" src="http://www.healthy-diet-healthy-you.com/images/Food_Guide_Pyramid_1992_USDA.jpg" size="medium" /> */}
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

