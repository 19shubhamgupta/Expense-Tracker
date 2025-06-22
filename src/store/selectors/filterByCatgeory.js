import { createSelector } from "@reduxjs/toolkit";


const selectTransactions = (state) => state.transaction;


export const selectTransactionsByCategory = createSelector(
  [selectTransactions, (state, props) => props.category],
  (transactions, category) => {
    return transactions.filter(tx => tx.category === category);
  }
);
