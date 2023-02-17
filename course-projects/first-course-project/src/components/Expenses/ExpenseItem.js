import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';

import Card from '../UI/Card';
import './ExpenseItem.css';

export default function ExpenseItem(props) 
{
	const [count, setCount] = useState(props.amount)

	const minusHandler = () => {
		if(count - 1 > 0) {
			setCount(Math.round((count - 1)*100)/100);			
		}
	}

	const plusHandler = () => {
		setCount(Math.round((count + 1)*100)/100);
	}

    return (
		<li>
			<Card className='expense-item'>
				<ExpenseDate date={props.date}/>
				<div className='expense-item__description'>
					<h2>{props.title}</h2>
					<div className='expense-item__price'>{props.amount} zł</div>
				</div>
	{/*
				<button onClick={minusHandler} onChange={props.decreaseExpenseValue}> - </button>
				<button onClick={plusHandler} onChange={props.increaseExpenseValue}> + </button>
	*/}
			</Card>	
		</li>
    );
}
