import { Button } from '@/components/ui/button'

const menuItems = [
    { name: 'what', href: '#link' },
    { name: 'how', href: '#link' },
    { name: 'where', href: '#cta' },
]

export default function FooterSection() {
    return (
        <footer className="border-b py-12 dark:bg-transparent">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-wrap justify-between gap-6">
                    <span className="text-muted-foreground order-last block text-center text-sm md:order-first">© {new Date().getFullYear()} Project Aurora, All rights reserved</span>
                    <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
                        {menuItems.map((link, index) => (
                            <Button
                                variant={'link'}
                                key={index}
                                className="text-muted-foreground hover:text-primary block duration-150">
                                    <a href={link.href}>
                                        <span>{link.name}</span>
                                    </a>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}