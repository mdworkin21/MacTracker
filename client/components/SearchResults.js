import React from 'react'

const SearchResults = (props) => {
  console.log(props.state)
  return (
    <div className="cardContainer">
      <h1 id="foodName">Name</h1>
      <div id="nutrientList">
        <p>Cal{props.state.calories}</p>
        <p>Pro{props.state.protein}</p>
        <p>Fat{props.state.fat}</p>
        <p>Carb{props.state.carbs}</p>
      </div>
        <button id="addFood">Add Item</button>
        <p id="serving">Per 100 grams</p>
    </div>

  )
}

export default SearchResults
//might need to change this to class component to take care of button submission