import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StatusCode } from "../utils/StatusCode";

const initialState = {
    data: [],
    status: StatusCode.IDLE
}

const productDashboardSlice = createSlice({
    name: 'ALL_PRODUCT',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.status = StatusCode.LOADING
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = StatusCode.IDLE
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = StatusCode.ERROR
            })
    }
})

export default productDashboardSlice.reducer

export const getProducts = createAsyncThunk(
    'PRODUCT/get', async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const result = await response.json()
        return result
    }
)