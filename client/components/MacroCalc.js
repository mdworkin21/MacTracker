import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import Navbar from './Navbar'

const MacroCalc = () => (
  <React.Fragment>
    <Navbar />
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input placeholder='First Name' />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder='Last Name' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  </React.Fragment>
)

export default MacroCalc