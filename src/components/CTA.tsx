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
                    <h2 className="font-serif font-bold tracking-tighter mt-8 text-6xl/14 md:text-8xl/18 lg:mt-16 xl:text-9xl/24">be the first to know what the wave meant</h2>

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
                                                        placeholder="Your email address"
                                                        type="email"
                                                        className=""
                                                        {...field}
                                                    />
                                                </div>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <Button 
                                    type="submit"
                                    aria-label="submit">
                                    <span className="hidden md:block">Join exclusive waitlist</span>
                                    <span className="md:hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                    </span>
                                </Button>
                            </div>
                        </form>
                    </Form>
                    <p className="mt-4">We reach out every month. No spam, only progress.</p>
                </div>
    )
}