import '../../src/App/styles/index.scss'
import { classNames } from 'Shared/lib/classNames'
import { useTheme } from './Providers/ThemeProviders'
import AppProvider from './Providers/Router'
import { Navbar } from 'Widgets/NavBar'
import { SideBar } from 'Widgets/SideBar'


export const App = () => {

	const { theme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<div className='content-wrapper'>
				<SideBar />
				<AppProvider />
			</div>
		</div>
	)
}

