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
        <section className='relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-[#050505]'>
            {/* Background Image */}
            <div className='absolute inset-0'>
                <Image
                    src={image}
                    alt={title}
                    fill
                    className='object-cover opacity-60'
                    priority
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20' />
            </div>

            <div className='container px-6 mx-auto h-full flex flex-col justify-end relative z-10 pb-20'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <span className='inline-block mb-6 px-4 py-2 border border-white/20 rounded-full bg-black/20 backdrop-blur-md'>
                        <span className='text-primary text-xs font-mono uppercase tracking-[0.2em] font-bold'>
                            {category}
                        </span>
                    </span>

                    <h1 className='text-5xl md:text-8xl font-medium text-white tracking-tighter leading-[0.95] max-w-4xl'>
                        {title}
                    </h1>
                </motion.div>
            </div>
        </section>
    )
}

export default CaseDetailHero
