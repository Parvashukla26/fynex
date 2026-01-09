'use client'
import { motion } from 'framer-motion'

interface CaseDetailContentProps {
    challenge: string
    solution: string
}

const CaseDetailContent: React.FC<CaseDetailContentProps> = ({ challenge, solution }) => {
    return (
        <section className='py-20 md:py-32 bg-[#050505]'>
            <div className='container px-6 mx-auto'>
                <div className='grid md:grid-cols-2 gap-20'>
                    {/* Challenge */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className='flex items-center gap-3 mb-6'>
                            <div className='w-8 h-[1px] bg-red-500/50'></div>
                            <span className='text-red-400 uppercase tracking-widest text-xs font-bold'>The Challenge</span>
                        </div>
                        <p className='text-white/80 text-lg md:text-xl leading-relaxed font-light'>
                            {challenge}
                        </p>
                    </motion.div>

                    {/* Solution */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <div className='flex items-center gap-3 mb-6'>
                            <div className='w-8 h-[1px] bg-primary/50'></div>
                            <span className='text-primary uppercase tracking-widest text-xs font-bold'>The Solution</span>
                        </div>
                        <p className='text-white/80 text-lg md:text-xl leading-relaxed font-light'>
                            {solution}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default CaseDetailContent
