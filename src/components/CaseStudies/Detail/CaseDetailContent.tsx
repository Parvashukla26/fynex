'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface CaseDetailContentProps {
    details: string[]
    iconSet: string
}

const CaseDetailContent: React.FC<CaseDetailContentProps> = ({ details, iconSet }) => {
    const containerRef = useRef<HTMLDivElement>(null)

    // Simplified SVG Paths for different project types
    const getPaths = (set: string) => {
        switch(set) {
            case 'SaaS': return "M13 2L3 14h9l-1 8 10-12h-9l1-8z" // Lightning
            case 'ECom': return "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6z M3 6h18 M16 10a4 4 0 0 1-8 0" // Shopping Bag
            case 'FMCG': return "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" // Shield/Leaf
            case 'Fintech': return "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" // Currency/S
            case 'Identity': return "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" // Circle/Focus
            default: return "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" 
        }
    }

    const path = getPaths(iconSet)

    return (
        <section ref={containerRef} className='bg-[#050505] relative border-t border-white/5'>
            <div className='container px-6 mx-auto'>
                <div className='flex flex-col lg:flex-row gap-20 lg:gap-0'>
                    
                    {/* Sticky Left Column: Editorial Meta */}
                    <div className='lg:w-1/3 pt-24 lg:pb-32'>
                        <div className='lg:sticky lg:top-32 space-y-12'>
                            <div className='flex flex-col gap-6'>
                                <span className='text-primary text-[10px] font-black uppercase tracking-[0.6em] font-mono opacity-40'>
                                    SPECIFICATION // ARCHIVE
                                </span>
                                <h2 className='text-white text-48 md:text-64 font-medium leading-[0.85] tracking-tighter uppercase' style={{ fontFamily: 'var(--font-after), serif' }}>
                                    Technical <br />
                                    <span className='italic font-serif text-white/20'>Protoview.</span>
                                </h2>
                            </div>
                            
                            <div className='flex items-center gap-6 group'>
                                <div className='w-12 h-[1px] bg-white/10 group-hover:w-24 group-hover:bg-primary transition-all duration-1000'></div>
                                <span className='text-white/20 text-[9px] font-mono uppercase tracking-widest'>SCAN_MODE_ACTIVE</span>
                            </div>

                            {/* Minimal Decorative Blueprint Line */}
                            <div className='hidden lg:block w-[1px] h-64 bg-gradient-to-b from-white/10 via-white/5 to-transparent ml-6'></div>
                        </div>
                    </div>

                    {/* Scrolling Right Column: Multi-Point Narrative */}
                    <div className='lg:w-2/3 lg:border-l lg:border-white/5 lg:pl-24 pt-24 pb-32 space-y-32 md:space-y-48'>
                        {details.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                                className='relative group pb-24 border-b border-white/[0.03] last:border-0'
                            >
                                {/* Screen-Filling Background Index */}
                                <span className='absolute -top-12 -left-12 text-[180px] font-black text-white/[0.02] select-none pointer-events-none group-hover:text-primary/[0.03] transition-colors duration-1000 inline-block leading-none' style={{ fontFamily: 'var(--font-after), serif' }}>
                                    0{index + 1}
                                </span>

                                <div className='relative z-10 flex flex-col gap-12'>
                                    {/* Animated SVG Drawing */}
                                    <div className='w-16 h-16 flex items-center justify-center bg-white/[0.02] border border-white/5 rounded-lg mb-4'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary/60">
                                            <motion.path
                                                d={path}
                                                initial={{ pathLength: 0 }}
                                                whileInView={{ pathLength: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                                            />
                                        </svg>
                                    </div>

                                    <div className='space-y-6'>
                                        <span className='text-primary/40 text-[9px] font-mono uppercase tracking-[0.5em]'>
                                            DATA_CLUSTER // 0{index + 1}
                                        </span>
                                        <p className='text-white/70 text-24 md:text-34 font-light leading-[1.3] group-hover:text-white transition-colors duration-700' style={{ fontFamily: 'var(--font-gragio), serif' }}>
                                            {point}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CaseDetailContent
