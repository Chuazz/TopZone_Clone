import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Home, Profile } from '../pages/user';
import DefaultLayout from '../layouts/DefaultLayout';
import route from '../config/routes';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Navigate to="/home" />,
	},
	{
		path: route.home,
		element: (
			<DefaultLayout>
				<Home />
			</DefaultLayout>
		),
	},
	{
		path: route.profile,
		element: (
			<DefaultLayout>
				<Profile />
			</DefaultLayout>
		),
	},
]);

export default router;
