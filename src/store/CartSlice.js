import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'CART',
    initialState: [],
    reducers: {
        //action is to update the state in store, 
        //it has the type and the payload sen dby component
        //state is to store the data e.g:
        add(state, action) {
            state.push(action.payload)
        }
    }
})

export const { add } = cartSlice.actions;
export default cartSlice.reducer