import React from "react";

interface User {
	id: number;
	name: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
}

const UsersPage = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const users: User[] = await res.json();

	return (
		<>
			<h1>Users</h1>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</>
	);
};

export default UsersPage;
