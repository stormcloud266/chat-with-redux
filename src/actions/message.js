import { v4 as uuid } from 'uuid'

export const addMessage = ({ content = '', user = '' }) => ({
	type: 'ADD_MESSAGE',
	message: {
		id: uuid(),
		content,
		user,
	},
})

export const deleteMessage = (id) => ({
	type: 'DELETE_MESSAGE',
	id,
})
