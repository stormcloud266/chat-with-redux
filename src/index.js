import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import { configureStore } from './store/configureStore'
import { startSetMessages } from './actions/message'

import './firebase/firebase'
import './index.css'

const store = configureStore()

const root = (
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>
)

ReactDOM.render(<p>loading...</p>, document.getElementById('root'))

store.dispatch(startSetMessages()).then(() => {
	ReactDOM.render(root, document.getElementById('root'))
})
