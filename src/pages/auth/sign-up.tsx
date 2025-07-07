import { SEO } from '@/components/seo'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'
import { toast } from 'sonner'
import { z } from 'zod'

const formSchema = z.object({
	restaurantName: z.string().min(1, { message: 'Nome do restaurante é obrigatório' }),
	managerName: z.string().min(1, { message: 'Nome do gerente é obrigatório' }),
	phone: z.string().min(10, { message: 'Telefone deve ter pelo menos 10 dígitos' }),
	email: z.string().email({ message: 'Email inválido' }),
})

export function SignUp() {
	const navigate = useNavigate()

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
			toast.success('Conta criada com sucesso! Verifique seu email para ativar sua conta.', {
				closeButton: true,
				duration: 10000,
				action: {
					label: 'Ir para login',
					onClick: () => navigate('/signin'),
				},
			})
		} catch (error) {
			console.error('Error during sign up:', error)
			toast.error('Ocorreu um erro ao tentar criar sua conta. Por favor, tente novamente.', {
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
					<Link to="/signin">Fazer login</Link>
				</Button>
				<div className="flex w-[320px] flex-col justify-center gap-6">
					<div className="flex flex-col gap-2 text-center">
						<h1 className="font-semibold text-2xl tracking-tight">Criar conta no painel</h1>
						<p className="text-muted-foreground text-sm">
							Acompanhe suas vendas, gerencie seu cardápio e muito mais com o painel do parceiro Pizza.Shop.
						</p>
					</div>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
							<FormField
								control={form.control}
								name="restaurantName"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Nome do estabelecimento</FormLabel>
										<FormControl>
											<Input type="text" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="managerName"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Nome do gerente</FormLabel>
										<FormControl>
											<Input type="text" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="phone"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Seu telefone</FormLabel>
										<FormControl>
											<Input type="tel" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
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
								{form.formState.isSubmitting ? 'Carregando...' : 'Cadastrar'}
							</Button>
						</form>
					</Form>
				</div>
			</div>
		</>
	)
}
