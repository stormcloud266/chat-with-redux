import { messagesReducer } from '../../reducers/messages'
import { messages } from '../fixtures/messages'

test('should set default state', () => {
	const state = messagesReducer(undefined, { type: '@@INIT' })
	expect(state).toEqual([])
})

test('should delete message by id', () => {
	const action = {
		type: 'DELETE_MESSAGE',
		id: messages[1].id,
	}
	const state = messagesReducer(messages, action)
	expect(state).toEqual([messages[0], messages[2]])
})

test('should not delete message if id not found', () => {
	const action = {
		type: 'DELETE_MESSAGE',
		id: 4,
	}
	const state = messagesReducer(messages, action)
	expect(state).toEqual(messages)
})

test('should add new message', () => {
	const message = {
		id: '4',
		content: 'message four',
		user: 'user four',
	}

	const action = {
		type: 'ADD_MESSAGE',
		message,
	}

	const state = messagesReducer(messages, action)
	expect(state).toEqual([...messages, message])
})
