import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
    id: string;
    title: string;
    price: number;
    quantity: number;
};

type CartState = {
    items: CartItem[];
};

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart(
            state,
            action: PayloadAction<{id: string, title: string, price: number}>
        ){
            //find the item id
            const itemIndex =state.items.findIndex(
                //for every item found check
            (item)=> item.id === action.payload.id
            );
            //if found just increment quantity
            if (itemIndex>=0) {
                state.items[itemIndex].quantity++;
            } else {
                //add the item and initialize quantity to 1
                state.items.push({...action.payload, quantity: 1});
            }
        },
        removeFromCart(
            state,
            action: PayloadAction<string>
        ){
             //find the item id
             const itemIndex = state.items.findIndex(
                (item)=> item.id === action.payload
            );
              //remove the index
              if (state.items[itemIndex].quantity === 1) {
                state.items.slice(itemIndex,1); //start with itemIndex delete only one item
            } else {
                state.items[itemIndex].quantity--;
            }
        },
    },
});

const {addToCart, removeFromCart} = cartSlice.actions;//destruction function required before export
export {cartSlice, addToCart, removeFromCart};