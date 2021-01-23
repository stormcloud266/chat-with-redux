import { themeReducer } from "./theme"
import { messagesReducer } from "./messages"
import { combineReducers } from "redux"

export const rootReducer = combineReducers({
	isLightTheme: themeReducer,
	messages: messagesReducer,
})
