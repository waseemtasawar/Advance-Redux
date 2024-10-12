import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    additemToCart: (state, action) => {
      const newItem = action.payload;
      const exestingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!exestingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        exestingItem.quantity++;
        exestingItem.totalPrice = exestingItem.totalPrice + newItem.price;
      }
    },
    removeitemToCart: (state, action) => {
      const id = action.payload;
      const exestingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (exestingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        exestingItem.quantity--;
        // exestingItem.totalPrice = exestingItem.totalPrice = exestingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
