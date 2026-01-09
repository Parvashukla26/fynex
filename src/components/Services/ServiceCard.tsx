'use client'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

interface ServiceCardProps {
    item: {
        title: string
        description: string
        icon: string
        category: string
    }
    index: number
}

const ServiceCard: React.FC<ServiceCardProps> = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className='group relative'
        >
            <div className='relative h-full p-8 rounded-2xl bg-[#080808] border border-white/5 overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]'>

                {/* Subtle Gradient Backglow */}
                <div className='absolute -top-24 -right-24 w-48 h-48 bg-primary/5 blur-[80px] rounded-full group-hover:bg-primary/10 transition-all duration-700' />

                {/* Category & Icon */}
                <div className='flex justify-between items-start mb-8'>
                    <div className='flex flex-col gap-1'>
                        <span className='text-primary text-[9px] uppercase tracking-[0.4em] font-bold'>{item.category}</span>
                        <div className='w-4 h-[1px] bg-primary/40' />
                    </div>
                    <div className='w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500'>
                        <Icon icon={item.icon} className='text-white/40 group-hover:text-primary transition-colors duration-500' width="24" />
                    </div>
                </div>

                {/* Content */}
                <h3 className='text-white text-22 font-medium tracking-tight mb-4 group-hover:text-primary/90 transition-colors duration-500'>
                    {item.title}
                </h3>
                <p className='text-white/40 text-14 leading-relaxed font-light mb-8 group-hover:text-white/60 transition-colors duration-500'>
                    {item.description}
                </p>

                {/* Architectural Footer */}
                <div className='flex items-center justify-between mt-auto pt-6 border-t border-white/[0.03]'>
                    <span className='text-white/20 text-10 font-mono tracking-widest'>MODULE_{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                    <div className='flex gap-1'>
                        <div className='w-1 h-1 rounded-full bg-primary/20 group-hover:bg-primary/60 transition-colors duration-500'></div>
                        <div className='w-1 h-1 rounded-full bg-primary/[0.05] group-hover:bg-primary/30 transition-colors duration-700'></div>
                    </div>
                </div>

                {/* Hover Border Glow Accent */}
                <div className='absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent group-hover:w-full transition-all duration-700' />
            </div>
        </motion.div>
    )
}

export default ServiceCard
