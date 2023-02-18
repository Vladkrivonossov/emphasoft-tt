import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { fetchUsers } from '../../store/usersSlice'
import { CustomError } from '../CustomError/CustomError'
import { Filter } from '../Filter/Filter'
import { UserCard } from '../UserCard/UserCard'
import './UserList.css'

export const UserList = () => {
	const { filtredUsers, status, error } = useAppSelector((state) => state.users)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchUsers())
	}, [dispatch])

	return (
		<>
			<Filter />
			{status === 'loading' && <h1>loading...</h1>}
			{status === 'resolved' && (
				<div className='list__container'>
					{filtredUsers.map((user) => {
						return <UserCard key={user.id} user={user} />
					})}
				</div>
			)}
			{status === 'rejected' && <CustomError message={error} />}
		</>
	)
}
