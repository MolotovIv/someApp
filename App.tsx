import './src/styles/index.scss'
import { Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom"
import { AboutPageAsync } from "./src/Pages/About/AboutPage.async"
import { MainPageAsync } from "./src/Pages/Main/MainPage.async"
import { Suspense, useContext, useState } from "react"
import { ThemeContext, Themes } from './src/Theme/themeContext'
import { useTheme } from './src/Theme/useTheme'


export const App = () => {

	const { theme, toogleTheme } = useTheme()

	return (
		<div className={`app ${theme}`}>
			<button onClick={toogleTheme}>Сменить тему</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'about'}>Обо всем</Link>
			<Suspense fallback={<div>Loading</div>}>
				<Routes>
					<Route path="about" element={<AboutPageAsync />} />
					<Route path="/" element={<MainPageAsync />} />
				</Routes>
			</Suspense>
			{/* <Counter /> */}
		</div>
	)
}