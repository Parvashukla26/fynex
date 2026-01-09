'use client'
import { motion } from 'framer-motion'

const CaseHero = () => {
    return (
        <section className='relative pt-44 pb-20 bg-[#050505]'>
            <div className='container px-6 mx-auto relative z-10'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='mb-8 pl-1'
                >
                    <span className='text-primary uppercase tracking-[0.4em] text-10 font-bold'>
                        Selected Works
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className='text-6xl md:text-9xl font-medium text-white leading-[0.9] tracking-tighter mb-12'
                >
                    Defined by <br />
                    <span className='text-white/20 italic font-serif'>Impact.</span>
                </motion.h1>

                <div className='w-full h-[1px] bg-white/10' />
            </div>
        </section>
    )
}

export default CaseHero
