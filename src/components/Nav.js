import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../actions/theme'
import { startLogout } from '../actions/auth'

const Nav = () => {
	const isLightTheme = useSelector((state) => state.isLightTheme)
	const dispatch = useDispatch()

	return (
		<header>
			<button onClick={() => dispatch(toggleTheme())}>
				Change to {isLightTheme ? 'Dark' : 'Light'} Theme
			</button>
			<Link to='/chat'>chat</Link>
			<Link to='/profile'>Profile</Link>
			<button onClick={() => dispatch(startLogout())}>Sign Out</button>
		</header>
	)
}

export default Nav
