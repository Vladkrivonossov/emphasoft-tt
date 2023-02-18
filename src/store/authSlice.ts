import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IUserCredential } from '../types'
import { baseUrl } from '../utils'

interface IInitialState {
	token: string | null
	error: string | null
	status: 'loading' | 'resolved' | 'rejected' | null
}

const initialState: IInitialState = {
	token: null,
	error: null,
	status: null,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		removeErr: (state) => {
			state.error = null
		},
	},
	extraReducers: (builder) => {
		builder.addCase(signIn.pending, (state) => {
			state.status = 'loading'
			state.error = null
		})
		builder.addCase(signIn.fulfilled, (state, action) => {
			state.status = 'resolved'
			state.token = action.payload.token
		})
		builder.addCase(signIn.rejected, (state, action) => {
			state.status = 'rejected'
			state.error = action.payload as string
		})
	},
})

export const signIn = createAsyncThunk('auth/signIn', async function (formData: IUserCredential, { rejectWithValue }) {
	try {
		const res = await fetch(`${baseUrl}/login/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})

		if (!res.ok) {
			throw new Error('Incorrect username or password.')
		}

		const token = await res.json()
		localStorage.setItem('token', token.token)
		return token
	} catch (e: any) {
		return rejectWithValue(e.message)
	}
})

export default authSlice.reducer
