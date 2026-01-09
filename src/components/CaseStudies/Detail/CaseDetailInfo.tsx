'use client'
import { motion } from 'framer-motion'

interface CaseDetailInfoProps {
    client: string
    year: string
    location: string
    services: string[]
}

const CaseDetailInfo: React.FC<CaseDetailInfoProps> = ({ client, year, location, services }) => {
    return (
        <section className='py-12 border-b border-white/[0.05] bg-[#050505]'>
            <div className='container px-6 mx-auto'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className='grid grid-cols-2 md:grid-cols-4 gap-8'
                >
                    {/* Client */}
                    <div className='flex flex-col gap-2'>
                        <span className='text-white/30 text-10 uppercase tracking-widest font-mono'>Client</span>
                        <span className='text-white text-lg font-medium'>{client}</span>
                    </div>

                    {/* Location */}
                    <div className='flex flex-col gap-2'>
                        <span className='text-white/30 text-10 uppercase tracking-widest font-mono'>Location</span>
                        <span className='text-white text-lg font-medium'>{location}</span>
                    </div>

                    {/* Year */}
                    <div className='flex flex-col gap-2'>
                        <span className='text-white/30 text-10 uppercase tracking-widest font-mono'>Year</span>
                        <span className='text-white text-lg font-medium'>{year}</span>
                    </div>

                    {/* Services */}
                    <div className='flex flex-col gap-2'>
                        <span className='text-white/30 text-10 uppercase tracking-widest font-mono'>Services</span>
                        <div className='flex flex-col'>
                            {services.map((service, index) => (
                                <span key={index} className='text-white/80 text-sm leading-relaxed'>{service}</span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default CaseDetailInfo
