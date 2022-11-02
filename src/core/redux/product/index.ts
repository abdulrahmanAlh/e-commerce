import { createSlice, PayloadAction, ThunkAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "core/store";
import { Cart, Maybe, Product } from "types";

interface InitialState {
  isLoading: boolean;
  isLoadingMore: boolean;
  products: Product[];
  wishlist: Product[];
  cart: Cart[];
  error: Maybe<string>;
}

let initialState: InitialState = {
  isLoading: false,
  isLoadingMore: false,
  wishlist: [],
  products: [],
  error: null,
  cart: [],
};

const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    toggleLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    toggleLoadingMore: (state) => {
      state.isLoadingMore = !state.isLoadingMore;
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setProductsMore: (state, action: PayloadAction<Product[]>) => {
      let products = state.products;
      products = products.concat(action.payload);
      state.products = products;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },

    addToWishlist: (state, action: PayloadAction<Product>) => {
      const isExist = state.wishlist.find(
        (item) => item.id === action.payload.id
      );
      if (!isExist) state.wishlist.push(action.payload);
      //update product
      let index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        let products = state.products;
        products[index] = { ...products[index], liked: true };
        state.products = products;
      }
    },

    removeFromWishlist: (state, { payload }: PayloadAction<number>) => {
      state.wishlist = state.wishlist.filter((item) => payload !== item.id);
      let index = state.products.findIndex((product) => product.id === payload);
      if (index !== -1) {
        let products = state.products;
        products[index] = { ...products[index], liked: false };
        state.products = products;
      }
    },

    addCart(state, action: PayloadAction<Cart>) {
      const product = action.payload;
      const isEmptyCart = state.cart.length === 0;
      const isExist = state.cart.find((item) => item.id === product.id);

      if (isEmptyCart || !isExist) {
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
    filterProducts(
      state,
      {
        payload: { name, price },
      }: PayloadAction<{ price?: number[]; name?: string }>
    ) {
      state.products = state.products.filter(
        (product) =>
          (!price || (product.price > price[0] && product.price < price[1])) &&
          (!name || product.title.includes(name))
      );
    },
  },
});

export const {
  toggleLoading,
  setProducts,
  setError,
  toggleLoadingMore,
  setProductsMore,
  addCart,
  deleteCart,
  addToWishlist,
  removeFromWishlist,
  filterProducts,
} = ProductSlice.actions;

export const FetchProducts =
  (category?: string): ThunkAction<void, RootState, unknown, any> =>
  async (dispatch) => {
    try {
      dispatch(toggleLoading());
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${
          category ? `category/${category}` : ""
        }`,
        {
          params: { limit: 9 },
        }
      );
      dispatch(setProducts(data));
    } catch (error) {
      dispatch(setError("Erorr while fetching products"));
    } finally {
      dispatch(toggleLoading());
    }
  };

export const FetchMoreProducts =
  (): ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
    try {
      dispatch(toggleLoadingMore());
      const { data } = await axios.get("https://fakestoreapi.com/products", {
        params: { limit: 9 },
      });
      dispatch(setProductsMore(data));
    } catch (error) {
      dispatch(setError("Erorr while fetching products"));
    } finally {
      dispatch(toggleLoadingMore());
    }
  };

export default ProductSlice.reducer;
