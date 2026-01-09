'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const StoryNarrative = () => {
    const containerRef = useRef(null)

    const phases = [
        {
            year: "PHASE_01",
            title: "The Collapse",
            content: "We built. We shipped. We failed. Our first three ventures dissolved into nothing. The code was clean, but the soul was missing. We learned that technical perfection without human connection is just noise.",
            align: "left"
        },
        {
            year: "PHASE_02",
            title: "The Silence",
            content: (
                <>
                    We retreated into the unknown, paralyzed by the fear of 'what if'. But we discovered a fundamental truth: <span className="text-primary font-bold italic">Knowledge cancels fear.</span> So we stopped building and started understanding. Six months of deep study.
                </>
            ),
            align: "right"
        },
        {
            year: "PHASE_03",
            title: "The Synthesis",
            content: "The first prototype of the Neural Core. It wasn't perfect, but it had a pulse. We saw the metrics shift. Not just usage, but engagement. Meaning.",
            align: "left"
        }
    ]

    return (
        <section ref={containerRef} className='relative py-32 bg-[#050505] overflow-hidden'>
            <div className='container px-6 mx-auto relative z-10'>

                <div className='absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2 hidden md:block' />

                <div className='flex flex-col gap-32'>
                    {phases.map((phase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col md:flex-row gap-10 md:gap-20 items-center ${phase.align === 'right' ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Content Side */}
                            <div className={`flex-1 ${phase.align === 'right' ? 'md:text-left' : 'md:text-right'} text-center md:text-right`}>
                                <span className='text-primary/60 font-mono text-12 tracking-widest'>{phase.year}</span>
                                <h3 className='text-3xl md:text-5xl font-medium text-white mt-2 mb-6'>{phase.title}</h3>
                                <p className='text-white/40 leading-relaxed text-lg max-w-xl ml-auto mr-auto md:mx-0'>
                                    {phase.content}
                                </p>
                            </div>

                            {/* Timeline Node */}
                            <div className='relative flex-shrink-0'>
                                <div className='w-4 h-4 bg-[#050505] border border-white/20 rounded-full z-10 relative'>
                                    <div className='absolute inset-0 bg-primary/20 blur-lg rounded-full animate-pulse' />
                                </div>
                            </div>

                            {/* Empty Side for Balance */}
                            <div className='flex-1 hidden md:block' />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StoryNarrative
