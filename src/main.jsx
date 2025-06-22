import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { store, persistor } from "./store/store.js"; // ← import both
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; // ← import PersistGate

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/Dashboard.jsx";
import TransactionPage from "./Components/TransactionPage.jsx";
import TransactionAdd from "./Components/TransactionAdd.jsx";
import BudgetPage from "./Components/Budget/BudgetPage.jsx";
import BudgetForm from "./Components/Budget/BudgetForm.jsx";
import TransactionHistory from "./Components/TransactionHistory.jsx";
import TranscationDetail from "./Components/TranscationDetail.jsx";
import TransactionEdit from "./Components/TransactionEdit.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/dashboard", element: <Dashboard /> },
      {
        path: "/transaction-history",
        element: <TransactionPage />,
        children: [
          {
            path: "/transaction-history",
            element: <TransactionHistory />,
          },
          {
            path: "/transaction-history/:id",
            element: <TranscationDetail />,
          },
        ],
      },
      { path: "/transaction-add", element: <TransactionAdd /> },
      {
        path: "/transaction-edit/:id",
        element: <TransactionEdit />,
      },
      {
        path: "/budget",
        element: <BudgetPage />,
      },
      {
        path: "/budget-form",
        element: <BudgetForm />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
