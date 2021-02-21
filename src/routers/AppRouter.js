import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Login from '../components/Login'
import App from '../components/App'

const AppRouter = () => (
	<Router>
		<div>
			<ul>
				<li>
					<Link to='/'>login</Link>
				</li>
				<li>
					<Link to='/chat'>chat</Link>
				</li>
			</ul>

			<Switch>
				<Route path='/' exact={true} component={Login} />
				<Route path='/chat' component={App} />
			</Switch>
		</div>
	</Router>
)

export default AppRouter
