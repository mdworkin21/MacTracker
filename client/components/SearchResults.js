import React, { Component } from "react";
import axios from "axios";
import regeneratorRuntime from "regenerator-runtime";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addFoodToLog } from "../store";

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
    return this.props.nutrientArr.map(items => {
      return (
        <div className="cardContainer" key={items.ndbNum}>
          <h1 id="foodName">{items.name}</h1>
          <div id="nutrientList">
            <p>Cal {items.calories}</p>
            <p>Pro {items.protein}</p>
            <p>Fat {items.fat}</p>
            <p>Carb {items.carb}</p>
          </div>
          <button id="addFood" onClick={(id) => this.handleSubmit(items.ndbNum, event)}>
            Add Item
          </button>
          <p id="serving">Per 100 grams</p>
        </div>
      );
    });
  }
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
