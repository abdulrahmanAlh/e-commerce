import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlertSetting } from "types";

const isLightMode = localStorage.getItem("mode")
  ? localStorage.getItem("mode") === "light"
  : true;

interface InitialState {
  alert: AlertSetting;

  direction: "rtl" | "ltr";
  mode: "dark" | "light";
  lang: string;
}

let initialState: InitialState = {
  alert: {
    active: false,
    severity: "success",
    message: "success",
  },
  direction: "ltr",
  mode: isLightMode ? "light" : "dark",
  lang: "en",
};

const KycSlice = createSlice({
  name: "Setting",
  initialState,
  reducers: {
    openAlert: (state, { payload }: PayloadAction<AlertSetting>) => {
      state.alert = { ...payload, active: true };
    },
    closeAlert: (state) => {
      state.alert.active = false;
    },
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

export const { setDirction, toggleMode, setLang, openAlert, closeAlert } =
  KycSlice.actions;

export default KycSlice.reducer;
