import React, { Fragment, useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
//import Wrapper from "../Helpers/Wrapper";
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUser.module.css';

const AddUser = props => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();
	const mailInputRef = useRef();

	const [error, setError] = useState();

	const addUserHandler = (event) => {
		event.preventDefault();
		const enteredName = nameInputRef.current.value;
		const enteredMail = mailInputRef.current.value;
		const enteredAge = ageInputRef.current.value;
		if(enteredName.trim().length === 0)
		{
			setError({
				title: 'Enter username',
				message: 'I see you, Alex - the Noname O.O'
			})
			return;
		}
		if(enteredMail.trim().length === 0)
		{
			setError({
				title: 'Enter e-mail',
				message: 'You will log in by your e-mail, so you need to enter here something.'
			})
			return;
		}

		if(enteredAge.trim().length === 0)
		{
			setError({
				title: 'How old are you?',
				message: 'I think you don\'t want to show your age. But you need, please do that and I promise, I will never tell that to anybody.'
			})
			return;
		}
		if(+enteredAge < 1)
		{
			setError({
				title: 'You are too young to be here...',
				message: 'Gotcha! So you have less than one year old?'
			})
			return;
		}
		props.onAddUser(enteredName, enteredMail, enteredAge);
		nameInputRef.current.value = '';	//manipulates the DOM
		ageInputRef.current.value = '';
		mailInputRef.current.value = '';
	}

	const errorHandler = () => {
		setError(null);
	}
	return (
		<Fragment>
			{error && (<ErrorModal 
				title={error.title} 
				message={error.message} 
				onConfirm={errorHandler}/>
				)}
	
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username"> Username </label>
					<input id="username" type="text" ref={nameInputRef}/>

					<label htmlFor="email"> Mail </label>
					<input id="email" type="mail" ref={mailInputRef}/>

					<label htmlFor="age"> Age </label>
					<input id="age" type="number" ref={ageInputRef}/>

					<Button type="submit"> Add </Button>
				</form>
			</Card>
		</Fragment>
	)
};

export default AddUser;