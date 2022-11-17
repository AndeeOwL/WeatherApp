import { configureStore } from "@reduxjs/toolkit";
import fetchedWeatherInfoReducer from "./slices/fetchedWeatherInfo";
import cityReducer from "./slices/city";

export default configureStore({
  reducer: {
    fetchedWeatherInfo: fetchedWeatherInfoReducer,
    city: cityReducer,
  },
});
