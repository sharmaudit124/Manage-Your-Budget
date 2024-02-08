import { combineReducers } from "redux";
import budgetReducer from './budgetReducer';

const rootReducer = combineReducers({
    budget: budgetReducer,
  });
   
   
  export default rootReducer;
