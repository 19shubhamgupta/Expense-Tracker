import { createSelector } from "@reduxjs/toolkit";

const expenseSelect = (state) => state.transaction;

export const selectTotalExpense = createSelector(
  [expenseSelect],
  (transactions) =>
    transactions.reduce(
      (sum, transaction) => sum + Number(transaction.amount),
      0
    )
);
