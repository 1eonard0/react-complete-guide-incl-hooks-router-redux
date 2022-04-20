
import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filterDate, setFilterDate] = useState('2020');
  const filterExpenseItemHandler = (date) => {
    setFilterDate(date);
    console.log(date);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterDate} onFilterExpenseItem={filterExpenseItemHandler} />
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
    </Card>
  );
}

export default Expenses;
