import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Accessory, Home, Phone, Profile } from '../pages/user';
import DefaultLayout from '../layouts/DefaultLayout';
import route from '../config/routes';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Navigate to="/home" />,
	},
	{
		path: route.home,
		element: <DefaultLayout></DefaultLayout>,
		children: [
			{
				path: '',

				element: <Home />,
			},
			{
				path: route.profile,
				element: <Profile />,
			},
			{
				path: route.phone,
				element: <Phone />,
			},
			{
				path: route.accessory,
				element: <Accessory />,
			},
		],
	},
	{},
	{
		path: route.phone,
	},
]);

export default router;
