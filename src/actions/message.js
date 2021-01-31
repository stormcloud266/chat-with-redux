import { database } from '../firebase/firebase'

export const addMessage = (message) => ({
	type: 'ADD_MESSAGE',
	message,
})

export const startAddMessage = (message = {}) => {
	return (dispatch) => {
		const { content, user } = message
	}
}

export const deleteMessage = (id) => ({
	type: 'DELETE_MESSAGE',
	id,
})
