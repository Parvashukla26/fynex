'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface CaseDetailHeroProps {
    title: string
    category: string
    image: string
}

const CaseDetailHero: React.FC<CaseDetailHeroProps> = ({ title, category, image }) => {
    return (
        <section className='bg-[#050505] pt-32 md:pt-48'>
            {/* Header / Title Section */}
            <div className='container px-6 mx-auto mb-20 md:mb-32 text-center'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className='flex flex-col items-center'
                >
                    <div className='flex items-center gap-6 mb-12 opacity-30'>
                        <div className='w-12 h-[1px] bg-white'></div>
                        <span className='text-white text-[10px] font-black uppercase tracking-[0.6em] font-mono'>
                            {category}
                        </span>
                        <div className='w-12 h-[1px] bg-white'></div>
                    </div>

                    <h1 className='text-6xl md:text-[140px] font-medium text-white tracking-[-0.05em] leading-[0.8] mb-12 uppercase' 
                        style={{ fontFamily: 'var(--font-after), serif' }}>
                        {title}
                    </h1>

                    <div className='flex items-center gap-12 text-white/20 font-mono text-[9px] uppercase tracking-[0.5em]'>
                        <div className='flex items-center gap-3'>
                            <span className='w-1 h-1 rounded-full bg-primary/60'></span>
                            <span>Operation // Confirmed</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className='w-1 h-1 rounded-full bg-primary/60'></span>
                            <span>Aesthetic // Sovereign</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Cinematic Separated Landscape Image */}
            <motion.div 
                initial={{ opacity: 0, clipPath: 'inset(10% 0% 10% 0%)' }}
                whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className='relative w-full aspect-[21/9] md:h-[80vh] overflow-hidden border-t border-b border-white/5 bg-[#101010]'
            >
                <Image
                    src={image}
                    alt={title}
                    fill
                    className='object-cover transition-all duration-1500'
                    priority
                />
            </motion.div>
        </section>
    )
}

export default CaseDetailHero
