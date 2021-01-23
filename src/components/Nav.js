import { useSelector, useDispatch } from "react-redux"
import { toggleTheme } from "../actions/theme"

const Nav = () => {
	const isLightTheme = useSelector((state) => state.isLightTheme)
	const dispatch = useDispatch()

	return (
		<header>
			<button onClick={() => dispatch(toggleTheme())}>
				Change to {isLightTheme ? "Dark" : "Light"} Theme
			</button>
		</header>
	)
}

export default Nav
