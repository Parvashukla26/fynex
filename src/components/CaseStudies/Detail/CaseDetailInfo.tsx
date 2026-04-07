'use client'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface CaseDetailInfoProps {
    client: string
    year: string
    location: string
    services: string[]
    liveLink?: string
}

const CaseDetailInfo: React.FC<CaseDetailInfoProps> = ({ client, year, location, services, liveLink }) => {
    return (
        <section className='bg-[#050505] border-t border-b border-white/5 py-12'>
            <div className='container px-6 mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-start'>
                    
                    {/* Primary Meta Grid */}
                    <div className='lg:col-span-10 grid grid-cols-1 md:grid-cols-4 gap-12'>
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className='flex flex-col gap-4'
                        >
                            <span className='text-white/20 text-[9px] font-black uppercase tracking-[0.6em]'>PRINCIPAL_CLIENT</span>
                            <span className='text-white text-18 font-medium tracking-tight uppercase' style={{ fontFamily: 'var(--font-after), serif' }}>{client}</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className='flex flex-col gap-4'
                        >
                            <span className='text-white/20 text-[9px] font-black uppercase tracking-[0.6em]'>GEOGRAPHIC_LOC</span>
                            <span className='text-white text-18 font-medium tracking-tight uppercase' style={{ fontFamily: 'var(--font-after), serif' }}>{location}</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className='flex flex-col gap-4'
                        >
                            <span className='text-white/20 text-[9px] font-black uppercase tracking-[0.6em]'>TEMPORAL_MARK</span>
                            <span className='text-white text-18 font-medium tracking-tight uppercase' style={{ fontFamily: 'var(--font-after), serif' }}>{year}</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className='flex flex-col gap-4'
                        >
                            <span className='text-white/20 text-[9px] font-black uppercase tracking-[0.6em]'>DOMAIN_EXPERTISE</span>
                            <div className='flex flex-wrap gap-x-6 gap-y-1'>
                                {services.map((service, index) => (
                                    <span key={index} className='text-white/40 text-[11px] font-bold uppercase tracking-widest'>{service}</span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Integrated Live Link Anchor */}
                    {liveLink && (
                        <div className='lg:col-span-2 flex lg:justify-end'>
                            <motion.a
                                href={liveLink}
                                target='_blank'
                                rel='noopener noreferrer'
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className='group flex items-center gap-4 text-primary text-[10px] font-black uppercase tracking-[0.5em] border border-primary/20 px-6 py-4 rounded-full hover:bg-primary hover:text-black transition-all duration-500'
                            >
                                <span>LIVE_SITE</span>
                                <ArrowUpRight size={14} className='group-hover:rotate-45 transition-transform duration-500' />
                            </motion.a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default CaseDetailInfo
