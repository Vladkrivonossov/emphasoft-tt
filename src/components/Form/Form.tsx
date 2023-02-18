import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { validate } from '../../helpers'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { authSlice, signIn } from '../../store/authSlice'
import { IUserCredential } from '../../types'
import { CustomError } from '../CustomError/CustomError'
import { Input } from '../Input/Input'
import './Form.css'

export const Form = () => {
	const [formValues, setFormValues] = useState<IUserCredential>({
		username: '',
		password: '',
	})
	const [formErrors, setFormErrors] = useState({
		username: '',
		password: '',
	})
	const { removeErr } = authSlice.actions
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const { error } = useAppSelector((state) => state.auth)

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		const name = e.target.name
		dispatch(removeErr())

		setFormValues({
			...formValues,
			[name]: value.trim(),
		})
	}

	const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const errors = validate(formValues)

		if (errors.username.length === 0 && errors.password.length === 0) {
			dispatch(signIn(formValues)).then(() => navigate('/'))
		} else {
			setFormErrors(errors)
		}
	}

	return (
		<form className='form' onSubmit={submitHandler}>
			<h1 className='form__title'>Sign in</h1>
			<Input
				required
				id='username'
				name='username'
				lable='username'
				type='text'
				value={formValues.username}
				onChange={changeHandler}
				error={formErrors.username}
			/>

			<Input
				required
				id='password'
				name='password'
				lable='password'
				type='password'
				value={formValues.password}
				onChange={changeHandler}
				error={formErrors.password}
			/>

			<CustomError message={error} />
			<button className='form__btn' type='submit'>
				sign in
			</button>
		</form>
	)
}
