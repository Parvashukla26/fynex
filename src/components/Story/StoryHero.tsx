'use client'
import { motion } from 'framer-motion'

const StoryHero = () => {
    return (
        <section className='relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020202]'>

            {/* Cinematic Grain Overlay */}
            <div className='absolute inset-0 opacity-[0.03] pointer-events-none'
                style={{ backgroundImage: `url("/images/noise.png")`, backgroundSize: '100px 100px' }}
            />

            <div className='container px-6 relative z-10 text-center'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className='mb-8'
                >
                    <span className='text-white/30 tracking-[0.6em] text-10 uppercase font-light'>The Origin</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className='text-5xl md:text-8xl font-medium text-white tracking-tighter leading-tight mb-8'
                >
                    It didn&apos;t start with <br />
                    <span className='italic font-serif text-white/20'>success.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1.5 }}
                    className='text-white/40 max-w-lg mx-auto text-lg md:text-xl font-light leading-relaxed'
                >
                    It started with silence. With the empty space between ambition and reality.
                </motion.p>
            </div>

            {/* Subtle Scroll Hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className='absolute bottom-10 flex flex-col items-center gap-2'
            >
                <span className='text-white/10 text-9 uppercase tracking-widest'>Begin the Journey</span>
                <div className='w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent'></div>
            </motion.div>
        </section>
    )
}

export default StoryHero
