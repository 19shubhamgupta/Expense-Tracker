import { createSelector } from "@reduxjs/toolkit";

const transactionSelect = (state) => state.transaction;

export const categoryWiseExpense = createSelector(
  [transactionSelect],
  (transactions) => {
    const categoryMap = {};

    transactions.forEach(({ category, amount }) => {
      if (!category) return; 
      if (!categoryMap[category]) {
        categoryMap[category] = 0;
      }
      categoryMap[category] += Number(amount);
    });

    return Object.entries(categoryMap).map(([name, value]) => ({
      name,
      value,
    }));
  }
);

