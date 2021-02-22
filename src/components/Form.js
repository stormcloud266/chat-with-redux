import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startAddMessage } from '../actions/message'
import styles from '../styles/form.module.scss'

const Form = () => {
	const dispatch = useDispatch()
	const [message, setMessage] = useState('')
	const username = useSelector((state) => state.user.username)

	const handleOnSubmit = (e) => {
		e.preventDefault()

		if (message.trim().length > 0) {
			dispatch(
				startAddMessage({
					content: message,
					username,
				})
			)
			setMessage('')
		}
	}

	return (
		<form onSubmit={handleOnSubmit} className={styles.form}>
			<input
				type='text'
				placeholder='Message'
				className={styles.input}
				onChange={(el) => setMessage(el.target.value)}
				value={message}
			/>
		</form>
	)
}

export default Form
