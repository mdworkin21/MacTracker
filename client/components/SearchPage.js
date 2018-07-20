import React, {Component} from 'react'
import Navbar from './Navbar'

export default class SearchPage extends Component {
  constructor(){
    super()
    this.state = {
      food: {}
    }
  }

  render(){
    return (
    <React.Fragment>
      <Navbar />
      <h1>HELLO, POOP</h1>
    </React.Fragment>
    )
  }
}