export const messagesReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_MESSAGE':
			return [...state, action.message]
		case 'DELETE_MESSAGE':
			return state.filter((message) => message.id !== action.id)
		case 'SET_MESSAGES':
			return action.messages
		case 'EDIT_MESSAGE':
			return state.map((message) => {
				console.log(message)
				if (message.id === action.id) {
					return { ...message, ...action.updates }
				} else {
					return message
				}
			})
		default:
			return state
	}
}
