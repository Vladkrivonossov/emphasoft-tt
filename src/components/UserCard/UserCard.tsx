import { FC } from 'react'
import { IUser } from '../../types'
import './UserCard.css'

interface Props {
	user: IUser
}

export const UserCard: FC<Props> = ({ user }) => {
	return (
		<div className='card'>
			<div className='card__uid'>
				<span className='uid__title'>userID:</span> <span className='uid__value'>{user.id}</span>
			</div>
			<div className='card__uname'>
				<span className='uname__title'>username:</span> <span className='uname__value'>{user.username}</span>
			</div>
		</div>
	)
}
