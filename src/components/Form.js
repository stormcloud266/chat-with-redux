import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMessage } from '../actions/message'

const Form = () => {
	const dispatch = useDispatch()
	const [message, setMessage] = useState('')

	const handleOnSubmit = (e) => {
		e.preventDefault()

		if (message.trim().length > 0) {
			dispatch(
				addMessage({
					content: message,
					user: 'Test User',
				})
			)
			setMessage('')
		}
	}

	return (
		<form onSubmit={handleOnSubmit} className='form'>
			<input
				type='text'
				className='input'
				onChange={(el) => setMessage(el.target.value)}
				value={message}
			/>
		</form>
	)
}

export default Form
