import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Gender, Status } from "types/character";
import { FilterState } from "types/filter";


const initialState: FilterState = {
    name: '',
    species: '',
    type: '',
    gender: '',
    status: ''
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setName(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
        setSpecies(state, action: PayloadAction<string>) {
            state.species = action.payload;
        },
        setType(state, action: PayloadAction<string>) {
            state.type = action.payload;
        },
        setGender(state, action: PayloadAction<Gender | 'all'>) {
            state.gender = (action.payload === 'all') ? '' : action.payload;
        },
        setStatus(state, action: PayloadAction<Status | 'all'>) {
            state.status = (action.payload === 'all') ? '' : action.payload;
        }
    }
})

export default filterSlice.reducer;