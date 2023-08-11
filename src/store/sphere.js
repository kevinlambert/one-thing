import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import sphereAPI from "../api/sphere";

export const createSphere = createAsyncThunk(
  "sphere/createSphere",
  async ({ name, accountID }) => {
    const data = await sphereAPI.createSphere({
      name,
      accountID,
    });
    const { id } = data;
    return { id, name, accountID };
  }
);

export const getSpheresByAccountID = createAsyncThunk(
  "sphere/getSpheresByAccountID",
  async ({ accountID }) => {
    const data = await sphereAPI.getSpheresByAccountID(accountID);

    return data.map((sphere) => {
      const { id, name, description, accountID } = sphere;
      return { id, name, description, accountID };
    });
  }
);

const sphereSlice = createSlice({
  name: "sphere",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createSphere.fulfilled, (state, action) => {
      state.push(action.payload);
    });

    builder.addCase(getSpheresByAccountID.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

const { reducer } = sphereSlice;

export default reducer;
