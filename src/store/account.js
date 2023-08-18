import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userAPI from "../api/user";

export const fetchAccountByUserID = createAsyncThunk(
  "account/fetchAccountByUserID",
  async (userId) => {
    const data = await userAPI.getUserAccount(userId);
    return data;
  }
);

export const createAccount = createAsyncThunk(
  "account/createAccount",
  async (userId) => {
    const account = await userAPI.createUserAccount(userId);
    const { id, firstName, lastName, userID } = account;
    return { id, firstName, lastName, userID };
  }
);

export const updateAccount = createAsyncThunk(
  "account/updateAccount",
  async ({ id, firstName, lastName }) => {
    const account = await userAPI.updateUserAccount({
      id,
      firstName,
      lastName,
    });
    const { userID } = account;
    return { id, firstName, lastName, userID };
  }
);

const accountSlice = createSlice({
  name: "account",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAccountByUserID.fulfilled, (state, action) => {
      return action.payload;
    });

    builder.addCase(createAccount.fulfilled, (state, action) => {
      return action.payload;
    });

    builder.addCase(updateAccount.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

const { reducer } = accountSlice;

export default reducer;
