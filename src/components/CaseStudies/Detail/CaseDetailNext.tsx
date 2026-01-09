'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface CaseDetailNextProps {
    nextId: number
}

const CaseDetailNext: React.FC<CaseDetailNextProps> = ({ nextId }) => {
    return (
        <section className='py-32 bg-[#020202] border-t border-white/5 flex flex-col items-center justify-center text-center'>
            <div className='container px-6 max-w-2xl'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className='text-white/30 text-xs uppercase tracking-[0.3em] font-mono mb-6 block'>Continue User Journey</span>

                    <Link href={`/case-studies/${nextId}`} className='group block'>
                        <h2 className='text-5xl md:text-7xl font-bold text-white group-hover:text-primary transition-colors duration-500'>
                            Next Project
                        </h2>
                        <div className='w-0 group-hover:w-full h-[2px] bg-primary mx-auto mt-4 transition-all duration-500' />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default CaseDetailNext
