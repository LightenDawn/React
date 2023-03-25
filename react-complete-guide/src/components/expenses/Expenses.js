import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter'
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilterYear] = useState('2020');

  const selectedHandler = selectedItem => {
    setFilterYear(selectedItem);
    console.log(selectedItem);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onSelectedHandler={selectedHandler} />
        {props.items.map((item) => (
          <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;