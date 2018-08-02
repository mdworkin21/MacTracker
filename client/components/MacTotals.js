import React from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'

const DailyGoals = (props) => {
  return (
    <div className="addCard">
      <Card>
        <Card.Content header='Your Daily Goals' />
        <Card.Content description={`Calories: ${props.state.totals.calGoal} calories`}  />
        <Card.Content description={`Protein: ${props.state.totals.proteinGoal} grams`} /> 
        <Card.Content description={`Carb: ${props.state.totals.carbGoal} grams`} />
        <Card.Content description={`Fat: ${props.state.totals.fatGoal} grams`} />
        <Card.Content extra>
          <Icon name='plus' />
          Click to set daily goals
          <Button />
        </Card.Content>
      </Card>
    </div>
  )
}

export default DailyGoals