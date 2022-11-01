import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterSetiing from "./redux/setting";
export const store = configureStore({
  reducer: {
    Setting: counterSetiing,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
