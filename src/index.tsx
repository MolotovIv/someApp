import { render } from 'react-dom';
import { App } from '../App';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './Theme/themeProvider';

render(
	<BrowserRouter>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</BrowserRouter>
	,
	document.getElementById('root')
)
