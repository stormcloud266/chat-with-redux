import { database, firebase, googleAuthProvider } from '../firebase/firebase'

export const login = (uid) => ({
	type: 'LOGIN',
	uid,
})

export const startLogin = () => {
	return () => {
		return firebase
			.auth()
			.signInWithPopup(googleAuthProvider)
			.then(({ user }) => {
				console.log(user)

				const data = {
					authorID: user.uid,
					username: user.displayName,
				}

				// return database.ref('chat/users').push(data)
				/*
          check if user already exists
          if it does get data (create action for this)
          else create new user
        */
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
