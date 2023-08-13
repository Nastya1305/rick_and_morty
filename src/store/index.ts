import { createStore } from "redux";
import { rootReducer } from "./filterReducer";
import { composeWithDevTools } from 'redux-devtools-extension';



export const store = createStore(rootReducer, composeWithDevTools())

