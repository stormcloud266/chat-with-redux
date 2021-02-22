import { useSelector } from 'react-redux'
import Nav from './Nav'
import Form from './Form'
import MessageList from './MessageList'
import styles from '../styles/app.module.scss'
import { Helmet } from 'react-helmet'

function App() {
	const isLightTheme = useSelector((state) => state.isLightTheme)

	return (
		<div className={styles.app}>
			<Helmet>
				<meta charSet='utf-8' />
				<title>My Title</title>
				<html
					lang='en'
					className={isLightTheme ? 'light-theme' : 'dark-theme'}
				/>
			</Helmet>
			<Nav />

			<div className='container'>
				<MessageList />
				<Form />
			</div>
		</div>
	)
}

export default App
