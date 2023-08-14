import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import thingAPI from "../api/thing";

export const getCurrentThingsBySphere = createAsyncThunk(
  "thing/getCurrentThingsBySphere",
  async ({ currentDate, sphereID, accountID }) => {
    const data = await thingAPI.getCurrentThingsBySphere({
      currentDate,
      sphereID,
      accountID,
    });

    const {
      id,
      text,
      periodInterval,
      periodIncrement,
      startDate,
      endDate,
      sphereID,
      accountID,
    } = data;

    return {
      id,
      text,
      periodInterval,
      periodIncrement,
      startDate,
      endDate,
      sphereID,
      accountID,
    };
  }
);

export const saveThing = createAsyncThunk(
  "thing/saveThing",
  async ({
    text,
    periodInterval,
    periodIncrement,
    startDate,
    endDate,
    sphereID,
    accountID,
  }) => {
    const data = await thingAPI.saveThing({
      text,
      periodInterval,
      periodIncrement,
      startDate,
      endDate,
      sphereID,
      accountID,
    });

    const { id } = data;

    return {
      id,
      text,
      periodInterval,
      periodIncrement,
      startDate,
      endDate,
      sphereID,
      accountID,
    };
  }
);

export const updateThing = createAsyncThunk(
  "thing/updateThing",
  async ({ id, newText, newStartDate, newEndDate }) => {
    const data = await thingAPI.updateThing({
      id,
      newText,
      newStartDate,
      newEndDate,
    });

    const {
      id,
      text,
      periodInterval,
      periodIncrement,
      startDate,
      endDate,
      sphereID,
      accountID,
    } = data;

    return {
      id,
      text,
      periodInterval,
      periodIncrement,
      startDate,
      endDate,
      sphereID,
      accountID,
    };
  }
);

const thingSlice = createSlice({
  name: "thing",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentThingsBySphere.fulfilled, (state, action) => {
      return action.payload;
    });

    builder.addCase(saveThing.fulfilled, (state, action) => {
      state.push(action.payload);
    });

    builder.addCase(updateThing.fulfilled, (state, action) => {
      return state.map((item) => {
        item.id === action.payload.id ? action.payload : item;
      });
    });
  },
});

export const findThingByIntervalIncrementHelper = (
  state,
  interval,
  increment
) => {
  return state.thing.find((item) => {
    return item.interval === interval && item.increment === increment;
  });
};

const { reducer } = thingSlice;

export default reducer;
