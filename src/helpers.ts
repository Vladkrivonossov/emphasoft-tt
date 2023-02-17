import { IUserCredential } from './types'
import { baseUrl } from './utils'

export const token = '2455b1c6c4d52df246fb042f60f21856a22f6a6b'

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
		errors.password = 'password should be longer'
	}

	if (userCredentials.password.length > 20) {
		errors.password = 'password sould be less'
	}

	return errors
}
