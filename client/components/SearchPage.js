import React, {Component} from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import EmptySearch from './EmptySearch';
import SearchResults from './SearchResults';
import regeneratorRuntime from "regenerator-runtime";

export default class SearchPage extends Component {
  constructor(){
    super()
    this.state = {
      calories: "",
      protein: "",
      fat: "",
      carbs: "",
      search: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event){
    event.preventDefault();

    //Axios request to get NDB Number
    const usdaApiURLSearch = 'https://api.nal.usda.gov/ndb/search/?'
    const apiKey = 'lFerxXHRcBpCKju21iibKnVDjpRnAwaMR0GyUyaP'
    const ndbNumRequest = await axios.get(usdaApiURLSearch + `format=json&q=${this.state.search}&sort=n&max=1&offset=0&api_key=${apiKey}`)
    

    //Axios request for nutrition info
    const usdaApiURLReport = 'https://api.nal.usda.gov/ndb/reports/?'
    const ndbNum = ndbNumRequest.data.list.item[0].ndbno
    const nutritionInfoRequest = await axios.get(usdaApiURLReport + `ndbno=${ndbNum}&type=b&format=json&api_key=${apiKey}` )

    //Maps results to state
    
    const nutrientArray = nutritionInfoRequest.data.report.food.nutrients.slice(0,5)

    let macros = {}
    nutrientArray.forEach((nutrient) => {
      if (nutrient.name === "Energy"){
         macros.calories = nutrient.value
      } else if (nutrient.name === "Protein"){
        macros.protein = nutrient.value
      } else if (nutrient.name === "Total lipid (fat)"){
          return macros.fat = nutrient.value
      } else if (nutrient.name === "Carbohydrate, by difference"){
          return macros.carbs = nutrient.value
      }
    })

    this.setState({
      calories: macros.calories,
      protein: macros.protein,
      fat: macros.fat,
      carbs: macros.carbs,
      search: ''
    })

    console.log('MACROS', this.state)

  }


  render(){
    return (
    <React.Fragment>
      <Navbar />
      <h1 className="pageTitle" id="searchPageTitle">Search</h1>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="search" className="searchBox" onChange={this.handleChange} value={this.state.search}></input>
        <button type="submit" className="submitBtn">submit</button>
      </form>

     
     <SearchResults state={this.state} />
     {/* <EmptySearch /> */}
      
    
  
    </React.Fragment>
    )
  }
}