import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import thingAPI from "../api/thing";
import { removeNonSerializableValues } from "./util";

export const getPreviousThing = createAsyncThunk(
  "previousThing/getPreviousThing",
  async ({ searchDate, sphereID, periodInterval }) => {
    const data = await thingAPI.getPreviousThing({
      searchDate,
      periodInterval,
      sphereID,
    });

    return removeNonSerializableValues(data);
  }
);

export const updateThing = createAsyncThunk(
  "previousThing/updateThing",
  async ({ id, isDone }) => {
    const data = await thingAPI.updateThing({
      id,
      isDone,
    });

    return removeNonSerializableValues(data);
  }
);

const thingSlice = createSlice({
  name: "previousThing",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPreviousThing.fulfilled, (state, action) => {
      if (action.payload.length) {
        const item = action.payload[0]; // should only return 1 item

        const { periodInterval, periodIncrement } = item;
        const { [periodInterval]: statePerdiodInterval, ...restState } = state;

        return {
          [periodInterval]: { [periodIncrement]: item },
          ...restState,
        };
      } else {
        return state;
      }
    });

    builder.addCase(updateThing.fulfilled, (state, action) => {
      const { periodInterval, periodIncrement } = action.payload;
      const { [periodInterval]: statePerdiodInterval, ...restState } = state;

      return {
        [periodInterval]: { [periodIncrement]: action.payload },
        ...restState,
      };
    });
  },
});

const { reducer } = thingSlice;

export default reducer;
