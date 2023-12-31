import React, {useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: "el",
    title: "Toilet",
    amount: 94.2,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.47, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => { 
 const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

 const addExpenseHandler = expense => {
  setExpenses(prevExpenses => {
    return [expense, ...prevExpenses];
  });
  // console.log('In App.js');
  // console.log(expense);
};

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
// https://github.com/academind/react-complete-guide-code/tree/03-react-basics-working-with-components/code