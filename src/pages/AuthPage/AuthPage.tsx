import { FC, ReactElement } from 'react'
import './AuthPage.css'

interface Props {
	children: ReactElement
}

export const AuthPage: FC<Props> = ({ children }) => {
	return <div className='auth-page'>{children}</div>
}
