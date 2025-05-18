// import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useScroll, motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'what', href: '#link' },
    { name: 'how', href: '#link' },
    { name: 'who', href: '#link' },
    { name: 'where', href: '#link' },
]

export const HeroHeader = () => {
    const [scrolled, setScrolled] = React.useState(false)
    const [isMounted, setIsMounted] = React.useState(false)
    const { scrollYProgress } = useScroll()

    // Handle initial client-side mounting
    React.useEffect(() => {
        setIsMounted(true)
    }, [])

    React.useEffect(() => {
        if (!isMounted) return

        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress, isMounted])

    // Define animation variants
    const containerVariants = {
        scrolled: {
            backdropFilter: 'blur(16px)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
        top: {
            backdropFilter: 'blur(0px)',
            backgroundColor: 'rgba(255, 255, 255, 0)',
        },
    }

    return (
        <header>
            <nav className="fixed z-20 w-full rounded-xl">
                {isMounted && (
                    <motion.div
                        className={cn('max-w-9/10 mx-auto rounded-xl px-6 lg:px-12 duration-200', scrolled && 'mt-4')}
                        variants={containerVariants}
                        initial="top"
                        animate={scrolled ? 'scrolled' : 'top'}
                        transition={{ 
                            duration: 0.3,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="flex flex-wrap items-center justify-between py-3">
                            <div className="flex w-full items-center justify-between">
                                <a aria-label="home" className="flex items-center space-x-2" href="/">
                                    <Logo />
                                </a>

                                <div className="hidden lg:block">
                                    <ul className="flex gap-8 text-sm">
                                        {menuItems.map((item, index) => (
                                            <li key={index}>
                                                <Button
                                                    variant={'link'}
                                                    className="text-muted-foreground hover:text-accent-foreground block duration-150"
                                                >
                                                    <a href={item.href}>
                                                        <span>{item.name}</span>
                                                    </a>
                                                </Button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </nav>
        </header>
    )
}
