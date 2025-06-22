import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  budget: 0,
  goaldetail: "",
  goalMoney: 0,
};

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    updatebudget: (state, action) => {
      if (action.payload) {
        state.budget = action.payload.budget;
        state.goaldetail = action.payload.goaldetail;
        state.goalMoney = action.payload.goalMoney;
      }    
    },
  },
});

export const { updatebudget } = budgetSlice.actions;
export default budgetSlice.reducer;
