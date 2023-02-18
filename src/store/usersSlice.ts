import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../types'
import { baseUrl } from '../utils'

interface IInitialState {
	usersList: IUser[]
	filtredUsers: IUser[]
	error: string | null
	status: 'loading' | 'resolved' | 'rejected' | null
}

const initialState: IInitialState = {
	usersList: [],
	filtredUsers: [],
	error: null,
	status: null,
}

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		sortByIdASC: (state) => {
			state.filtredUsers.sort((a, b) => a.id - b.id)
		},
		sortByIdDESC: (state) => {
			state.filtredUsers.sort((a, b) => b.id - a.id)
		},
		filterByName: (state, action: PayloadAction<string>) => {
			state.filtredUsers = state.usersList.filter((user) => {
				return user.username.includes(action.payload)
			})
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUsers.pending, (state) => {
			state.status = 'loading'
			state.error = null
		})
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.status = 'resolved'
			state.usersList = action.payload
			state.filtredUsers = action.payload
		})
		builder.addCase(fetchUsers.rejected, (state, action) => {
			state.status = 'rejected'
			state.error = action.payload as string
		})
	},
})

export const fetchUsers = createAsyncThunk('users/fetchUsers', async function (_, { rejectWithValue }) {
	try {
		const token = localStorage.getItem('token')

		const res = await fetch(`${baseUrl}/users`, {
			method: 'GET',
			headers: {
				Authorization: `token ${token}`,
			},
		})

		if (!res.ok) {
			throw new Error('Error fetching users')
		}

		const users = await res.json()
		return users
	} catch (e: any) {
		return rejectWithValue(e.message)
	}
})

export default usersSlice.reducer
