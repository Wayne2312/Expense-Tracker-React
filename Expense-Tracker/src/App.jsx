import React, { useState } from "react";
import './App.css';

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const handleAddExpense = () => {
    if (!description.trim() || !amount || isNaN(amount) || parseFloat(amount) <= 0) {
      setError("Please enter a valid description and a positive amount.");
      return;
    }

    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { id: Date.now(), description, amount: parseFloat(amount) },
    ]);

    setDescription("");
    setAmount("");
    setError("");
  };

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div>
      <div>
        <h1>Expense Tracker</h1>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="e.g., Grocery"
          />
        </div>

        <div>
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g., 50"
          />
        </div>
        {error && <p>{error}</p>}

        <button onClick={handleAddExpense}>
          Add Expense
        </button>

        <div>
          <h2>Expenses</h2>
          {expenses.length === 0 ? (
            <p>No expenses added yet.</p>
          ) : (
            <ul>
              {expenses.map((expense) => (
                <li key={expense.id}>
                  <span>{expense.description}</span>
                  <span>${expense.amount.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <h2>Total Expenses</h2>
          <p>${totalExpenses.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}


export default ExpenseTracker;