import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [openNewExpenseForm, setOpenNewExpenseForm] = useState(0);
  const saveNewExpenseHandler = (expense) => {
    props.onAddNewExpense(expense);
  };

  const openNewExpenseFormHandler = () => {
    if (openNewExpenseForm === 0) 
      setOpenNewExpenseForm(1);
    else 
      setOpenNewExpenseForm(0);
  };

  let expenseFormContent = <button onClick={openNewExpenseFormHandler}>Add New Expense</button>;
  if(openNewExpenseForm===1){
    expenseFormContent=<ExpenseForm onSaveNewExpense={saveNewExpenseHandler} onHideNewExpenseForm={openNewExpenseFormHandler} />;
  }
  return (
    <div className="new-expense">
      {expenseFormContent}
    </div>
  );
};
export default NewExpense;
