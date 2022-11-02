import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, Maybe, Product } from "types";

interface InitialState {
  isLoading: boolean;
  products: Product[];
  cart: Cart[];
  error: Maybe<string>;
}

let initialState: InitialState = {
  isLoading: false,
  products: [],
  error: null,
  cart: [],
};

const KycSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    toggleLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    getCart(state, action: PayloadAction<Cart[]>) {
      const cart = action.payload;

      // const subtotal = sum(cart.map((cartItem: CartItem) => cartItem.price * cartItem.quantity));
      // const discount = cart.length === 0 ? 0 : state.checkout.discount;
      // const shipping = cart.length === 0 ? 0 : state.checkout.shipping;
      // const billing = cart.length === 0 ? null : state.checkout.billing;

      state.cart = cart;
      // state.checkout.discount = discount;
      // state.checkout.shipping = shipping;
      // state.checkout.billing = billing;
      // state.checkout.subtotal = subtotal;
      // state.checkout.total = subtotal - discount;
    },

    addCart(state, action: PayloadAction<Cart>) {
      const product = action.payload;
      const isEmptyCart = state.cart.length === 0;
      const isExist = state.cart.find((item) => item.id === product.id);

      if (isEmptyCart || isExist) {
        state.cart = [...state.cart, product];
      } else {
        state.cart = state.cart.map((_product) => {
          const isExisted = _product.id === product.id;
          if (isExisted) {
            return {
              ..._product,
              quantity: _product.quantity + 1,
            };
          }
          return _product;
        });
      }
    },

    deleteCart(state, action: PayloadAction<number>) {
      const updateCart = state.cart.filter(
        (item) => item.id !== action.payload
      );

      state.cart = updateCart;
    },

    resetCart(state) {
      //   state.checkout.activeStep = 0;
      state.cart = [];
      //   state.checkout.total = 0;
      //   state.checkout.subtotal = 0;
      //   state.checkout.discount = 0;
      //   state.checkout.shipping = 0;
      //   state.checkout.billing = null;
    },
    increaseQuantity(state, action: PayloadAction<number>) {
      const productId = action.payload;
      const updateCart = state.cart.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });

      state.cart = updateCart;
    },

    decreaseQuantity(state, action) {
      const productId = action.payload;
      const updateCart = state.cart.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });

      state.cart = updateCart;
    },
  },
});

export const { toggleLoading } = KycSlice.actions;

export default KycSlice.reducer;
