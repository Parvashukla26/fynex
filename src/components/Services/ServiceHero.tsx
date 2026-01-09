'use client'
import { motion } from 'framer-motion'

const ServiceHero = () => {
    return (
        <section className='relative pt-44 pb-32 overflow-hidden bg-[#050505]'>
            <div className='container px-6 mx-auto relative z-10'>
                <div className='max-w-4xl'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className='flex items-center gap-4 mb-10'
                    >
                        <div className='w-12 h-[1px] bg-primary/30'></div>
                        <span className='text-primary uppercase tracking-[0.5em] text-10 font-bold'>
                            Solutions Directory
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className='text-64 md:text-86 font-medium text-white leading-[1] tracking-tighter'
                    >
                        Elevating <br />
                        Digital <span className='text-primary italic font-serif'>Standards.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1.5 }}
                        className='text-white/40 text-18 md:text-22 max-w-2xl font-light leading-relaxed mt-12 tracking-wide'
                    >
                        We deploy a comprehensive suite of elite services designed to transform
                        modern enterprises into high-performance digital leaders.
                    </motion.p>
                </div>
            </div>

            {/* Subtle Background Accent */}
            <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.02] blur-[150px] rounded-full -mr-64 -mt-32' />
        </section>
    )
}

export default ServiceHero
