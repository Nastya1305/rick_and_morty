import { FilterState, FilterAction, FilterActionTypes } from "types/filter";
import { combineReducers } from "redux";


const initialState: FilterState = {
    name: '',
    species: '',
    type: '',
    gender: '',
    status: ''
}

const filterReducer = (state = initialState, action: FilterAction): FilterState => {
    switch (action.type) {
        case FilterActionTypes.SET_NAME:
            return { ...state, name: action.payload }
        case FilterActionTypes.SET_SPECIES:
            return { ...state, species: action.payload }
        case FilterActionTypes.SET_TYPE:
            return { ...state, type: action.payload }
        case FilterActionTypes.SET_GENDER:
            if (action.payload === 'all') {
                return { ...state, gender: '' }
            }
            return { ...state, gender: action.payload }
        case FilterActionTypes.SET_STATUS:
            if (action.payload === 'all') {
                return { ...state, status: '' }
            }
            return { ...state, status: action.payload }
        default:
            return state
    }
}


export const rootReducer = combineReducers({
    filter: filterReducer,
})

export type RootState = ReturnType<typeof rootReducer>