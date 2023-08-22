import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filterReducer from 'store/reducers/FilterSlice';
import characterReducer from 'store/reducers/CharacterSlice';


const rootReducer = combineReducers({
    filterReducer,
    characterReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']








