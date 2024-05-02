import { useTheme } from "App/Providers/ThemeProviders"
import { classNames } from "Shared/lib/classNames"
import cls from './Navbar.module.scss'
import React from "react"
import { AppLink } from "Shared/lib/AppLink/Applink"
import { ThemeSwitcher } from "Widgets/ThemeSwitcher"

interface Props {
	className?: string
}

export const Navbar: React.FC<Props> = props => {

	const { theme, toogleTheme } = useTheme()

	return (
		<>
			<div className={classNames(cls.navbar)}>
				<div>
					<AppLink className={classNames(cls.links)} to={'/'} >Главная</AppLink>
					<AppLink to={'about'}>Обо всем</AppLink>
				</div>
				<ThemeSwitcher />
			</div>
		</>
	)
}