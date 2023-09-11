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

    return data;
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
    isDone,
    isRelatedTo,
    sphereID,
    accountID,
  }) => {
    const data = await thingAPI.saveThing({
      text,
      periodInterval,
      periodIncrement,
      startDate,
      endDate,
      isDone,
      isRelatedTo,
      sphereID,
      accountID,
    });

    return data;
  }
);

export const updateThing = createAsyncThunk(
  "thing/updateThing",
  async ({ id, newText, newStartDate, newEndDate, isDone, isRelatedTo }) => {
    const data = await thingAPI.updateThing({
      id,
      newText,
      newStartDate,
      newEndDate,
      isDone,
      isRelatedTo,
    });

    return data;
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
        return item.id === action.payload.id ? action.payload : item;
      });
    });
  },
});

export const findThingByIntervalIncrementHelper = ({
  things,
  periodInterval,
  periodIncrement,
}) => {
  const result = things.find((item) => {
    return (
      item.periodInterval === periodInterval &&
      item.periodIncrement === periodIncrement
    );
  });

  return result || {};
};

const { reducer } = thingSlice;

export default reducer;
