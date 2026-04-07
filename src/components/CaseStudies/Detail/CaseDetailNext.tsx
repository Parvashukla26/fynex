'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface CaseDetailNextProps {
    nextId: string
}

const CaseDetailNext: React.FC<CaseDetailNextProps> = ({ nextId }) => {
    return (
        <section className='py-48 bg-[#050505] border-t border-white/5'>
            <div className='container px-6 mx-auto'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='flex flex-col items-center text-center'
                >
                    <div className='flex items-center gap-4 mb-12 opacity-30'>
                        <div className='w-8 h-[1px] bg-white'></div>
                        <span className='text-white text-[10px] uppercase tracking-[0.6em] font-black'>SUBSEQUENT_PROTOCOL</span>
                        <div className='w-8 h-[1px] bg-white'></div>
                    </div>
                    
                    <Link
                        href={`/case-studies/${nextId}`}
                        className='group relative flex flex-col items-center gap-12'
                    >
                        <h2 className='text-6xl md:text-120 font-medium text-white group-hover:text-primary transition-colors duration-700 tracking-tighter uppercase' style={{ fontFamily: 'var(--font-after), serif' }}>
                            Next <span className='italic opacity-80'>Case.</span>
                        </h2>
                        
                        <div className='w-24 h-24 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-700'>
                            <ArrowUpRight size={32} className='text-white group-hover:text-black transition-colors duration-700 group-hover:rotate-45' />
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default CaseDetailNext
