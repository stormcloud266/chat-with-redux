import { useSelector } from 'react-redux'
import Message from './Message'

const MessageList = () => {
	const messages = useSelector((state) => state.messages)

	return (
		<div className='message-list'>
			{messages.map((message) => (
				<Message {...message} key={message.id} />
			))}
		</div>
	)
}

export default MessageList
