import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" })
})

export default function CallToAction() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Handle form submission
        console.log(values)
    }

    return (
                <div>
                    <h2 className="font-serif font-bold tracking-tighter leading-none mt-8 text-2xl md:text-4xl lg:mt-16 xl:text-9xl/24">be the first to know what the wave meant</h2>

                    <Form {...form}>
                        <form 
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="mt-10 max-w-sm lg:mt-12">
                            <h4 className="font-bold tracking-tight text-lg md:text-xl">Join the email waitlist.</h4>
                            <div className="mt-2 flex items-center gap-2">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormControl>
                                                <div className="relative">
                                                    <Input 
                                                        placeholder="Your mail address"
                                                        type="email"
                                                        className="h-14 pl-12"
                                                        {...field}
                                                    />
                                                    <div className="pointer-events-none absolute inset-y-0 left-5 flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-caption"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                                    </div>
                                                </div>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <Button 
                                    type="submit"
                                    aria-label="submit">
                                    <span className="hidden md:block">Sign Up</span>
                                    <span className="md:hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                    </span>
                                </Button>
                            </div>
                        </form>
                    </Form>
                    <p className="mt-4">No spam, only progress.</p>
                </div>
    )
}