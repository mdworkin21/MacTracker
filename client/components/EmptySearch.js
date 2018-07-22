import React from 'react'

const EmptySearch = (props) => {
  return (
    <div className="cardContainer">
      <div id="instructions">
        <p>Search by name, company, or number</p>
      </div>
    </div>

  )
}

export default EmptySearch

//You'll eventually render this in the Search component when state is empty. 
//Use a ternary to determine whther to render this component, or not
//for now use a link tag from other page so you can see view