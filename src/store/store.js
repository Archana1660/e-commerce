import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import productDashboardSlice from "./ProductDashboardStore/ProductDashboardSlice";
import productSlice from "./ProductSlice";
import productCategoriesSlice from "./ProductDashboardStore/ProductCategoriesSlice";

const store = configureStore({
    reducer: {
        CART: CartSlice,
        ALL_PRODUCT: productDashboardSlice,
        PRODUCT: productSlice,
        ALL_CATEGORIES: productCategoriesSlice
    }
})

export default store