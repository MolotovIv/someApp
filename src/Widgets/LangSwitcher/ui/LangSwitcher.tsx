import Button, { ButtonTheme } from 'Shared/lib/Button/Button';
import { classNames } from 'Shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import "./LangSwitcher.module.scss"

export const LangSwitcher = () => {

	const { t, i18n } = useTranslation();

	const toogleLang = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : "ru")
	}

	return (
		<>
			<Button
				className={classNames('LangSwitcher', {})}
				onClick={toogleLang}
				theme={ButtonTheme.Clear}
			>
				{t('Перевод')}
			</Button>
			<div>{t('Тестовый перевод')}</div>
		</>
	)
}