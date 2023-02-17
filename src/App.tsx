import { Route, Routes } from 'react-router-dom'
import { Form } from './components/Form/Form'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute'
import { UserList } from './components/UserList/UserList'
import { Page } from './pages/Page'

export const App = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<PrivateRoute>
						<Page>
							<UserList />
						</Page>
					</PrivateRoute>
				}
			/>
			<Route
				path='/sign-in'
				element={
					<Page>
						<Form />
					</Page>
				}
			/>
		</Routes>
	)
}
