import React, {Component} from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {setDailyGoal} from '../store'
import HomePage from './HomePage'
import MacroCalc from './MacroCalc'

class DailyGoals extends Component{
  constructor(){
    super()
    this.state = {
      redirect: false,
      retry: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.tryAgain = this.tryAgain.bind(this)
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

  tryAgain(event){
    event.preventDefault()
    this.setState({
      retry: true
    })
  }

  render(){
   if (this.state.redirect){
     return <HomePage />
   } else if (this.state.retry){
     return <MacroCalc />
   } else {
     return (
      <div className="addCard">
        <Card>
          <Card.Content header='Your Daily Goals' />
          <Card.Content description={`Calories: ${this.props.state.totals.calGoal} calories`}  />
          <Card.Content description={`Protein: ${this.props.state.totals.proteinGoal} grams`} /> 
          <Card.Content description={`Carb: ${this.props.state.totals.carbGoal} grams`} />
          <Card.Content description={`Fat: ${this.props.state.totals.fatGoal} grams`} />
          <Card.Content extra>
            {/* <Icon name='plus' />
            Click to set daily goals */}
            <div id="buttonContainer">
              <Button id="buttonSetGoals" onClick={this.handleSubmit}> Set as Daily Goal?</Button>
              <Button id="bossyPants2" onClick={this.tryAgain}> Nah, Let Me Try Again </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    )
   } 
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    setGoals: (goals) => dispatch(setDailyGoal(goals))
  }
}

export default connect(null, mapDispatchToProps)(DailyGoals)