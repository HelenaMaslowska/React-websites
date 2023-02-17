import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

import Card from "../UI/Card";
import "./Expenses.css";

/*
const Expenses = (props) => {
    return(
        <Card className='expenses'>
            {props.expenses.map((expense)=>
			<ExpenseItem 
			id={expense.id}
			title={expense.title} 
			date={expense.date} 
			amount={expense.amount}/>)}
        </Card>
    )
}*/

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState("2022");

	const chosenYearHandler = (year) => {
		setFilteredYear(year);
	};

	const filteredExpenses = props.items.filter(expense => { 
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onChosenYear={chosenYearHandler}/>
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList items={filteredExpenses} updatedData={props.onNewExpenseData}/>
		</Card>
	);
}

export default Expenses;
