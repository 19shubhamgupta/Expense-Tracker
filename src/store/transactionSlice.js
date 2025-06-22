import { createSlice } from "@reduxjs/toolkit";

let initialState = [
  {
    amount: "",
    date: "",
    detail: "",
    title: "",
    category: "",
  },
];

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.push(action.payload);
    },
    delTransaction: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
    editTransaction: (state , action) => {
      state[action.payload.idx] = action.payload.editedTransaction;
    }
  },
});

export const { addTransaction, delTransaction , editTransaction} = transactionSlice.actions;
export default transactionSlice.reducer;
