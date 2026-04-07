'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface CaseDetailGalleryProps {
    images: string[]
}

const CaseDetailGallery: React.FC<CaseDetailGalleryProps> = ({ images }) => {
    return (
        <section className='py-20 md:py-40 bg-[#050505]'>
            <div className='container px-6 mx-auto'>
                <div className='flex flex-col gap-20 md:gap-40'>
                    {images.map((image, index) => {
                        // Alternate between full width and two-column layouts for a cinematic narrative
                        const isFullWidth = index % 3 === 0;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                className={`relative overflow-hidden bg-[#101010] border border-white/5 ${
                                    isFullWidth ? 'w-full aspect-[21/9]' : 'w-full md:w-[70%] lg:w-[60%] aspect-[16/10] mx-auto'
                                }`}
                            >
                                <Image
                                    src={image}
                                    alt={`Gallery Image ${index + 1}`}
                                    fill
                                    className='object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100'
                                />
                                
                                {/* Subtle Info Overlay */}
                                <div className='absolute bottom-6 left-6'>
                                    <span className='text-white/20 text-[9px] font-mono uppercase tracking-[0.4em]'>
                                        FRAME // 0{index + 1}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default CaseDetailGallery
