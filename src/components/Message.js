import { useDispatch } from 'react-redux'
import { deleteMessage } from '../actions/message'

const Message = ({ content, user, id }) => {
	const dispatch = useDispatch()

	return (
		<div className='message'>
			<div className='message-text'>
				<h4>{user}</h4>
				<p>{content}</p>
			</div>

			<button
				className='message-button'
				onClick={() => dispatch(deleteMessage(id))}
			>
				X
			</button>
		</div>
	)
}

export default Message
