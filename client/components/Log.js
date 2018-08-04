import React, {Component} from 'react'
import { Icon, Label, Menu, Table, Button, Form } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {getFoodFromLog, deleteItemFromLog} from '../store'
import Eat from './EmptyLog'
import Navbar from './Navbar';


class Log extends Component { 
  componentWillMount(){
    this.props.displayFood()
   }
  
  render(){
    return(
      !this.props.state.food.length ? <Eat /> :
  <React.Fragment>
    <Navbar />
  <Table celled className="log">
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Food</Table.HeaderCell>
        <Table.HeaderCell>Protein</Table.HeaderCell>
        <Table.HeaderCell>Fat</Table.HeaderCell>
        <Table.HeaderCell>Carb</Table.HeaderCell>
        <Table.HeaderCell>Cal</Table.HeaderCell>
        <Table.HeaderCell>Amount (oz)</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell> 
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {
        this.props.state.food.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <Table.Row>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.protein}</Table.Cell>
                <Table.Cell>{item.fat}</Table.Cell>
                <Table.Cell>{item.carb}</Table.Cell>
                <Table.Cell>{item.calories}</Table.Cell>
                <Table.Cell><Form.Input placeholder='2 Wide' width={1} /></Table.Cell>
                <Table.Cell><Button type="button" basic color='red' content='X' className='deleteButton' onClick={(id) => this.props.deleteFood(item.id)}/></Table.Cell>
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
  return {
    state
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    displayFood: () => dispatch(getFoodFromLog()),
    deleteFood: (id) => {
      console.log("CLICKED")
      dispatch(deleteItemFromLog(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Log)