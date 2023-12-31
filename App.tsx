import { Counter } from "./src/Components/Counter"
import './index.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutPage from "./src/Pages/About/AboutPage"
import MainPage from "./src/Pages/Main/MainPage"
import { Link } from "react-router-dom"
import { AboutPageAsync } from "./src/Pages/About/AboutPage.async"
import { MainPageAsync } from "./src/Pages/Main/MainPage.async"
import { Suspense } from "react"

export const App = () => {
	return (
		<div className="app">
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