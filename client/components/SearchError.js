import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'


const SearchError = () => {
  return (
    <h1>Sorry, we don't have that item. Please Try again.</h1>
  )
}

export default SearchError

// import React from 'react'
// import { Button, Header, Image, Modal } from 'semantic-ui-react'

// const SearchError = (props) => (
//   <Modal open={props.error}>
//     <Modal.Header>Select a Photo</Modal.Header>
//     <Modal.Content image>
//       <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
//       <Modal.Description>
//         <Header>Default Profile Image</Header>
//         <p>We've found the following gravatar image associated with your e-mail address.</p>
//         <p>Is it okay to use this photo?</p>
//       </Modal.Description>
//     </Modal.Content>
//   </Modal>
// )

// export default SearchError