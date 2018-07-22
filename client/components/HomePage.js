import React from 'react'
import Navbar from './Navbar'

const HomePage = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <h1 className="pageTitle" id="homePageTitle">MacTrack2018!</h1>
      <input type="text" className="searchBox"></input>
      <button type="submit" className="submitBtn">submit</button>

      <div id="displayContainer">
        <div className="display" id="cal">
          <p className="macroText">Calories</p>  
        </div>

        <div className="display" id="protein">
          <p className="macroText">Protein</p>
        </div>

        <div className="display" id="carb">
          <p className="macroText">Carb</p>
        </div>

        <div className="display" id="fat">
          <p className="macroText">Fat</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HomePage

