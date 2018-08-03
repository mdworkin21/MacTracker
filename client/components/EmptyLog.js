import React from 'react'
import { Message } from 'semantic-ui-react'
import Navbar from './Navbar';

const Eat = () => (
  <React.Fragment>
    <Navbar />
  <Message id="eat">
    <Message.Header>Empty Log</Message.Header>
    <p>
      Eat Something!
    </p>
  </Message>
  </React.Fragment>
)

export default Eat
