import { classNames } from "Shared/lib/classNames"
import cls from './Navbar.module.scss'
import React from "react"
import { AppLink } from "Shared/lib/AppLink/Applink"

interface Props {
	className?: string
}

export const Navbar: React.FC<Props> = props => {

	return (
		<>
			<div className={classNames(cls.navbar)}>
				<div>
					<AppLink className={classNames(cls.links)} to={'/'} >Главная</AppLink>
					<AppLink to={'about'}>Обо всем</AppLink>
				</div>

			</div>
		</>
	)
}