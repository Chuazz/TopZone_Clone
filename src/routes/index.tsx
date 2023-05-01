import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Accessory, Home, Phone, Profile, Search } from '../pages/user';
import DefaultLayout from '../layouts/DefaultLayout';

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
				path: 'profile',
				element: <Profile />,
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
		],
	},
]);

export default router;
