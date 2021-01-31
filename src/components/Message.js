import { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { startDeleteMessage, startEditMessage } from '../actions/message'

const Message = ({ content, user, id }) => {
	const dispatch = useDispatch()
	const [canEdit, setCanEdit] = useState(false)
	const [message, setMessage] = useState(content)
	const [editedMessage, setEditedMessage] = useState(message)

	const handleEscape = useCallback(
		(e) => {
			if (e.key === 'Escape') {
				setCanEdit(false)
				setEditedMessage(message)
			}
		},
		[message]
	)

	const handleKeypress = (e) => {
		if (e.key === 'Enter' && canEdit) {
			setCanEdit(false)
			setMessage(editedMessage)

			dispatch(
				startEditMessage(id, {
					user,
					content: editedMessage,
				})
			)
		}
	}

	useEffect(() => {
		if (!canEdit) return
		window.addEventListener('keydown', handleEscape)
		return () => window.removeEventListener('keydown', handleEscape)
	}, [canEdit, handleEscape])

	return (
		<div className='message'>
			<div className='message-text'>
				<h4>{user}</h4>
				{canEdit ? (
					<input
						type='text'
						className='edit-input'
						value={editedMessage}
						onChange={(e) => setEditedMessage(e.target.value)}
						onKeyPress={handleKeypress}
					/>
				) : (
					<p>{message}</p>
				)}
			</div>

			<button className='message-button' onClick={() => setCanEdit(true)}>
				edit
			</button>

			<button
				className='message-button'
				onClick={() => dispatch(startDeleteMessage(id))}
			>
				X
			</button>
		</div>
	)
}

export default Message
