import { createStore } from "redux";
import { rootReducer } from "./filterReducer";



export const store = createStore(rootReducer)