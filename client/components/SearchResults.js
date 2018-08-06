import React, { Component } from "react";
import axios from "axios";
import regeneratorRuntime from "regenerator-runtime";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addFoodToLog } from "../store";
import { Card, Icon, Button, Header, Popup } from 'semantic-ui-react'



class SearchResults extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(id, event) {
    event.preventDefault();
   let addThisFood = this.props.nutrientArr.filter(item => {
      return item.ndbNum === id
    })
    this.props.addFood(addThisFood);
  }

  render() { 
    return (
    <div id="resultsGroup">
    <Card.Group itemsPerRow={3}>
    {
    this.props.nutrientArr.map(items => {
      return ( 
          <Card key={items.ndbNum}>
            <Card.Content id="foodName">{items.name}</Card.Content>
            <Card.Content>Cal {items.calories}</Card.Content>
            <Card.Content>Pro {items.protein}</Card.Content>
            <Card.Content>Fat {items.fat}</Card.Content>
            <Card.Content>Carb {items.carb}</Card.Content>
            {/* <img id='macroImage' src="https://cathe.com/wp-content/uploads/2016/06/500shutterstock_414287107.jpg"/> */}
            <Button onClick={(id) => this.handleSubmit(items.ndbNum, event)}>Add Food</Button>
            <p id="serving">Per 100 grams</p>
          </Card>
        );
    })
    }
  </Card.Group>
  </div>
   )}
}

const mapDispatchToProps = dispatch => {
  return {
    addFood: food => dispatch(addFoodToLog(food))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchResults);
