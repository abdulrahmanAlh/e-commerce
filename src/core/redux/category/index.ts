import { createSlice, PayloadAction, ThunkAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "core/store";
import { AlertSetting, Maybe } from "types";

interface InitialState {
  isLoading: boolean;
  categories: string[];
  error: Maybe<string>;
}

let initialState: InitialState = {
  isLoading: false,
  categories: [],
  error: null,
};

const CategorySlice = createSlice({
  name: "Category",
  initialState,
  reducers: {
    toggleLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setCategories, toggleLoading, setError } = CategorySlice.actions;
export const FetchCategories =
  (): ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
    try {
      dispatch(toggleLoading());
      const { data } = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      dispatch(setCategories(data));
    } catch (error) {
      dispatch(setError("Erorr while fetching products"));
    } finally {
      dispatch(toggleLoading());
    }
  };
export default CategorySlice.reducer;
