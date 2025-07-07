import { Toaster } from '@/components/ui/sonner'
import { RouterProvider } from 'react-router'
import { router } from './routes'

export function App() {
	return (
		<>
			<Toaster richColors />
			<RouterProvider router={router} />
		</>
	)
}
