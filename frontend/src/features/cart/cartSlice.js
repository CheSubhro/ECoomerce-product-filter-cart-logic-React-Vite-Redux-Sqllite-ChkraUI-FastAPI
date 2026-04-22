import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
        
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        decreaseQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload);
            
            if (state.cartItems[itemIndex].quantity > 1) {
              state.cartItems[itemIndex].quantity -= 1;
            } else {
              state.cartItems.splice(itemIndex, 1);
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.cartItems = [];
        },
    },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;