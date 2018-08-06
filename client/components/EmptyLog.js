import React, {Component} from 'react'
import { Message, Button } from 'semantic-ui-react'
import Navbar from './Navbar';
import AddFood from './AddFood'

// const Eat = () => (
//   <React.Fragment>
//     <Navbar />
//   <Message id="eat">
//     <Message.Header id='emptLogMessage'>Empty Log</Message.Header>
//     <br/>
//     <p id="eatSomething">
//       Eat Something!
//     </p>
//   </Message>
//   </React.Fragment>
// )

class Eat extends Component {
  constructor(){
    super()
    this.state = {
      addForm: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event){
    event.preventDefault()
    this.setState({
      addForm: true
    })
  }
  render(){
    return this.state.addForm ? <AddFood /> : (
    <React.Fragment>
      <Navbar />
    <Message id="eat">
      <Message.Header id='emptLogMessage'>Empty Log</Message.Header>
      <br/>
      <p id="eatSomething">
        Eat Something!
      </p>
    <Button id="addSomeFood" onClick={this.handleSubmit}>Add Food Manually</Button>
    <Button id="bossyPants">Don't Tell Me How To Live!</Button>
    </Message>
    </React.Fragment>
    )
  }
}

export default Eat
