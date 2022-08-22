import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filterDate, setFilterDate] = useState("2020");
  const filterExpenseItemHandler = (date) => {
    setFilterDate(date);
    console.log(date);
  };

  const expenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterDate
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterDate}
        onFilterExpenseItem={filterExpenseItemHandler}
      />
      <ExpensesChart expenses={expenses}/>
      <ExpensesList expenses={expenses} />
    </Card>
  );
};

export default Expenses;
