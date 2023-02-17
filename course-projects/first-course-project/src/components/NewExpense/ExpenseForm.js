import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {

	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: '',
	// })
	const titleChangeHandler = event => {
		// setUserInput((prevState) => {		// use this instead of this in function below
		// 	return { ...prevState, enteredTitle: event.target.value };
		// });
		setEnteredTitle(event.target.value);
		//console.log(enteredTitle)
	}
	const amountChangeHandler = event => {
		setEnteredAmount(event.target.value);
		// setUserInput({						// it's not neccesary to use this, but you can (problem with semaphore with really special case)
		// 	...userInput, 
		// 	enteredAmount: event.target.value, 
		// })
	}
	const dateChangeHandler = event => {
		setEnteredDate(event.target.value);
		// setUserInput({
		// 	...userInput,  
		// 	enteredDate: event.target.value, 
		// })
	}
	const submitHandler = (event) => {
		event.preventDefault();			// with this built-in function you don't reload the page automatically
		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};
		props.onSaveExpenseData(expenseData);
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};

  	return (
		<form onSubmit={submitHandler}>	
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
				</div>

				<div className='new-expense__control'>
					<label>Amount</label>
					<input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
				</div>
				
				<div className='new-expense__control'>
					<label>Date</label>
					<input type='date' min="2001-10-17" value={enteredDate} onChange={dateChangeHandler}/>
				</div> 
			</div>
			
			<div className='new-expense__actions'>
				<button type="cancel" onClick={props.onCancel}>Cancel</button>
				<button type="submit" >Add expense</button>
			</div>
		</form>
 	)
}

export default ExpenseForm