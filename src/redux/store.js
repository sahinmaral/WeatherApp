import { configureStore } from "@reduxjs/toolkit";
import settingSlice from "./reducers/settingSlice";

export const store = configureStore({
  reducer: {
    setting: settingSlice,
  },
});
