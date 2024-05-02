import { Themes, useTheme } from "App/Providers/ThemeProviders"
import { classNames } from "Shared/lib/classNames"
import LightIcon from "Shared/assets/light.svg"
import DarkIcon from "Shared/assets/dark.svg"
import cls from './ThemeSwitcher.module.scss'
import React from "react"
import Button, { ButtonTheme } from "Shared/lib/Button/Button"



interface Props {
	className?: string
}


export const ThemeSwitcher: React.FC<Props> = props => {

	const { theme, toogleTheme } = useTheme()
	const { className } = props

	return (
		<Button
			className={classNames(cls.themeSwitcher, {}, [className])}
			onClick={toogleTheme}
			theme={ButtonTheme.Clear}>
			{theme === Themes.Dark ? <DarkIcon /> : <LightIcon />}
		</Button>
	)
}