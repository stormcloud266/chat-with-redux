export const userReducer = (state = {}, action) => {
	switch (action.type) {
		case 'GET_USER':
			return action.userData
		default:
			return state
	}
}
