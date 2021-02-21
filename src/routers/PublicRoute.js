import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PublicRoute = ({ component: Component, ...rest }) => {
	const auth = useSelector((state) => state.auth)
	const isAuthenticated = !!auth.uid

	return (
		<Route
			{...rest}
			component={(props) =>
				isAuthenticated ? (
					<Redirect to='/chat' />
				) : (
					<div>
						<div>
							<Component {...props} />
						</div>
					</div>
				)
			}
		/>
	)
}

export default PublicRoute
