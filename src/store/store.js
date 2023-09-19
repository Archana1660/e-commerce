import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import productDashboardSlice from "./ProductDashboardSlice";
import productSlice from "./ProductSlice";

const store = configureStore({
    reducer: {
        CART: CartSlice,
        ALL_PRODUCT: productDashboardSlice,
        PRODUCT: productSlice
    }
})

export default store