import { FC } from 'react'
import './CustomError.css'

interface Props {
	message: string | null
}

export const CustomError: FC<Props> = ({ message }) => {
	return message ? <div className='error'>{message}</div> : null
}
