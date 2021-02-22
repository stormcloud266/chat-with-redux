import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import { configureStore } from './store/configureStore'
import { startSetMessages } from './actions/message'
import { startGetUser } from './actions/user'
import { login, logout } from './actions/auth'
import { firebase } from './firebase/firebase'

import './firebase/firebase'
import './index.css'

const store = configureStore()

const app = (
	<Provider store={store}>
		<React.StrictMode>
			<AppRouter />
		</React.StrictMode>
	</Provider>
)

let hasRendered = false

const renderApp = () => {
	if (!hasRendered) {
		ReactDOM.render(app, document.getElementById('root'))
		hasRendered = true
	}
}

// ReactDOM.render(<p>loading...</p>, document.getElementById('root'))

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		store.dispatch(login(user.uid))
		store.dispatch(startGetUser(user.uid))
		store.dispatch(startSetMessages()).then(() => {
			renderApp()
		})
		if (history.location.pathname === '/') {
			history.push('/chat')
		}
	} else {
		store.dispatch(logout())
		renderApp()
		history.push('/')
	}
})
