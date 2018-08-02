import React, {Component} from 'react'
import { Icon, Label, Menu, Table, Button } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {getFoodFromLog} from '../store'


class Log extends Component { 
  componentDidMount(){
    this.props.displayFood()
   
   }
  
  render(){
    return(
  <React.Fragment>
  <Table celled className="log">
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Food</Table.HeaderCell>
        <Table.HeaderCell>Protein</Table.HeaderCell>
        <Table.HeaderCell>Fat</Table.HeaderCell>
        <Table.HeaderCell>Carb</Table.HeaderCell>
        <Table.HeaderCell>Cal</Table.HeaderCell>
        <Table.HeaderCell>Edit</Table.HeaderCell> 
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {
        this.props.state.food.map((item) => {
          return (
            <React.Fragment key={item.id}>
          <Table.Row>
            <Table.Cell>
              <Label ribbon>{item.name}</Label>
            </Table.Cell>
            <Table.Cell>{item.protein}</Table.Cell>
            <Table.Cell>{item.fat}</Table.Cell>
            <Table.Cell>{item.carb}</Table.Cell>
            <Table.Cell>{item.calories}</Table.Cell>
            <Button basic color='red' content='X' className='deleteButton'/>
        </Table.Row>
          </React.Fragment>
            )
        })
      }
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
  </React.Fragment>
)
  }

}


const mapStateToProps = (state) => {
  console.log('STATE', state.food)
  return {
    state
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    displayFood: () => dispatch(getFoodFromLog())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Log)