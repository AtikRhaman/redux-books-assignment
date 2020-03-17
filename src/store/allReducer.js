import { combineReducers } from "redux";
import bookReducer from "./bookReducer";
import operationReducer from "./operationReducer";

const allReducer = combineReducers({
  operations: operationReducer,
  books: bookReducer
});

export default allReducer;
