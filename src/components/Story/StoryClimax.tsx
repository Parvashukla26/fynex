'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const StoryClimax = () => {
    return (
        <section className='relative py-32 flex items-center justify-center overflow-hidden'>
            {/* Golden Backdrop */}
            <div className='absolute inset-0 bg-primary/5' />
            <div className='absolute inset-0 bg-gradient-to-t from-[#000] via-transparent to-[#050505]' />

            <div className='container px-6 relative z-10 text-center'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className='mb-12'
                >
                    <div className='w-24 h-24 mx-auto bg-primary rounded-full blur-[60px] opacity-40 mb-8' />
                    <h2 className='text-4xl md:text-7xl font-bold text-white mb-6'>
                        The Realization.
                    </h2>
                    <p className='text-white/60 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed'>
                        We didn&apos;t just learn to code. We learned to feel. <br />
                        Today, that empathy drives the engines of <span className='text-primary font-bold'>10+ elite startups</span>.
                    </p>
                </motion.div>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20'>
                    {[
                        { label: "Startups Launched", value: "1" },
                        { label: "Systems Deployed", value: "5+" },
                        { label: "User Interactions", value: "50K+" },
                        { label: "Retention Rate", value: "99%" },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className='p-6 border border-white/5 bg-white/[0.02] rounded-2xl'
                        >
                            <h3 className='text-3xl md:text-4xl font-bold text-primary mb-2'>{stat.value}</h3>
                            <p className='text-white/30 text-xs uppercase tracking-widest'>{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Link href="/services" className='inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white text-sm uppercase tracking-widest hover:bg-primary hover:border-primary hover:text-black transition-all duration-500'>
                        Explore Our Capabilities
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default StoryClimax
