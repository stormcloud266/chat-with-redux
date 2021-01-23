import { useState } from "react"
import { useDispatch } from "react-redux"
import { v4 as uuid } from "uuid"
import { addMessage } from "../actions/message"

const Form = () => {
	const dispatch = useDispatch()
	const [message, setMessage] = useState("")

	const handleOnSubmit = (e) => {
		e.preventDefault()
		const data = {
			id: uuid(),
			content: message,
			user: "Test User",
		}
		dispatch(addMessage(data))
		setMessage("")
	}

	return (
		<form onSubmit={handleOnSubmit} className="form">
			<input
				type="text"
				className="input"
				onChange={(el) => setMessage(el.target.value)}
				value={message}
			/>
		</form>
	)
}

export default Form
