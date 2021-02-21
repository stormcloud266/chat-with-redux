import { database } from '../firebase/firebase'

export const addMessage = (message) => ({
	type: 'ADD_MESSAGE',
	message,
})

export const startAddMessage = (data = {}) => {
	return (dispatch, getState) => {
		const { content = '', user = '' } = data
		const authorID = getState().auth.uid
		const message = { content, user, authorID }

		return database
			.ref('chat/messages')
			.push(message)
			.then((ref) =>
				dispatch(
					addMessage({
						id: ref.key,
						...message,
					})
				)
			)
	}
}

export const deleteMessage = (id) => ({
	type: 'DELETE_MESSAGE',
	id,
})

export const startDeleteMessage = (id) => {
	return (dispatch) => {
		return database
			.ref(`chat/messages/${id}`)
			.remove()
			.then(() => dispatch(deleteMessage(id)))
	}
}

export const setMessages = (messages) => ({
	type: 'SET_MESSAGES',
	messages,
})

export const startSetMessages = () => {
	return (dispatch) => {
		return database
			.ref('chat/messages')
			.once('value')
			.then((snapshot) => {
				const messages = []

				snapshot.forEach((childSnapshot) => {
					messages.push({
						id: childSnapshot.key,
						...childSnapshot.val(),
					})
				})
				dispatch(setMessages(messages))
			})
	}
}

export const editMessage = (id, updates) => ({
	type: 'EDIT_MESSAGE',
	id,
	updates,
})

export const startEditMessage = (id, updates) => {
	return (dispatch) => {
		return database
			.ref(`chat/messages/${id}`)
			.update(updates)
			.then(() => {
				dispatch(editMessage(id, updates))
			})
	}
}
