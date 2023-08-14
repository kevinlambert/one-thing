import { createSlice } from "@reduxjs/toolkit";

const currentSlice = createSlice({
  name: "current",
  initialState: [],
  reducers: {
    setCurrentSphere(state, action) {
      state.currentSphere = action.payload;
    },
  },
});

const { actions, reducer } = currentSlice;
export const { setCurrentSphere } = actions;

export default reducer;
