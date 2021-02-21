import { Router, Switch, Route, Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { useDispatch } from 'react-redux'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import Login from '../components/Login'
import NotFound from '../components/NotFound'
import App from '../components/App'
import { startLogout } from '../actions/auth'

export const history = createBrowserHistory()

const AppRouter = () => {
	const dispatch = useDispatch()

	return (
		<Router history={history}>
			<div>
				<div>
					<Link to='/'>login</Link>
					<Link to='/chat'>chat</Link>
					<button onClick={() => dispatch(startLogout())}>Sign Out</button>
				</div>

				<Switch>
					<PublicRoute path='/' exact={true} component={Login} />
					<PrivateRoute path='/chat' component={App} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</Router>
	)
}

export default AppRouter
