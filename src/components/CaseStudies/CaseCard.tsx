'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface CaseCardProps {
    item: {
        id: string
        title: string
        category: string
        image: string
        description: string
        stats: string
    }
    index: number
}

const CaseCard: React.FC<CaseCardProps> = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className='group relative block w-full'
        >
            <Link href={`/case-studies/${item.id}`} className='block relative overflow-hidden rounded-md aspect-[4/5] md:aspect-[3/4]'>
                {/* Image */}
                <div className='absolute inset-0 bg-neutral-900'>
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className='object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100'
                    />
                </div>

                {/* Overlay Gradient */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500' />

                {/* Content */}
                <div className='absolute bottom-0 left-0 p-8 w-full'>
                    <div className='overflow-hidden mb-2'>
                        <span className='text-primary text-xs font-mono uppercase tracking-widest block transform translate-y-0 transition-transform duration-500'>
                            {item.category}
                        </span>
                    </div>

                    <h3 className='text-3xl md:text-4xl font-medium text-white mb-4 leading-tight'>
                        {item.title}
                    </h3>

                    <div className='h-0 group-hover:h-auto overflow-hidden transition-all duration-500'>
                        <p className='text-white/60 font-light text-sm md:text-base mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100'>
                            {item.description}
                        </p>
                        <div className='inline-block px-3 py-1 border border-white/20 rounded-full'>
                            <span className='text-white text-xs font-mono'>{item.stats}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}

export default CaseCard
