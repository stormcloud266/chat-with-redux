import { Router, Switch, Route, Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { useDispatch } from 'react-redux'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import Login from '../components/Login'
import Profile from '../components/Profile'
import NotFound from '../components/NotFound'
import App from '../components/App'

export const history = createBrowserHistory()

const AppRouter = () => {
	return (
		<Router history={history}>
			<Switch>
				<PublicRoute path='/' exact={true} component={Login} />
				<PrivateRoute path='/chat' component={App} />
				<PrivateRoute path='/profile' component={Profile} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	)
}

export default AppRouter
