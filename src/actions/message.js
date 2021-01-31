import { database } from '../firebase/firebase'

export const addMessage = (message) => ({
	type: 'ADD_MESSAGE',
	message,
})

export const startAddMessage = (data = {}) => {
	return (dispatch) => {
		const { content = '', user = '' } = data
		const message = { content, user }

		return database
			.ref('messages')
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

export const setMessages = (messages) => ({
	type: 'SET_MESSAGES',
	messages,
})

export const startSetMessages = () => {
	return (dispatch) => {
		return database
			.ref('messages')
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

// export const startDeleteMessage = (id) => {
// 	return (dispatch) => {

// 		return database
// 			.ref('messages')
// 			.push(message)
// 			.then((ref) =>
// 				dispatch(
// 					deleteMessage(id)
// 				)
// 			)
// 	}
// }
