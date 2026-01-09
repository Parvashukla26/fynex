'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const LabHero = () => {
    return (
        <section className='relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#000]'>

            {/* Abstract Background - Suggesting Velocity/Speed */}
            <div className='absolute inset-0 opacity-40'>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full' />
                <div className='absolute inset-0 bg-[url("/images/noise.png")] opacity-10 mix-blend-overlay' />
            </div>

            <div className='container px-6 relative z-10 text-center'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className='inline-block mb-8 px-3 py-1 border border-white/10 rounded-sm bg-white/5 backdrop-blur-md'>
                        <span className='text-white text-xs font-mono uppercase tracking-[0.3em]'>FYNEX / AI LABS _01</span>
                    </span>

                    <h1 className='text-6xl md:text-9xl font-bold text-white tracking-tighter leading-none mb-6'>
                        UNFAIR <br />
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-white'>ADVANTAGE.</span>
                    </h1>

                    <p className='text-white/50 text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed tracking-wide'>
                        Engineered for those who refuse to compete. <br />
                        We build sovereign intelligence that outpaces the market.
                    </p>
                </motion.div>
            </div>

            {/* Decorative Automotive-style UI Elements */}
            <div className='absolute bottom-10 left-10 hidden md:block'>
                <div className='flex gap-4 text-xs font-mono text-white/30'>
                    <span>RPM: 14,000</span>
                    <span>VELOCITY: MACH 3</span>
                    <span>STATUS: OPTIMAL</span>
                </div>
            </div>

            <div className='absolute bottom-10 right-10 hidden md:block'>
                <div className='w-32 h-[1px] bg-white/20' />
            </div>

        </section>
    )
}

export default LabHero
