import React, {Component} from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import EmptySearch from './EmptySearch';
import SearchResults from './SearchResults';
import regeneratorRuntime from "regenerator-runtime";
import SearchError from './SearchError';
import { Form, Header, Button, Modal} from 'semantic-ui-react'
import digDeep from '../api/usdaApi'
import DropDownFoodGroups from './FoodGroups';
import {connect} from 'react-redux'

//This file's a mess and needs refactoring
class SearchPage extends Component {
  constructor(){
    super()
    this.state = {
      search: "",
      nutrientArr: [],
      names: [],
      options: []
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
      const ndbNumRequest = await axios.get(usdaApiURLSearch + `format=json&q=${this.state.search}&sort=r&max=50&offset=0&lt=g&ds=&fg=${this.props.fgCode}&api_key=${apiKey}`)
      
      //Item Name//need to figure out slice
      const itemName = ndbNumRequest.data.list.item
      const names = []
      for (let i = 0; i < itemName.length; i++){
        let sliceUpTo = itemName[i].name.indexOf('9')
        names.push(itemName[i].name)
      }

      // Axios request for nutrition info
      const usdaApiURLReport = 'https://api.nal.usda.gov/ndb/reports/?'
      const ndbArr = ndbNumRequest.data.list.item
      let ndbs = []
      let allNDBS = []
      ndbArr.forEach((food) => {
          const ndbNum = food.ndbno
          allNDBS.push(ndbNum)
          const nutritionInfoRequest = axios.get(usdaApiURLReport + `ndbno=${ndbNum}&type=b&format=json&api_key=${apiKey}` )
          ndbs.push(nutritionInfoRequest)
    })
      let arrOfndb = await Promise.all(ndbs)
      let nutrientArray = []
      arrOfndb.forEach(nutrients => {
        nutrientArray.push(nutrients.data.report.food.nutrients.slice(0,5))
      })

      //Gets nutrition infoOut
      const result = digDeep(nutrientArray)
     
      //Map names and NDB num to nutrition list
        for (let i = 0; i < names.length; i++){
          result[i].name = names[i]
          result[i].ndbNum = allNDBS[i]
        }
      this.setState({
        search: '',
        nutrientArr: result,
      })
    } catch(err){
      //need better err handling. Should render SearchErr component
      alert('Sorry, we don\'t have that')
      this.setState({
        err: true,
        search: ""
      })
      console.log(err)
    }
  }

//This is better than before but still needs work. Probagbly better way to do this. Maybe Put form in own component
  render(){
        return (
          <React.Fragment>
          <div className='searchStuff'>
          <Form onSubmit={this.handleSubmit} className="searchBox">
            <Form.Field >
            <input type="text" name="search"  onChange={this.handleChange} value={this.state.search}/>
            <div className='submitBtn'>
              <Button onClick={this.handleSubmit} icon='search' type="submit" />
            </div>
            </Form.Field>
            <div id="dropDown">
            <DropDownFoodGroups/>
            </div>
          </Form>
        </div>
          <div id="searchResults">
          <SearchResults nutrientArr={this.state.nutrientArr} />
          </div>
        </React.Fragment>
        )
    }
 }

const mapStateToProps = (state) => {
  return {
    fgCode: state.fgCode 
  }
}

export default connect(mapStateToProps)(SearchPage)