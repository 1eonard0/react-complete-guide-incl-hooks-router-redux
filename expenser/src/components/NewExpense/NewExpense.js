import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveNewExpenseHandler = (expense) => {
    props.onAddNewExpense(expense);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveNewExpense={saveNewExpenseHandler} />
    </div>
  );
};
//aBs1b0r5gKe4wFx7n6c(
export default NewExpense;
