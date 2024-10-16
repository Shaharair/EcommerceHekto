import { createSlice } from '@reduxjs/toolkit'

export const ReduxSlice = createSlice({
    name: 'counter',
    initialState: {
        CartItem: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    },
    reducers: {
        addToCart: (state, action) => {
            let findProducts = state.CartItem.findIndex((items) => items.id == action.payload.id)
            if (findProducts !== -1) {
                state.CartItem[findProducts].qun += 1
                localStorage.setItem("cart", JSON.stringify(state.CartItem))
            } else {
                state.CartItem = [...state.CartItem, action.payload]
                localStorage.setItem("cart", JSON.stringify(state.CartItem))
            }

        },
        increment: (state, action) => {
            state.CartItem[action.payload].qun += 1
            localStorage.setItem("cart", JSON.stringify(state.CartItem))
        },
        decrement: (state, action) => {
            if(state.CartItem[action.payload].qun > 1){
                state.CartItem[action.payload].qun -= 1
                localStorage.setItem("cart", JSON.stringify(state.CartItem))
            }
        },
        removeProducts:(state, action) => {
            state.CartItem.splice(action.payload, 1)
            localStorage.setItem("cart", JSON.stringify(state.CartItem))
        },
        cleardata:(state, action) => {
            state.CartItem.splice(action.payload)
            localStorage.setItem("cart", JSON.stringify(state.CartItem))
        }

    },
})


// Action creators are generated for each case reducer function
export const { addToCart, increment,decrement,removeProducts,cleardata } = ReduxSlice.actions

export default ReduxSlice.reducer