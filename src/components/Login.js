import { useDispatch } from 'react-redux'
import { startLogin } from '../actions/auth'

const Login = () => {
	const dispatch = useDispatch()

	return (
		<div>
			<button onClick={() => dispatch(startLogin())}>Sign In</button>
		</div>
	)
}

export default Login
