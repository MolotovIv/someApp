import { FunctionComponent } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "../classNames";
import cls from './App.link.module.scss';

enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
	className?: string
	theme?: AppLinkTheme
}

export const AppLink: FunctionComponent<AppLinkProps> = props => {

	const {
		children,
		className,
		to,
		theme = AppLinkTheme.PRIMARY,
		...otherProps
	} = props

	return (
		<Link
			to={to}
			className={classNames(cls.appLink, {}, [className, cls[theme]])}
			{...otherProps}>
			{children}
		</Link>
	);
}

