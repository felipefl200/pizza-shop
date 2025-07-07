import { SEO } from '@/components/seo'
import { Outlet } from 'react-router'

export function AppLayout() {
	return (
		<>
			<SEO title="Pizza Shop - Dashboard" description="Manage your Pizza Shop orders and menu" />
			<div className="flex flex-col h-screen">
				<header className="bg-gray-800 text-white p-4">
					<h1 className="text-xl font-bold">My Application</h1>
				</header>
				<main className="flex-1 p-4">
					<Outlet />
				</main>
				<footer className="bg-gray-800 text-white p-4 text-center">© {new Date().getFullYear()} My Application</footer>
			</div>
		</>
	)
}
