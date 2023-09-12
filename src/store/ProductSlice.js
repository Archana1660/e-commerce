import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const productSlice = createSlice({
    name: 'PRODUCT',
    initialState,
    reducers: {
        fetchProduct(state, action) {
            state.data = action.payload
        }
    }
})

export const { fetchProduct } = productSlice.actions
export default productSlice.reducer

//To fetch the data from API
//thunk action creator
export function getProducts() {
    return async function getProductsThunk(dispatch, getState) {
        const data = await fetch('https://fakestoreapi.com/products')
        const result = await data.json()
        dispatch(fetchProduct(result))
    }
}

