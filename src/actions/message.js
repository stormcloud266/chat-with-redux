export const addMessage = (payload) => ({
	type: "ADD_MESSAGE",
	payload,
})

// export const deleteMessage = (id) => ({
// 	type: "DELETE_MESSAGE",
// 	id,
// })

export const deleteMessage = (id) => {
	console.log("id: ", id)

	return {
		type: "DELETE_MESSAGE",
		id,
	}
}
