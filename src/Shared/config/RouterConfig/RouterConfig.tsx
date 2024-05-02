import { AboutPage } from "PagesNew/AboutPages"
import { MainPage } from "PagesNew/MainPage"
import { RouteProps } from "react-router-dom"

enum AppRoute {
	Main = 'main',
	About = 'about'
}

export const RoutePath: Record<AppRoute, string> = {
	[AppRoute.Main]: '/',
	[AppRoute.About]: '/about'
}

export const RouterConfig: Record<AppRoute, RouteProps> = {
	[AppRoute.Main]: {
		path: RoutePath.main,
		element: <MainPage />
	},
	[AppRoute.About]: {
		path: RoutePath.about,
		element: <AboutPage />
	}
}