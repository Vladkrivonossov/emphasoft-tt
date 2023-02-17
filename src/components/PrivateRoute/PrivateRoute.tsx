import { FC, ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

interface Props {
	children: ReactElement
}

export const PrivateRoute: FC<Props> = ({ children }) => {
	const token = localStorage.getItem('token')

	return token ? children : <Navigate to='/sign-in' />
}
