import { configureStore } from "@reduxjs/toolkit";
import transactionSlice from "./transactionSlice";
import budgetSlice from "./budgetSlice";
import sideBarSlice from  './sideBarSlice';

import storage from "redux-persist/lib/storage";           // ← localStorage
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";

// 1. Persist config
const persistConfig = {
  key: "root",
  storage,
};

// 2. Combine your slices
const rootReducer = combineReducers({
  transaction: transactionSlice,
  budget : budgetSlice ,
  sideBar : sideBarSlice,
});

// 3. Wrap with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Create store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
});

// 5. Create persistor
export const persistor = persistStore(store);
