import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: "",
};
export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const { changeCity } = citySlice.actions;
export default citySlice.reducer;
