import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { FilterState } from "types/filter"


export const fetchCharacters = createAsyncThunk(
   'characters/fetchByFilter',
   async (filter: FilterState, thunkAPI) => {
      try {
         const response = await axios.get(`https://rickandmortyapi.com/api/character/`, { params: filter });
         if (response.data.error) {
            throw new Error(response.data.error);
         }
         console.log(response.data)
         return response.data;
      } catch (e) {
         return thunkAPI.rejectWithValue('Failed to load characters')
      }
   }
)
