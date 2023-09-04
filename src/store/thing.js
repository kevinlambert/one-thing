import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import thingAPI from "../data/api/thing";

export const getCurrentThingsBySphere = createAsyncThunk(
  "thing/getCurrentThingsBySphere",
  async ({ currentDate, sphereID, accountID }) => {
    const data = await thingAPI.getCurrentThingsBySphere({
      currentDate,
      sphereID,
      accountID,
    });

    return data.map((item) => {
      const {
        id,
        text,
        periodInterval,
        periodIncrement,
        startDate,
        endDate,
        isDone,
        sphereID,
        accountID,
      } = item;

      return {
        id,
        text,
        periodInterval,
        periodIncrement,
        startDate,
        endDate,
        isDone,
        sphereID,
        accountID,
      };
    });
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
      isDone,
      sphereID,
      accountID,
    };
  }
);

export const updateThing = createAsyncThunk(
  "thing/updateThing",
  async ({ id, newText, newStartDate, newEndDate, isDone }) => {
    const data = await thingAPI.updateThing({
      id,
      newText,
      newStartDate,
      newEndDate,
      isDone,
    });

    const {
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
      isDone,
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
        return item.id === action.payload.id ? action.payload : item;
      });
    });
  },
});

export const findThingByIntervalIncrementHelper = ({
  state,
  periodInterval,
  periodIncrement,
}) => {
  const result = state.thing.find((item) => {
    return (
      item.periodInterval === periodInterval &&
      item.periodIncrement === periodIncrement
    );
  });

  return result || {};
};

const { reducer } = thingSlice;

export default reducer;
