import { ButtonHTMLAttributes, FC } from "react";
import cls from './Button.module.scss'
import { classNames } from "../classNames";


export enum ButtonTheme {
	Clear = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ButtonTheme
}

const Button: FC<ButtonProps> = (props) => {

	const { children, className, theme, ...otherProps } = props

	return (
		<button
			className={classNames(cls.button, { [cls[theme]]: true }, [className])}
			{...otherProps}>
			{children}
		</button>
	);
}

export default Button;