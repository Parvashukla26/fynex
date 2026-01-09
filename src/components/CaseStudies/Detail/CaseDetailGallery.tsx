'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface CaseDetailGalleryProps {
    images: string[]
}

const CaseDetailGallery: React.FC<CaseDetailGalleryProps> = ({ images }) => {
    return (
        <section className='pb-20 md:pb-32 bg-[#050505]'>
            <div className='container px-6 mx-auto'>
                <div className='grid gap-8'>

                    {/* Large Hero Image (First Image) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='relative aspect-video w-full rounded-2xl overflow-hidden'
                    >
                        <Image src={images[0]} alt="Project Detail" fill className='object-cover' />
                    </motion.div>

                    {/* Secondary Grid */}
                    <div className='grid md:grid-cols-2 gap-8'>
                        {images.slice(1).map((img, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                                className='relative aspect-[4/3] w-full rounded-2xl overflow-hidden'
                            >
                                <Image src={img} alt={`Project Detail ${index + 2}`} fill className='object-cover' />
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default CaseDetailGallery
