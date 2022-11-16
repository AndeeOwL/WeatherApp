import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fetchedWeatherInfo: ["empty"],
};
export const fetchedWeatherInfoSlice = createSlice({
  name: "fetchedWeatherInfo",
  initialState,
  reducers: {
    addInfo: (state, action) => {
      state.fetchedWeatherInfo = action.payload;
    },
  },
});

export const { addInfo } = fetchedWeatherInfoSlice.actions;
export default fetchedWeatherInfoSlice.reducer;
