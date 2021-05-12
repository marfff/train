import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: "Chertsey",
  },
  reducers: {
      tipcoding: (state,action) => {
          state.search= action.payload;
          
      },
  },
});

export const { tipcoding }  = searchSlice.actions;
export default searchSlice.reducer;
