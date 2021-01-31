import { useDispatch } from 'react-redux'
import { startDeleteMessage } from '../actions/message'

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
				onClick={() => dispatch(startDeleteMessage(id))}
			>
				X
			</button>
		</div>
	)
}

export default Message
