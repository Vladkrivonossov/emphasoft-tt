import { ChangeEvent, FC, InputHTMLAttributes } from 'react'
import './Input.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	error: string
	lable: string
}

export const Input: FC<Props> = ({ value, error, onChange, lable, ...rest }) => {
	return (
		<div className='field'>
			<label className='field__lable' htmlFor={lable}>
				{lable}
			</label>
			<input {...rest} className='field__input' value={value} onChange={onChange} />
			<span className='field__error'>{error ?? null}</span>
		</div>
	)
}
