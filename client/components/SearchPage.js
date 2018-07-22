import React, {Component} from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import EmptySearch from './EmptySearch';
import SearchResults from './SearchResults';
import regeneratorRuntime from "regenerator-runtime";
import SearchError from './SearchError';

export default class SearchPage extends Component {
  constructor(){
    super()
    this.state = {
      name: "",
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

    try{

      //Axios request to get NDB Number
      const usdaApiURLSearch = 'https://api.nal.usda.gov/ndb/search/?'
      const apiKey = 'lFerxXHRcBpCKju21iibKnVDjpRnAwaMR0GyUyaP'
      const ndbNumRequest = await axios.get(usdaApiURLSearch + `format=json&q=${this.state.search}&sort=r&max=1&offset=0&api_key=${apiKey}`)
      // console.log(ndbNumRequest)
      
      
      //Axios request for nutrition info
      const usdaApiURLReport = 'https://api.nal.usda.gov/ndb/reports/?'
      const ndbNum = ndbNumRequest.data.list.item[0].ndbno
      const itemName = ndbNumRequest.data.list.item[0].name
      const nutritionInfoRequest = await axios.get(usdaApiURLReport + `ndbno=${ndbNum}&type=b&format=json&api_key=${apiKey}` )
      console.log(itemName)
  
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
        name: itemName,
        calories: macros.calories,
        protein: macros.protein,
        fat: macros.fat,
        carbs: macros.carbs,
        search: ''
      })
    } catch(err){
      //need better err handling. Should render SearchErr component
      console.log(err)
    }
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