import { combineReducers } from 'redux';
import calculatorReducer from './state/calculator/reducer'

export default combineReducers({
  loan: calculatorReducer
});
