import { createSlice } from "@reduxjs/toolkit";

const navigateSlice = createSlice({
  name: "navigate",
  initialState: { navigate: "" },
  reducers: {
    navigateTo(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = navigateSlice;
export const { navigateTo } = actions;
export default reducer;
