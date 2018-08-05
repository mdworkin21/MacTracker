import React, {Component} from 'react'
import { Button, Form } from 'semantic-ui-react'
import {addFoodToLog} from '../store'
import {connect} from 'react-redux'
import {Log} from './Log'


class AddFood extends Component { 

  constructor(){
    super()
    this.state = {
      name: '',
      calories: '',
      protein: '',
      carb: '',
      fat: '',
      redirect: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    const addThisFood = {
      name: this.state.name,
      calories: this.state.calories,
      protein: this.state.protein,
      carb: this.state.carb,
      fat: this.state.fat
    }

    this.props.addFood([addThisFood])

    this.setState({
      name: '',
      calories: '',
      protein: '',
      carb: '',
      fat: '',
      redirect: true
    })
  }


  render(){
  return ( 
    <Form onSubmit={this.handleSubmit}>
      <Form.Field>
        <label>Food</label>
        <input placeholder="Food Name" name="name" value={this.state.name} onChange={this.handleChange}/>
      </Form.Field>
      <Form.Field>
        <label>Cal</label>
        <input type="number" placeholder="Calories" name="calories" value={this.state.calories} onChange={this.handleChange}/>
      </Form.Field>
      <Form.Field>
        <label>Protein</label>
        <input type="number" placeholder="Protein" name="protein" value={this.state.protein} onChange={this.handleChange}/>
      </Form.Field>
      <Form.Field>
        <label>Carb</label>
        <input type="number" placeholder="Carbs" name="carb" value={this.state.carb} onChange={this.handleChange}/>
      </Form.Field>
      <Form.Field>
        <label>Fat</label>
        <input type="number" placeholder="Fat" name="fat" value={this.state.fat} onChange={this.handleChange}/>
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  )
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
)(AddFood);
