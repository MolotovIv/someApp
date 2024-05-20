import { classNames } from "Shared/lib/classNames";
import cls from './SideBar.module.scss'
import { FC, useState } from "react";
import Button from "Shared/lib/Button/Button";
import { ThemeSwitcher } from "Widgets/ThemeSwitcher";
import { LangSwitcher } from "Widgets/LangSwitcher";

interface SideBarProps {
	className?: string
}

export const SideBar: FC<SideBarProps> = ({ className }) => {

	const [collapsed, setCollapsed] = useState(false)

	const onToggle = () => setCollapsed(prev => !prev)

	return (
		<div className={classNames(cls.sideBar, { [cls.collapsed]: collapsed }, [className])}>
			<Button onClick={onToggle}>Toogle</Button>
			<div className={cls.switchers}>
				<LangSwitcher />
				<ThemeSwitcher />
			</div>
		</div>
	);
}

