import counterReducer from './counterReducer'
import loginLogOutReducer from './loginLogOutReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  counter: counterReducer,
  loginToggle: loginLogOutReducer
})

export default allReducers;
