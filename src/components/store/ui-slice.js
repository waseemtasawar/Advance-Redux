import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVsible: false },
  reducers: {
    toggle: (state) => {
      state.cartIsVsible = !state.cartIsVsible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
