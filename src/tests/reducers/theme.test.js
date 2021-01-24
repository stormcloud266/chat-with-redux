import { themeReducer } from '../../reducers/theme'

test('should set default state', () => {
	const state = themeReducer(undefined, { type: '@@INIT' })
	expect(state).toEqual(true)
})

test('should set light theme to false', () => {
	const state = themeReducer(undefined, {
		type: 'TOGGLE_THEME',
	})
	expect(state).toEqual(false)
})
