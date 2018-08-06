import React from 'react'
import {Menu} from 'semantic-ui-react'
import {connect} from 'react-redux'



const DisplayGoals = (props) => {
  return (
      <div id="goals">
       <Menu.Item name="Goals" id="title" className="goals">Goals</Menu.Item>
       <Menu.Item name="Cal" id="calGoal" className="goals">Cal: {props.dailyGoals.calories}</Menu.Item>
       <Menu.Item name="Protein" id="proteinGoal" className="goals">Protein: {props.dailyGoals.protein}</Menu.Item>
       <Menu.Item name="Carb" id="carbGoal" className="goals" >Carb: {props.dailyGoals.carb}</Menu.Item>
       <Menu.Item name="Fat" id="fatGoal" className="goals">Fat: {props.dailyGoals.fat}</Menu.Item>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    dailyGoals: state.dailyGoals
  }
}

export default connect(mapStateToProps)(DisplayGoals)