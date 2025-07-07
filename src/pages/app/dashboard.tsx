import { SEO } from '@/components/seo'

export function Dashboard() {
	return (
		<>
			<SEO
				title="Dashboard - Pizza Shop"
				description="Manage your Pizza Shop orders, menu items and business analytics"
			/>
			<div className="flex h-screen items-center justify-center">
				<h1 className="font-bold text-2xl text-red-400">Dashboard</h1>
			</div>
		</>
	)
}
