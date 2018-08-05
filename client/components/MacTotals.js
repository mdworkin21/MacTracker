import React, {Component} from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {setDailyGoal} from '../store'
import HomePage from './HomePage'

class DailyGoals extends Component{
  constructor(){
    super()
    this.state = {
      redirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.setGoals({
      calories: this.props.state.totals.calGoal,
      protein: this.props.state.totals.proteinGoal,
      carb: this.props.state.totals.carbGoal,
      fat: this.props.state.totals.fatGoal
    })
    this.setState({
      redirect: true
    })
  }

  render(){
   return this.state.redirect ? <HomePage /> :
     (
      <div className="addCard">
        <Card>
          <Card.Content header='Your Daily Goals' />
          <Card.Content description={`Calories: ${this.props.state.totals.calGoal} calories`}  />
          <Card.Content description={`Protein: ${this.props.state.totals.proteinGoal} grams`} /> 
          <Card.Content description={`Carb: ${this.props.state.totals.carbGoal} grams`} />
          <Card.Content description={`Fat: ${this.props.state.totals.fatGoal} grams`} />
          <Card.Content extra>
            <Icon name='plus' />
            Click to set daily goals
            <Button onClick={this.handleSubmit}/>
          </Card.Content>
        </Card>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    setGoals: (goals) => dispatch(setDailyGoal(goals))
  }
}

export default connect(null, mapDispatchToProps)(DailyGoals)