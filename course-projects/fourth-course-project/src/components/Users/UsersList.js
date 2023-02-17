import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css'
const UsersList = props => {
	const yearOld = us => {
		return (us.age > 1 ? us.age + " years old" : us.age + " year old");
	}

	return (
		<Card className={classes.users}>
			<ul>
				{props.users.map((user) => (
					<li key={user.key}>
						{user.name} {yearOld(user)}
					</li>
				))}
			</ul>
		</Card>
	)
}

export default UsersList