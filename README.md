# Expense Tracker

A simple and intuitive Expense Tracker web application built with React, Redux Toolkit, and Recharts. It allows users to add, edit, delete, search transactions, set budgets and savings goals, persist data across sessions, and visualize expenses with both pie and bar charts.

## 📦 Features

* **Add Transactions**: Title, amount, date, category, and details.
* **Edit & Delete**: Modify or remove existing transactions.
* **Search Transactions**: Quickly find past transactions by title or category.
* **Persisted State**: Redux state is persisted in `localStorage` using `redux-persist`.
* **Grouped Data**: Transactions are grouped by year and month.
* **Category-wise Expense Chart**: Visualize expenses per category with a dynamic pie chart (Recharts).
* **Monthly Expense Chart**: Visualize expenses per month with a dynamic bar chart (Recharts).
* **Budget & Goal Tracking**: Users can set a monthly budget and savings goal, with a progress bar indicating how close they are to their targets.
* **Responsive Design**: Works on desktop and mobile.

## 🚀 Technologies Used

* **React** (v18+)
* **Redux Toolkit**
* **redux-persist**
* **Recharts**
* **Tailwind CSS**
* **React Router**

## 📁 Repository Structure

```
expense-tracker/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── MonthlyExpenseChart.jsx
│   │   ├── CategoryPieChart.jsx
│   │   ├── BudgetProgressBar.jsx
│   │   ├── TransactionForm.jsx
│   │   ├── TransactionHistory.jsx
│   │   └── TransactionCard.jsx
│   ├── store/
│   │   ├── store.js
│   │   ├── transactionSlice.js
│   │   ├── budgetSlice.js
│   │   └── selectors/
│   │       ├── expenseByMonth.js
│   │       └── expenseByCategory.js
│   ├── App.jsx
│   ├── index.jsx
│   └── styles.css
├── .gitignore
├── package.json
└── README.md
```

## 🔧 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/expense-tracker.git
   cd expense-tracker
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm start
   ```

4. **Open** `http://localhost:3000` in your browser.

## 🛠️ Available Scripts

In the project directory, you can run:

* `npm start` – Runs the app in development mode.
* `npm run build` – Builds the app for production to the `build` folder.
* `npm test` – Launches the test runner.
* `npm run lint` – Runs ESLint to catch linting errors.

## 📈 Usage

1. Add a new transaction by filling in the form.
2. Search, edit, or delete transactions as needed.
3. Set a monthly budget and savings goal.
4. View pie and bar charts to analyze spending by category and month.
5. Track progress toward your budget and savings goals via the progress bar.

## ⚙️ Configuration

* **Redux Persist**: Configuration in `src/store/store.js` using `persistReducer` and `persistStore`.
* **Selectors**: Transactions are grouped by year/month in `src/store/selectors/expenseByMonth.js` and by category in `src/store/selectors/expenseByCategory.js`.
* **Budget Slice**: `src/store/budgetSlice.js` manages budget and goal state.

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/...`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/...`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

*Happy tracking!*\*
