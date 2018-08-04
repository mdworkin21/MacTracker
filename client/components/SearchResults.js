import React, { Component } from "react";
import axios from "axios";
import regeneratorRuntime from "regenerator-runtime";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addFoodToLog } from "../store";
import { Card, Icon, Button } from 'semantic-ui-react'


class SearchResults extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(id, event) {
    event.preventDefault();
   let addThisFood = this.props.nutrientArr.filter(item => {
      return item.ndbNum === id
    })
    this.props.addFood(addThisFood);
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    
    return( 
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
            <Button onClick={(id) => this.handleSubmit(items.ndbNum, event)}>Add Food</Button>
            <p id="serving">Per 100 grams</p>
          </Card>
      );
    })
    }
  </Card.Group>
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
