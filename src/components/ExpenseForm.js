import React, {useState} from 'react';
import './ExpenseForm.css';    

// instead of writing three multiple states, one state approach is use.
//you set the state as an object inside the useState
const ExpenseForm = (props) => {


    const [titleChange, setTitleChange] = useState("");
    const [amountChange, setAmountChange] = useState("");
    const [dateChange, setDateChange] = useState("");

    //const [userInput, setUserInput] = useState({
    //    titleChange: "",
    //    amountChange: "",
    //    dateChange:"",

    //});

    const titleChangeHandler = (event) => {
        // console.log(event.target.value);
        setTitleChange(event.target.value);
        //use spread operator here to hold other States
       //setUserInput ({
        //...userInput,
        //titleChange: event.target.value,
       //})

       //using the prevState approach as the best valid solution if your state depends
       //on the prevState
       //setUserInput((prevState) => {
        //return {
        //   ...prevState,
        //    titleChange: event.target.value,}
       //});
    }


    const amountChangeHandler = (event)=> {
        setAmountChange(event.target.value)
        //console.log(amountChange);

        //setUserInput ({
        //    ...userInput,
        //    amountChange: event.target.value,
        //})
    }

    const dateChangeHandler = (event)=> {
        setDateChange(event.target.value)
        //console.log(dateChange);

        //setUserInput ({
        //    ...userInput,
        //    dateChange: event.target.value,
        //})
    }
    const submitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            title: titleChange,
            amount: amountChange,
            date: new Date(dateChange),
        };
        // to pass the child component to the parent. You first declare it on the parent
        //pass as a prop to the child
        // console.log(expenseData); you pass the props from the child to the parents here
        // and pass the expenseData removing the console and execute here
        props.onSaveExpenseData(expenseData)
        setTitleChange("");
        setAmountChange("");
        setDateChange("");
    };

   //set all the input here with an empty strings. This clears all what the user input

    return (
        <form onSubmit= {submitHandler}>
            <div className='new-expense_controls'> 
                <div className='new-expense_control'>
                    <label>Title</label>
                    <input type="text"  
                     value={titleChange}
                    onChange={titleChangeHandler} />
                </div>

                <div className='new-expense_control'>
                    <label>Amount</label>
                    <input type="number"  
                    value={amountChange}
                    onChange={amountChangeHandler}  
                    min="0.01" step="0.01" />
                </div>

                <div className='new-expense_control'>
                    <label>Date</label>
                    <input type="date" 
                    value={dateChange}
                    onChange={dateChangeHandler}  
                    min="2010-01-10" max="2022-12-31" />
                </div>
            
            </div>

            <div className='new-expense_actions'>
            
                <button type="submit">Add Expenses</button>
            </div>
        </form>
    )
};

export default ExpenseForm;