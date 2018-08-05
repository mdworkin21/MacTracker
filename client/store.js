import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import regeneratorRuntime from "regenerator-runtime";
import axios from 'axios'



//Initial State
//Probably a good idea to make second store with search stuff and maybe a third with profile stuff
const initialState = {
  cal: 0,
  carb: 0,
  fat: 0,
  protein: 0,
  food: [],
  fgCode: '',
  dailyGoals: {
    calories: "",
    protein: "",
    carb: "",
    fat: ""
  }
}

//Constants for Action Types
const GET_FOOD_LOG = 'GET_FOOD_LOG'
const ADD_FOOD = 'ADD_FOOD'
const DELETE_FOOD = 'DELETE_FOOD'
const UPDATE_FOOD = 'UPDATE_FOOD'
const GET_FGCODE = 'GET_FGCODE'
const SET_GOALS = 'SET_GOALS'

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

const deleteFood = (id) => {
  return {
    type: DELETE_FOOD,
    id
  }
}

const updateFood = (food) => {
  return {
    type: UPDATE_FOOD,
    food
  }
}

export const getFgCode = (code) => {
  return {
    type: GET_FGCODE,
    code
  }
}

const setDailyGoals = (dailyGoals) => {
  return {
    type: SET_GOALS,
    dailyGoals
  }
}

//Thunks
export const addFoodToLog = food => {
  return async (dispatch) => {
    try{
      const response = await axios.post('/api/dailyLog', {
        name: food[0].name,
        calories: food[0].calories,
        protein: food[0].protein,
        carb: food[0].carb,
        fat: food[0].fat
      })
       const addedFood = response.data
       console.log(addedFood)
       const action = addFood(addedFood)
       dispatch(action)
    } catch(err){
       console.log(err)
    }
  }
}

export const getFoodFromLog = () => {
  return async(dispatch) => {
    try{
      const response = await axios.get('/api/dailyLog')
      const allFood = response.data
      const action = getFoodLog(allFood)
      dispatch(action)
    } catch(err) {
        console.log(err)
    }
  }
}

export const deleteItemFromLog = (id) => {
  return async(dispatch) => {
    try{
      await axios.delete(`/api/dailyLog/${id}`)
      const action = deleteFood(id)
      dispatch(action)
    } catch(err){
        console.log(err)
    }
  }
}

export const setDailyGoal = (dailyGoals) => {
  return async(dispatch) => {
    try{
        const response = await axios.post('/api/userProfile', {dailyGoals})
        const setGoals = response.data
        const action = setDailyGoals(setGoals)
        dispatch(action)
    } catch(err){
       console.log(err)
    }
  }
}

//Reducer
function reducer(state = initialState, action){
  switch (action.type){
    case GET_FOOD_LOG:
      return {...state, food: action.food }
    case ADD_FOOD: 
      return ({
        ...state,
        cal: state.cal + Number(action.food.calories),
        protein: state.protein + Number(action.food.protein),
        carb: state.carb + Number(action.food.carb),
        fat: state.fat + Number(action.food.fat), 
        food: action.food
      })
    case DELETE_FOOD:
      const deletedFood = state.food.filter((item) => {
        return item.id === action.id
      })
      console.log('DELETED', deletedFood)
      return {
        ...state, 
        cal: state.cal - Number(deletedFood[0].calories),
        protein: state.protein + Number(deletedFood[0].protein),
        carb: state.carb + Number(deletedFood[0].carb),
        fat: state.fat + Number(deletedFood[0].fat), 
        food: state.food.filter((item) => {
        return item.id !== action.id
      })}
    case UPDATE_FOOD: 
      return {...state, food: action.food}
    case GET_FGCODE:
      return {... state, fgCode: action.code}
    case SET_GOALS:
      return( 
        {
          ...state, 
          dailyGoals: {
            calories: action.dailyGoals.calGoal,
            protein: action.dailyGoals.proteinGoal,
            carb: action.dailyGoals.carbGoal,
            fat: action.dailyGoals.fatGoal
          }
        }
      )
    default:
      return state
  }
}

//store
const store = createStore(reducer, applyMiddleware(thunkMiddleware, createLogger()))

export default store