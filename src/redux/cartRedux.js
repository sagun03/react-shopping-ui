import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProducts: (state, action) => {
      state.quantity += action.payload.quantity;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products = state.products.map((item) => {
        if (item.productId === action.payload.productId) {
          item.quantity += 1;
          state.total += item.price;
        }
        return item;
      });
    },
    removeProducts: (state, action) => {
      state.quantity = state.quantity - 1;
      state.products.forEach((item) => {
        if (item.productId === action.payload.id) {
          item.quantity = item.quantity - 1;
          state.total = state.total - item?.price;
        }
      });
      state.products = state.products.filter((item) => item.quantity > 0);
    },
  },
});

export const { addProducts, removeProducts, addProduct } = cartSlice.actions;
export default cartSlice.reducer;
