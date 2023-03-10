import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
function App() {
	const [usersList, setUsersList] = useState([]);
	const addUserHandler = (uName, uMail, uAge) => {
		setUsersList( (prevUsersList) => {
			return [...prevUsersList, {
						key: Math.random().toString(),
						name: uName, 
						mail: uMail, 
						age: uAge
					}]
		});
	}
	return (
		<div>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={usersList}/>
		</div>
	);	
}

export default App;
