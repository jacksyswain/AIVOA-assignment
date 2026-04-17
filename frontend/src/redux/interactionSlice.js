import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "interaction",
  initialState: {
    interactions: [],
  },
  reducers: {
    addInteraction: (state, action) => {
      state.interactions.push(action.payload);
    },
  },
});

export const { addInteraction } = slice.actions;
export default slice.reducer;