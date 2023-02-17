import { FC, ReactElement } from 'react'
import './Page.css'

interface Props {
	children: ReactElement
}

export const Page: FC<Props> = ({ children }) => {
	return <div className='container'>{children}</div>
}
