import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Accessory, Detail, Home, Phone, Search } from '../pages/product';
import DefaultLayout from '../layouts/DefaultLayout';
import { Profile } from '@pages/user';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Navigate to="/home" />,
	},
	{
		path: '/home',
		element: <DefaultLayout></DefaultLayout>,
		children: [
			{
				path: '',

				element: <Home />,
			},
			{
				path: 'phone',
				element: <Phone />,
			},
			{
				path: 'accessory',
				element: <Accessory />,
			},
			{
				path: 'search',
				element: <Search />,
			},
			{
				path: 'detail/:product',
				element: <Detail />,
			},
		],
	},
	{
		path: '/user',
		element: <DefaultLayout></DefaultLayout>,
		children: [
			{
				path: 'profile',
				element: <Profile />,
			},
		],
	},
]);

export default router;
