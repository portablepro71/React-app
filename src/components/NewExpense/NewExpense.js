import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [isOpen, setIsOpen] = useState(false);


  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const toggle = () => setIsOpen(!isOpen);
  
  if (isOpen === true) {
    return <div className='new-expense'><ExpenseForm onSaveExpenseData={saveExpenseDataHandler} toggle={toggle}/></div>
  };
  

  return (
    <div className='new-expense'>
      <button onClick={toggle}>Add New Expense</button>
    </div>
  );
};

export default NewExpense;
