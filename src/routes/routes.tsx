import { createBrowserRouter } from 'react-router-dom';
import Home from '../home/home';
import SignUp from '../auth/sign-up/SignUp';
import ErrorPage from '../home/error-page';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/sign-up',
		element: <SignUp />,
	},
]);

export default router;
