import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./slices/cartSlice";

const menu = configureStore({
    reducer: {
       cart: cartSlice,
    },
});

export default menu;