import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../pages/addUser/SliceAddUser";

export const store = configureStore({
  reducer: {
    users: UserSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
