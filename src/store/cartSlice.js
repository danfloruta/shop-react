import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const product = state.cart.find(
        (item) => item.title === action.payload.title
      );
      if (product) {
        product.itemsNum += 1;
      } else {
        state.cart.push({ itemsNum: 1, ...action.payload });
      }
    },
    removeItemFromCart(state, action) {
      const product = state.cart.find(
        (item) => item.title === action.payload.title
      );
      if (product.itemsNum > 1) {
        product.itemsNum -= 1;
      } else {
        state.cart = state.cart.filter((item) => item.title !== product.title); //vrei sa ramana in lista itemurile care sunt diferite de asta, nu doar asta, aka doar itemurile care indeplinesc criteriul de a avea un titlu diferit, in plus trebuie adaugat state.cart = state.cart.filter..., doar state.cart.filter nu e de ajuns pt ca filter returneaza un nou array, dar nu il atribui nicaieri
      }
      if (!product) return;
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
