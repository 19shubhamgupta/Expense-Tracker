import { createSelector } from "@reduxjs/toolkit";

const allTransactions = (state) => state.transaction;

export const groupByDate = createSelector([allTransactions], (transactions) => {
  return transactions.reduce((acc, { date, ...rest }, index) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");

    if (!acc[year]) acc[year] = {}; //  initialize year
    if (!acc[year][month]) acc[year][month] = []; // initialize month

    acc[year][month].push({ date, id: index, ...rest }); // push transaction
    return acc;
  }, {});
});

export const selectTransactionsByMonth = createSelector(
  [groupByDate, (state, props) => props],
  (grouped, { year, month }) => {
    return grouped[year]?.[month] || [];
  }
);
