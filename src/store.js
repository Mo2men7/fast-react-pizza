import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import caertReducer from "./features/user/caertSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: caertReducer,
  },
});

export default store;
