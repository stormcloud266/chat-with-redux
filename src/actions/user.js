import { database } from '../firebase/firebase'

export const getUser = (userData) => ({
	type: 'GET_USER',
	userData,
})

export const startGetUser = (uid) => {
	return (dispatch) => {
		return database
			.ref(`/chat/users/${uid}`)
			.once('value')
			.then((snapshot) => {
				const userData = {
					authorID: uid,
					...snapshot.val(),
				}
				dispatch(getUser(userData))
			})
	}
}
