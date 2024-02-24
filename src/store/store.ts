import { configureStore } from "@reduxjs/toolkit";

//create first a slice then import here
import { cartSlice } from "./cart-slice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    },
});


type AppDispatch = typeof store.dispatch; //assign the dispatch type in store
export {store, type AppDispatch};