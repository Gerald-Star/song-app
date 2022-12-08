import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import React, {useState} from 'react';





function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    // console.log(selectedYear);
    // console.log('Expenses.js')
    setFilteredYear(selectedYear)
  }

  //filtering an array of lists years/date transformation. Setting the expense as the condition
  // Using props.items from App.js to match the data object to string.
  //On the mapping, change the 
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;

  })
  // set the filteredExpense as the pointer to map out year removing props.item.map
// best readable to render in the return value

let expensesContent = <p>No expenses found.</p>

if (filteredExpenses.length > 0) {
  expensesContent = filteredExpenses.map((expense) => (
    <ExpenseItem 
    key={expense.id}
    title={expense.title}
    amount={expense.amount}
    date={expense.date}
     />
     )
     )};








  return (
    <div className="expenses">
      <ExpenseFilter selected={filteredYear} 
      onChangeFilter={filterChangeHandler} />

      {expensesContent}

      {/* using the default JS ternary expreesion to render conditional content 
      to descfibe when something did not show in the screen
      solution: 1
      */}

      {/* idea: 2 using tenary operator to render conditional content
      
      {filteredExpenses.length === 0 ? (
      
      <p>No expenses found.</p>
      ) : (
         filteredExpenses.map((expense) => (
        <ExpenseItem 
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
         />
         )
         ))} */}
      
      {/* idea:1 
      {filteredExpenses.map((expense) => (
        <ExpenseItem 
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
         />
         ))} */}
      

      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}

    </div>
  );
}

export default Expenses;


//  solution: 2 using the and && operator 

//       {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
//       then remove the ternary operator 0 and ? to > 0 && */}

//       {filteredExpenses.length > 0 && 
    
//           filteredExpenses.map((expense) => (
//           <ExpenseItem 
//           key={expense.id}
//           title={expense.title}
//           amount={expense.amount}
//           date={expense.date}
//            />
//            
//            ))}

// solution 3 : setting your logic outside the return

// let expensesContent = <p>No response found</p>
// if (filteredExpenses.length > 0) {

// expensesContent = filteredExpenses.map((expense) => (
  //           <ExpenseItem 
  //           key={expense.id}
  //           title={expense.title}
  //           amount={expense.amount}
  //           date={expense.date}
  //            />
  //            
  //            ))}
//               }

// then retun expensesContent

