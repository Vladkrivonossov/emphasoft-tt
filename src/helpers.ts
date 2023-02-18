import { IUserCredential } from './types'

export const validate = (userCredentials: IUserCredential) => {
	let errors: IUserCredential = {
		username: '',
		password: '',
	}

	if (userCredentials.username.length < 2) {
		errors.username = 'username should be longer than 2'
	}

	if (userCredentials.username.length > 20) {
		errors.username = 'username sould be less than 20'
	}

	if (userCredentials.password.length < 4) {
		errors.password = 'password should be longer than 4'
	}

	if (userCredentials.password.length > 20) {
		errors.password = 'password sould be less than 20'
	}

	return errors
}
