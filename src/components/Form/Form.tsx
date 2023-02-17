import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { validate } from '../../helpers'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { signIn } from '../../store/authSlice'
import { IUserCredential } from '../../types'
import { Input } from '../Input/Input'
import './Form.css'

export const Form = () => {
	const [formValues, setFormValues] = useState<IUserCredential>({
		username: 'test_super',
		password: 'Nf<U4f<rDbtDxAPn',
	})
	const [formErrors, setFormErrors] = useState({
		username: '',
		password: '',
	})
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const { error } = useAppSelector((state) => state.auth)

	useEffect(() => {
		setFormErrors(validate(formValues))
	}, [formValues])

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		const name = e.target.name

		setFormValues({
			...formValues,
			[name]: value.trim(),
		})
	}

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (formErrors.password.length === 0 && formErrors.username.length === 0) {
			dispatch(signIn(formValues)).then((res) => {
				console.log(res)
				navigate('/')
			})
		}
	}

	return (
		<form className='form' onSubmit={submitHandler}>
			<h2>{error}</h2>
			<h1 className='form__title'>Sign in</h1>

			<Input
				id='username'
				name='username'
				lable='username'
				type='text'
				value={formValues.username}
				onChange={changeHandler}
				error={formErrors.username}
			/>

			<Input
				id='password'
				name='password'
				lable='password'
				type='text'
				value={formValues.password}
				onChange={changeHandler}
				error={formErrors.password}
			/>
			<button className='form__btn' type='submit'>
				sign in
			</button>
		</form>
	)
}
