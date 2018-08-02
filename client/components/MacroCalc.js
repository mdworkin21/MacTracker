import React, { Component } from 'react'
import { Form, Popup} from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class MacCalc extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form className="macCalc">
        <Form.Group widths='equal'>
          <Form.Input fluid label='Age' placeholder='Age' />
          <Form.Select fluid label='Gender' options={options} placeholder='Gender' />
          <Form.Input fluid label='Height' placeholder='Feet' />
          <Form.Input fluid label='Height' placeholder='Inches' />
          <Form.Input fluid label='Weight (pds)' placeholder='Weight (pds)' />
        </Form.Group>
        <Form.Group inline>
          <label>Activity Level</label>
          <Popup 
            trigger={<Form.Radio
            label='Lightly Active'
            value='sm'
            checked={value === 'light'}
            onChange={this.handleChange}
            />}
          content="Moderate exercise with sedentary job."
          basic />

          <Popup 
            trigger={<Form.Radio
            label='Moderately Active'
            value='sm'
            checked={value === 'moderate'}
            onChange={this.handleChange}
            />}
          content="Intense exercise with sedentary job."
          basic />

          <Popup 
            trigger={<Form.Radio
            label='Very Active'
            value='sm'
            checked={value === 'very'}
            onChange={this.handleChange}
            />}
          content="Moderate exercise and active job."
          basic />

          <Popup 
            trigger={<Form.Radio
            label='Extremely Active'
            value='sm'
            checked={value === 'extreme'}
            onChange={this.handleChange}
            />}
          content="Intense exercise and active job."
          basic />
        </Form.Group>
        
        <Form.Group inline>
        <label>Fitness Goals</label>
        <Form.Radio
            label='Lose Weight'
            value='sm'
            checked={value === 'lost'}
            onChange={this.handleChange}
            />

        <Form.Radio
            label='Maintain Weight'
            value='sm'
            checked={value === 'lost'}
            onChange={this.handleChange}
            />

        <Form.Radio
            label='Gain Weight'
            value='sm'
            checked={value === 'lost'}
            onChange={this.handleChange}
            />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default MacCalc