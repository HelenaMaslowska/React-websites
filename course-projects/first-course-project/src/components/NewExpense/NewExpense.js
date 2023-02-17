import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
	const [isEditing, setEditing] = useState(false);
	const saveExpenseDataHandler = (previousExpenseData) => {
		const expenseData = {
			...previousExpenseData,
			id: Math.random().toString()
		};
		props.gotExpenseData(expenseData);
		setEditing(false);
	};

	const startEditingHandler = () => {
		setEditing(true);
	}

	const cancelHandler = () => {
		setEditing(false);
	}

  return (
	<div className='new-expense'>
		{!isEditing && <button onClick={startEditingHandler}>Add expense</button>}
		{isEditing && (
		<ExpenseForm  onSaveExpenseData={saveExpenseDataHandler}  onCancel={cancelHandler} /> )}
	</div>
  )
}

export default NewExpense