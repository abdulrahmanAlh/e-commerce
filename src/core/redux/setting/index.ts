import { createSlice } from "@reduxjs/toolkit";

const isLightMode = localStorage.getItem("mode")
  ? localStorage.getItem("mode") === "light"
  : true;

interface InitialState {
  direction: "rtl" | "ltr";
  mode: "dark" | "light";
  lang: string;
}

let initialState: InitialState = {
  direction: "ltr",
  mode: isLightMode ? "light" : "dark",
  lang: "en",
};

const KycSlice = createSlice({
  name: "Setting",
  initialState,
  reducers: {
    setDirction: (state, { payload }) => {
      state.direction = payload;
    },
    toggleMode: (state) => {
      localStorage.setItem("mode", state.mode === "dark" ? "light" : "dark");
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
    setLang: (state, { payload }) => {
      state.lang = payload;
    },
  },
});

export const { setDirction, toggleMode, setLang } = KycSlice.actions;

export default KycSlice.reducer;
