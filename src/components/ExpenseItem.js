import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
// import {useState} from 'react'

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);
  // console.log('experience')

   // const clickHandler = () =>{
  //   console.log('Clicked!!') 
  // create a function clickhandler keyword and pass it to button
  //this is how to add even listener to our state
  // };

  // const clickHandler = () => {
  //   setTitle ('Updated'); //calling the useState updating function
  //   console.log(title);
  // };



  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler }>Change Title</button> */}
    </div>
  );
}

export default ExpenseItem;

//Every event needs a value that assigns to what this event should do
//the value on the onClick event is clickHandler. 
//To define this value, we to declare a function (const) that holds
//a variable. This makes your code lean by not defining the function inside the onClick.
