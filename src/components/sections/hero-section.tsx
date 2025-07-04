import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'


export default function HeroSection() {
    const basePath = '/hovedopgave-landing';

    return (
        <>
        <section className='overflow-hidden h-lvh'>
            <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
                <div className="relative mx-auto flex flex-col px-6 lg:px-12">
                    <motion.div className="text-white mx-auto flex flex-col max-w-lg items-center text-center duration-500 lg:max-w-full">
                        <h2 className="font-serif font-bold tracking-tighter mt-8 max-w-2xl text-balance text-2xl md:text-3xl lg:mt-16 xl:text-5xl">COMING SOON</h2>
                        <h1 className="font-bold tracking-[-0.315rem] text-7xl/14 md:text-8xl/18 xl:text-9xl/24"><span className='italic mix-blend-difference'>New </span> way of selling <span className='italic mix-blend-exclusion'>old </span> stuff</h1>
                        
                        <div className="mt-12 w-2/5 flex flex-col items-center justify-center gap-2 md: w-full lg:w-2/5">
                            <Button 
                                asChild
                                size="lg"
                                className=" mt-4 text-base">
                                <a href="#cta" >
                                    Join the club
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
                <div className="h-lvh absolute inset-0 -z-10 rounded-b-4xl overflow-hidden bg-zinc-950">
                <div className="relative blur-xl">
                    <img
                        src={`${basePath}/61fd147e9c25df30637369a76aaf6bdd0c772b44.gif`}
                        alt="A person going through a few clothing things in a box, blurred out"
                        className="size-full object-cover w-full h-full opacity-60"
                        loading="lazy"
                    />
                </div>
            </div>
            </div>
        </section>
        </>
    )
}
