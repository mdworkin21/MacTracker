import React, {Component} from 'react'
import axios from 'axios'
import regeneratorRuntime from "regenerator-runtime";
import {Redirect} from 'react-router-dom'

export default class SearchResults extends Component {
  constructor(){
    super()
    this.state = {
      redirect: false

    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(event){
    event.preventDefault()

    //Axios Post Request to DB DailyLog
    try{
     const newFood = await axios.post('/api/search', {
        name: this.props.state.name,
        calories: this.props.state.calories,
        protein: this.props.state.protein,
        carb: this.props.state.carb,
        fat: this.props.state.fat
      })
      this.setState({redirect: true})
    }catch(err){
      console.log(err)
    }
  }

  render(){
    if (this.state.redirect){
      return <Redirect to='/' />
    }
    return (
      <div className="cardContainer">
        <h1 id="foodName">{this.props.state.name}</h1>
        <div id="nutrientList">
          <p>Cal   {this.props.state.calories}</p>
          <p>Pro   {this.props.state.protein}</p>
          <p>Fat   {this.props.state.fat}</p>
          <p>Carb  {this.props.state.carb}</p>
        </div>
          <button id="addFood" onClick={this.handleSubmit}>Add Item</button>
          <p id="serving">Per 100 grams</p>
      </div>
  
    )
  }
}
