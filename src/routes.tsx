import { AppLayout } from '@/pages/_layouts/app'
import { AuthLayout } from '@/pages/_layouts/auth'
import { Dashboard } from '@/pages/app/dashboard'
import { SignIn } from '@/pages/auth/sign-in'
import { SignUp } from '@/pages/auth/sign-up'
import { createBrowserRouter } from 'react-router'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				path: '/dashboard',
				element: <Dashboard />,
			},
		],
	},

	{
		path: '/',
		element: <AuthLayout />,
		children: [
			{
				path: '/signin',
				element: <SignIn />,
			},
			{
				path: '/signup',
				element: <SignUp />,
			},
		],
	},
])
