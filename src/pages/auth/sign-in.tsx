import { SEO } from '@/components/seo'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router'
import { toast } from 'sonner'
import { z } from 'zod'

const formSchema = z.object({
	email: z.string().email({ message: 'Email inválido' }),
})

export function SignIn() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
		},
	})

	async function onSubmit(data: z.infer<typeof formSchema>) {
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate an API call
			console.log(data)
			toast.success('Enviamos um link de acesso para o seu email!', {
				closeButton: true,
				duration: 5000,
				description: 'Verifique sua caixa de entrada e siga as instruções.',
			})
		} catch (error) {
			console.error('Error during sign in:', error)
			toast.error('Ocorreu um erro ao tentar acessar sua conta. Por favor, tente novamente.', {
				closeButton: true,
				duration: 5000,
			})
		}
	}
	return (
		<>
			<SEO title="Sign In - Pizza Shop" description="Sign in to your Pizza Shop account to manage orders and menu" />
			<div className="p-8">
				<Button variant="ghost" className="absolute top-8 right-8">
					<Link to="/signup">Criar conta</Link>
				</Button>
				<div className="flex w-[320px] flex-col justify-center gap-6">
					<div className="flex flex-col gap-2 text-center">
						<h1 className="font-semibold text-2xl tracking-tight">Acessar o painel</h1>
						<p className="text-muted-foreground text-sm">
							Acompanhe suas vendas, gerencie seu cardápio e muito mais com o painel do parceiro Pizza.Shop.
						</p>
					</div>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Seu email</FormLabel>
										<FormControl>
											<Input type="email" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button
								disabled={form.formState.isSubmitting || !form.formState.isValid}
								type="submit"
								className="w-full"
							>
								{form.formState.isSubmitting ? 'Carregando...' : 'Acessar painel'}
							</Button>
							<p className="px-6 text-center text-muted-foreground text-sm leading-relaxed">
								Ao continuar, você concorda com nossos{' '}
								<Link to="/terms" className="text-primary hover:underline">
									Termos de Serviço
								</Link>{' '}
								e nossa{' '}
								<Link to="/privacy" className="text-primary hover:underline">
									Política de Privacidade
								</Link>
								.
							</p>
						</form>
					</Form>
				</div>
			</div>
		</>
	)
}
