import { render } from 'react-dom';
import { App } from './App/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './App/Providers/ThemeProviders';

import 'Shared/config/i18n/i18n';

if (__IS_DEV__) {
	console.log('DEV log');
}

render(
	<BrowserRouter>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</BrowserRouter>
	,
	document.getElementById('root')
)
