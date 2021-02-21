import { useSelector } from 'react-redux'
import Nav from './Nav'
import Form from './Form'
import MessageList from './MessageList'

import '../App.css'

function App() {
	const isLightTheme = useSelector((state) => state.isLightTheme)

	return (
		<div
			className='App'
			style={{
				backgroundColor: isLightTheme ? 'white' : '#282c34',
				color: isLightTheme ? '#282c34' : 'white',
			}}
		>
			<Nav />

			<div className='container'>
				<MessageList />
				<Form />
			</div>
		</div>
	)
}

export default App
