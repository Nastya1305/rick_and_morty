import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Gender, Status } from "types/character";
import { FilterState } from "types/filter";


const initialState: FilterState = {
    name: '',
    species: '',
    type: '',
    gender: '',
    status: '',
    page: 1
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setName(state, action: PayloadAction<string>) {
            state.name = action.payload;
            state.page = 1;
        },
        setSpecies(state, action: PayloadAction<string>) {
            state.species = action.payload;
            state.page = 1;
        },
        setType(state, action: PayloadAction<string>) {
            state.type = action.payload;
            state.page = 1;
        },
        setGender(state, action: PayloadAction<Gender | 'all'>) {
            state.gender = (action.payload === 'all') ? '' : action.payload;
            state.page = 1;
        },
        setStatus(state, action: PayloadAction<Status | 'all'>) {
            state.status = (action.payload === 'all') ? '' : action.payload;
            state.page = 1;
        },
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        }
    }
})

export default filterSlice.reducer;