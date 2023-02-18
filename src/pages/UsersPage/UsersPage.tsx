import { FC, ReactElement } from 'react'
import './UsersPage.css'

interface Props {
	children: ReactElement
}

export const UsersPage: FC<Props> = ({ children }) => {
	return <div className='users-page'>{children}</div>
}
