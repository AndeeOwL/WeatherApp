import { configureStore } from "@reduxjs/toolkit";
import fetchedWeatherInfoReducer from "./slices/fetchedWeatherInfo";

export default configureStore({
  reducer: {
    fetchedWeatherInfo: fetchedWeatherInfoReducer,
  },
});
