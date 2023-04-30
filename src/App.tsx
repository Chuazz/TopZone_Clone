import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { GlobalStyle } from '@components/GlobalStyle';

const App = () => {
	return (
		<GlobalStyle>
			<RouterProvider router={router} />
		</GlobalStyle>
	);
};

export default App;
