import { SEO } from '@/components/seo'
import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router'

export function AuthLayout() {
	return (
		<>
			<SEO title="Pizza Shop - Authentication" description="Sign in to your Pizza Shop account" />
			<div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
				<div className="hidden h-full flex-col justify-between border-foreground/5 border-r bg-muted p-10 text-muted-foreground md:flex">
					<div className="flex items-center gap-3 text-foreground text-lg">
						<Pizza className="size-5" />
						<p className="font-semibold">Pizza.Shop</p>
					</div>
					<footer className="text-center text-sm">
						Painel do parceiro &copy;Pizza.Shop - {new Date().getFullYear()}{' '}
					</footer>
				</div>
				<main className="relative flex flex-col items-center justify-center">
					<Outlet />
				</main>
			</div>
		</>
	)
}
