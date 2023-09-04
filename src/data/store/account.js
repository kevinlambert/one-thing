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
    const {
      id,
      firstName,
      lastName,
      userID,
      isTourDone,
      termsAndConditionsAccepted,
    } = account;
    return {
      id,
      firstName,
      lastName,
      userID,
      isTourDone,
      termsAndConditionsAccepted,
    };
  }
);

export const updateAccount = createAsyncThunk(
  "account/updateAccount",
  /**  @param arg {any} */
  async ({
    id,
    firstName,
    lastName,
    isTourDone,
    termsAndConditionsAccepted,
  }) => {
    const account = await userAPI.updateUserAccount({
      id,
      firstName,
      lastName,
      isTourDone,
      termsAndConditionsAccepted,
    });
    const { userID } = account;
    return {
      id,
      firstName,
      lastName,
      userID,
      isTourDone,
      termsAndConditionsAccepted,
    };
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
