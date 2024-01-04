import { useContext } from "react"
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from "./themeContext"

interface UseThemeResult {
	theme: Themes
	toogleTheme: () => void
}

export function useTheme(): UseThemeResult {

	const { setTheme, theme } = useContext(ThemeContext)

	const toogleTheme = () => {
		const newTheme = theme == Themes.Light ? Themes.Dark : Themes.Light
		setTheme(newTheme)
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	}

	return {
		theme,
		toogleTheme
	}
}