import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { themeReducer } from '../reducers/theme'
import { authReducer } from '../reducers/auth'
import { messagesReducer } from '../reducers/messages'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const configureStore = () => {
	const store = createStore(
		combineReducers({
			isLightTheme: themeReducer,
			messages: messagesReducer,
			auth: authReducer,
		}),
		composeEnhancers(applyMiddleware(thunk))
	)

	return store
}
