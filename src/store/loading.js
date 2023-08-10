import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: { isLoading: false },
  reducers: {
    showLoading(state, action) {
      state.isLoading = true;
    },
    hideLoading(state, action) {
      state.isLoading = false;
    },
  },
});

const { actions, reducer } = loadingSlice;
export const { showLoading, hideLoading } = actions;
export default reducer;
