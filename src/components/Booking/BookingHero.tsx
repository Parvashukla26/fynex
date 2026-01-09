'use client'
import { motion } from 'framer-motion'

const BookingHero = () => {
    return (
        <section className='pt-32 pb-16 bg-[#050505]'>
            <div className='container px-6 mx-auto text-center'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className='inline-block mb-4 px-3 py-1 border border-white/10 rounded-full bg-white/5'>
                        <span className='text-primary text-xs font-mono uppercase tracking-[0.2em]'>Availability</span>
                    </span>

                    <h1 className='text-5xl md:text-7xl font-medium text-white tracking-tighter mb-6'>
                        Architect the <span className='text-primary/90 font-serif italic'>Future.</span>
                    </h1>

                    <p className='text-white/40 text-lg md:text-xl max-w-xl mx-auto'>
                        Select a time for a high-level consultation. We value precision, so please choose a slot that aligns with your agenda.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default BookingHero
