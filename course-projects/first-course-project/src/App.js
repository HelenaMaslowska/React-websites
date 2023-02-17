import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{ 
		id: 'e2', 
		title: 'New TV', 
		amount: 799.49, 
		date: new Date(2021, 2, 12) },
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2021, 5, 12),
	},
];


function App() {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const expenseDataHandler = newExpense => {
		if(newExpense != null)
		{
			setExpenses(prevExpenses => {
				return [newExpense, ...prevExpenses]
			});			
		}
		console.log(newExpense);
	}

	const expenseUpdateDataHandler = value => {
		setExpenses(prevExpenses => {
			return [prevExpenses.target.value = value]
		})
	}

    return (

		<div>
			<NewExpense gotExpenseData={expenseDataHandler}/>
			<Expenses items={expenses} onNewExpenseData={expenseUpdateDataHandler} />
			<div style={ {color: 'white', textAlign: 'center'} }>Helena Masłowska, 8. May 2022</div>
		</div>
    );
}

export default App;
