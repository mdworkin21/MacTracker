import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import regeneratorRuntime from "regenerator-runtime";
import axios from 'axios'



//Initial State
const initialState = {
  cal: 0,
  carb: 0,
  fat: 0,
  protein: 0,
  food: []
}

//Constants for Action Types
const GET_FOOD_LOG = 'GET_FOOD_LOG'
const ADD_FOOD = 'ADD_FOOD'
const DELETE_FOOD = 'DELETE_FOOD'
const UPDATE_FOOD = 'UPDATE_FOOD'

//Action Creators
const getFoodLog = (food) => {
  return {
    type: GET_FOOD_LOG,
    food
  }
}

const addFood = (food) => {
  return {
    type: ADD_FOOD,
    food
  }
}

const deleteFood = (food) => {
  return {
    type: DELETE_FOOD,
    food
  }
}

const updateFood = (food) => {
  return {
    type: UPDATE_FOOD,
    food
  }
}


//Thunks
export const addFoodToLog = food => {
  return async (dispatch) => {
    const newFood = await axios.post('/api/dailyLog', {
      name: food.state.name,
      calories: food.state.calories,
      protein: food.state.protein,
      carb: food.state.carb,
      fat: food.state.fat
    })
  }
}

export const getFoodFromLog = () => {
  return async(dispatch) => {
    const response = await axios.get('/api/dailyLog')
    console.log(response.data)
    const allFood = response.data
    const action = getFoodLog(allFood)
    dispatch(action)
  }
}


//Reducer
function placeholdReducer(state = initialState, action){
  switch (action.type){
    case GET_FOOD_LOG:
      return {...state, food: action.food }
    case ADD_FOOD: 
      return {...state, food: action.food}
    case DELETE_FOOD:
      return {...state, food: action.food}
    case UPDATE_FOOD: 
      return {...state, food: action.food}
    default:
      return state
  }
  
}

//store
const store = createStore(placeholdReducer, applyMiddleware(thunkMiddleware, createLogger()))

export default store