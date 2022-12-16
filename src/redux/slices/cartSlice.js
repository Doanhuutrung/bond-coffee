import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const items = JSON.parse(localStorage.getItem("cartItems") || "[]");
const totalAmount =
  localStorage.getItem("totalAmount") !== null
    ? JSON.parse(localStorage.getItem("totalAmount"))
    : 0;
const totalQuantity =
  localStorage.getItem("totalQuantity") !== null
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : 0;
const setItem = (item, totalAmount, totalQuantity) => {
  localStorage.setItem("cartItems", JSON.stringify(item));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
};

const initialState = {
  cartItems: items,
  totalAmount: totalAmount,
  totalQuantity: totalQuantity,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const exsitingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (!exsitingItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        exsitingItem.quantity++;
        exsitingItem.totalPrice =
          Number(exsitingItem.totalPrice) + Number(newItem.price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),0
      );
      setItem(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
      // console.log(state.totalQuantity);
      // console.log(state.cartItems);
      // console.log(newItem);
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      const exsitingItem = state.cartItems.find((item) => item.id === id);

      if (exsitingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - exsitingItem.quantity;
      }
        state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),0
      );
      setItem(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
      toast.success('Delete drinks successfully !!!');
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
