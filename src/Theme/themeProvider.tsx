import { FC, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from './themeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || Themes.Light

const ThemeProvider: FC = ({ children }) => {

	const [theme, setTheme] = useState<Themes>(defaultTheme)

	const providerProps = useMemo(() => ({
		theme: theme,
		setTheme: setTheme,
	}), [theme])

	return (
		<ThemeContext.Provider value={providerProps}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
