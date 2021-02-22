import { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactTooltip from 'react-tooltip'
import { startDeleteMessage, startEditMessage } from '../actions/message'
import { DeleteIcon, EditIcon } from '../assets/icons'

const Message = ({ content, username, id, authorID }) => {
	const dispatch = useDispatch()
	const [canEdit, setCanEdit] = useState(false)
	const [message, setMessage] = useState(content)
	const [editedMessage, setEditedMessage] = useState(message)
	const userID = useSelector((state) => state.auth.uid)

	const exitEdit = useCallback(() => {
		setCanEdit(false)
		setEditedMessage(message)
	}, [message])

	const handleEscape = useCallback(
		(e) => {
			if (e.key === 'Escape') {
				exitEdit()
			}
		},
		[exitEdit]
	)

	const handleKeypress = (e) => {
		if (e.key === 'Enter' && canEdit) {
			setCanEdit(false)
			setMessage(editedMessage)

			dispatch(
				startEditMessage(id, {
					user: username,
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
				<h4>{username}</h4>
				{canEdit ? (
					<input
						type='text'
						className='edit-input'
						value={editedMessage}
						onChange={(e) => setEditedMessage(e.target.value)}
						onKeyPress={handleKeypress}
						onBlur={exitEdit}
						autoFocus
					/>
				) : (
					<p>{message}</p>
				)}
			</div>

			{userID === authorID && (
				<div className='message-buttons'>
					<button
						className='message-button message-button--edit'
						onClick={() => setCanEdit(true)}
						data-tip
						data-for='edit'
					>
						<EditIcon />
					</button>

					<ReactTooltip
						delayShow={700}
						id='edit'
						place='top'
						effect='solid'
						type='info'
					>
						Edit
					</ReactTooltip>

					<button
						className='message-button message-button--delete'
						onClick={() => dispatch(startDeleteMessage(id))}
						data-tip
						data-for='delete'
					>
						<DeleteIcon />
					</button>
					<ReactTooltip
						delayShow={700}
						id='delete'
						place='top'
						effect='solid'
						type='info'
					>
						Delete
					</ReactTooltip>
				</div>
			)}
		</div>
	)
}

export default Message
