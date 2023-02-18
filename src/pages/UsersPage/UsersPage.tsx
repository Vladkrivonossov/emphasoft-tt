import { FC, ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import './UsersPage.css'

interface Props {
	children: ReactElement
}

export const UsersPage: FC<Props> = ({ children }) => {
	const navigate = useNavigate()
	return (
		<div className='users-page'>
			<button
				className='logout-btn'
				onClick={() => {
					localStorage.removeItem('token')
					navigate('/sign-in')
				}}
			>
				logout
			</button>
			{children}
		</div>
	)
}
