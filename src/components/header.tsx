// import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useScroll, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'what', href: '#link' },
    { name: 'how', href: '#link' },
    { name: 'who', href: '#link' },
    { name: 'where', href: '#link' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    
    

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full rounded-xl">
                    <div className={cn('max-w-9/10 mx-auto rounded-xl mt-4 px-6 transition-all duration-300 lg:px-12', scrolled && 'backdrop-blur-2xl max-w-9/10 mt-4')}>
                    <motion.div
                        className={cn('relative transition-all flex flex-wrap items-center justify-between py-3 duration-200', scrolled && 'mt-4')}>
                        <div className="flex w-full items-center justify-between">
                            <a aria-label="home" className="flex items-center space-x-2" href="/">
                                    <Logo />
                            </a>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Button variant={'link'}
                                                
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <a href={item.href}>
                                                    <span>{item.name}</span>
                                                </a>
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>
    )
}
