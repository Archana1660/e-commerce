import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ProductSlice from "./ProductSlice";

const store = configureStore({
    reducer: {
        CART: CartSlice,
        PRODUCT: ProductSlice
    }
})

export default store