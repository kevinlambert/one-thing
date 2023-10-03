import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUser(state, action) {
      const {
        username,
        attributes: { email },
      } = action.payload;
      return {
        username,
        email,
      };
    },
  },
});

const { reducer } = userSlice;
export const { setUser } = userSlice.actions;

export default reducer;
