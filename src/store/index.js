import { createStore, combineReducers } from "redux";
import {cashReducer} from "./cashReducer";
import { customerReducer } from "./customerReducer";

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer,
})

export const store = createStore(rootReducer,  window._REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION__());