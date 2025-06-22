import { createSelector } from "@reduxjs/toolkit";
import { groupByDate } from "./groupBydate";


export const selectTransactionsByMonth = createSelector(
  [groupByDate, (state, props) => props.year],
  (grouped, year) => {
    const yearData = grouped[year];

    if (!yearData) return [];

    return Object.entries(yearData).map(([month, transactions]) => {
      const total = transactions.reduce(
        (sum, tx) => sum + Number(tx.amount),
        0
      );
      return { month, total };
    });
  }
);