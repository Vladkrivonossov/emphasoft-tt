export interface IUserCredential {
	username: string
	password: string
}

export interface IUser {
	id: number
	username: string
	first_name: string
	last_name: string
	is_active: boolean
	last_login: string | null
	is_superuser: boolean
}
