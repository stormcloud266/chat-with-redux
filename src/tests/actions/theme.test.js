import { toggleTheme } from '../../actions/theme'

test('should set up toggle theme object', () => {
	const action = toggleTheme()

	expect(action).toEqual({
		type: 'TOGGLE_THEME',
	})
})
