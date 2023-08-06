import React, { useState } from 'react';

function ExpenseForm() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Title:', title);
    console.log('Amount:', amount);
    console.log('Date:', date);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={handleTitleChange} />
      </div>
      <div>
        <label>Amount</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <div>
        <label>Date</label>
        <input type="date" value={date} onChange={handleDateChange} />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;

