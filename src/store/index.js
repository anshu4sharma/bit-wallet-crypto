import { configureStore } from "@reduxjs/toolkit";
import walletSlice from "./wallet/wallet-slice";

const store = configureStore({
  reducer: {
    wallet: walletSlice.reducer,
  },
});

export default store;
