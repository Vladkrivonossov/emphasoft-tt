import { useEffect, useState } from 'react'
import './UserList.css'

interface IUser {
	id: number
	username: string
	first_name: string
	last_name: string
	is_active: boolean
	last_login: string | null
	is_superuser: boolean
}

export const UserList = () => {
	const [users, setUsers] = useState<IUser[]>([])
	const token = localStorage.getItem('token')

	const fetchUsers = async () => {
		const res = await fetch('https://test-assignment.emphasoft.com/api/v1/users', {
			method: 'GET',
			headers: {
				Authorization: `token ${token}`,
			},
		})

		const users = await res.json()

		setUsers(users)
	}
	useEffect(() => {
		fetchUsers()
	}, [])

	return (
		<div>
			{users.map((user) => {
				return (
					<div key={user.id} style={{ display: 'block' }}>
						{user.username}
					</div>
				)
			})}
		</div>
	)
}
