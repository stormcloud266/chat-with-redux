import { database, firebase, googleAuthProvider } from '../firebase/firebase'

export const login = (uid) => ({
	type: 'LOGIN',
	uid,
})

export const startLogin = () => {
	return (dispatch) => {
		return firebase
			.auth()
			.signInWithPopup(googleAuthProvider)
			.then(({ user }) => {
				const userRecord = database.ref(`chat/users/${user.uid}`)

				return userRecord.once('value').then((snapshot) => {
					if (!snapshot.exists()) {
						userRecord.set({ username: user.displayName })
					}
				})
			})
	}
}

export const logout = () => ({
	type: 'LOGOUT',
})

export const startLogout = () => {
	return () => {
		return firebase.auth().signOut()
	}
}
