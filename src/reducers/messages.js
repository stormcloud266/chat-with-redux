export const messagesReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_MESSAGE':
			return [...state, action.message]
		case 'DELETE_MESSAGE':
			return state.filter((message) => message.id !== action.id)
		case 'SET_MESSAGES':
			return action.messages
		default:
			return state
	}
}
