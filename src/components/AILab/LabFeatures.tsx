'use client'
import { motion } from 'framer-motion'

const features = [
    {
        label: "PROCESSING VELOCITY",
        value: "0.04ms",
        desc: "Latency is the enemy. We engineer lighter, faster models that react instantly."
    },
    {
        label: "ARCHITECTURAL SCALE",
        value: "UNLIMITED",
        desc: "Systems designed to ingest petabytes without stuttering. Built for the infinite."
    },
    {
        label: "PREDICTIVE ACCURACY",
        value: "99.8%",
        desc: "Guesswork is for amateurs. Our neural cores see around corners."
    }
]

const LabFeatures = () => {
    return (
        <section className='py-32 bg-[#020202] border-t border-white/5'>
            <div className='container px-6 mx-auto'>
                <div className='flex flex-col md:flex-row gap-20'>

                    {/* Section Label */}
                    <div className='md:w-1/4'>
                        <span className='text-primary uppercase tracking-[0.5em] text-xs font-bold'>Specifications</span>
                    </div>

                    {/* Grid */}
                    <div className='md:w-3/4 grid md:grid-cols-2 gap-x-12 gap-y-20'>
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                                className='group'
                            >
                                <div className='mb-6 overflow-hidden'>
                                    <h3 className='text-5xl md:text-7xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300'>
                                        {feature.value}
                                    </h3>
                                    <div className='w-full h-[1px] bg-white/10 group-hover:bg-primary/50 transition-colors duration-500' />
                                </div>

                                <span className='text-white/40 font-mono text-xs uppercase tracking-widest block mb-4'>
                                    {feature.label}
                                </span>

                                <p className='text-white/70 font-light leading-relaxed max-w-sm'>
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default LabFeatures
