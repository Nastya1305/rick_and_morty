import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CharacterState, CharacterStateInfo, ICharacter } from "types/character";
import { fetchCharacters } from "./ActionCreators";


const initialState: CharacterState = {
   characters: [],
   info: {
      count: 0,
      pages: 0
   },
   isLoading: false,
   error: ''
};

export const characterSlice = createSlice({
   name: 'character',
   initialState,
   reducers: {},
   extraReducers: {
      [fetchCharacters.fulfilled.type]: (state, action: PayloadAction<{ results: ICharacter[], info: CharacterStateInfo }>) => {
         state.isLoading = false;
         state.error = '';
         state.characters = action.payload.results;
         state.info = action.payload.info;
      },
      [fetchCharacters.pending.type]: (state) => {
         state.isLoading = true;
      },
      [fetchCharacters.rejected.type]: (state, action: PayloadAction<string>) => {
         state.isLoading = false;
         state.error = action.payload;
      }
   }
})

export default characterSlice.reducer;