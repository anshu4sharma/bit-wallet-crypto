import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentNetwork: {},
  account: {},
  balance: 0,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setCurrentNetwork(state, action) {
      state.currentNetwork = action.payload;
    },
    setAccount(state, action) {
      state.account = action.payload;
    },
    setBalance(state, action) {
      state.balance = action.payload;
    },
  },
});

export const walletActions = walletSlice.actions;

export default walletSlice;
