import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

const store = configureStore({
    reducer: {
        CART: CartSlice
    }
})

export default store