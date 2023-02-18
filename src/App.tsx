import { Route, Routes } from 'react-router-dom'
import { Form } from './components/Form/Form'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute'
import { UserList } from './components/UserList/UserList'
import { AuthPage } from './pages/AuthPage/AuthPage'
import { UsersPage } from './pages/UsersPage/UsersPage'

export const App = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<PrivateRoute>
						<UsersPage>
							<UserList />
						</UsersPage>
					</PrivateRoute>
				}
			/>
			<Route
				path='/sign-in'
				element={
					<AuthPage>
						<Form />
					</AuthPage>
				}
			/>
		</Routes>
	)
}
