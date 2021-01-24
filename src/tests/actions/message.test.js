import { addMessage, deleteMessage } from '../../actions/message'

test('should set up add message object', () => {
	const message = {
		content: 'message',
		user: 'test user',
	}
	const action = addMessage(message)

	expect(action).toEqual({
		type: 'ADD_MESSAGE',
		message: {
			...message,
			id: expect.any(String),
		},
	})
})

test('should set up add message object with defaults', () => {
	const action = addMessage()

	expect(action).toEqual({
		type: 'ADD_MESSAGE',
		message: {
			content: '',
			user: '',
			id: expect.any(String),
		},
	})
})

test('should set up delete message object', () => {
	const action = deleteMessage('id123')

	expect(action).toEqual({
		type: 'DELETE_MESSAGE',
		id: 'id123',
	})
})
