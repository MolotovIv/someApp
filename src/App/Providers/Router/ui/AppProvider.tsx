import { AboutPage } from "PagesNew/AboutPages"
import { MainPage } from "PagesNew/MainPage/index"
import { RouterConfig } from "Shared/config/RouterConfig/RouterConfig"
import { Suspense } from "react"
import { Routes, Route } from "react-router-dom"

export const AppProvider = () => {
	return (
		<Suspense fallback={<div>Loading</div>}>
			<Routes>
				{Object.values(RouterConfig).map(({ path, element }) => (
					<Route key={path}
						path={path}
						element={(
							<div className="page-wrapper">{element}</div>
						)} />
				))}
			</Routes>
		</Suspense>
	)
}