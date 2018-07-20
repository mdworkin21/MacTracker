import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'


//Constants for Action Types


//Action Creators


//Thunks


//Reducer
function placeholdReducer(state = {}, action){
  return state
}

//store
const store = createStore(placeholdReducer, applyMiddleware(thunkMiddleware, createLogger()))

export default store