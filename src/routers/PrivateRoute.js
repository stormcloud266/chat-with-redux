import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {
	const auth = useSelector((state) => state.auth)
	const isAuthenticated = !!auth.uid

	return (
		<Route
			{...rest}
			component={(props) =>
				isAuthenticated ? (
					<div>
						<div>
							<Component {...props} />
						</div>
					</div>
				) : (
					<Redirect to='/' />
				)
			}
		/>
	)
}

export default PrivateRoute
