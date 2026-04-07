'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { portfolioData } from '@/app/api/data'
import { ArrowUpRight } from 'lucide-react'

const Portfolio = () => {
    if (!motion || !motion.div) {
        return <div className='py-20 text-center text-white'>Loading visual assets...</div>
    }

    return (
        <section className='py-32 md:py-64 bg-[#0a0a0a] overflow-hidden' id='portfolio'>
            <div className='container px-6 mx-auto'>
                {/* Header Section */}
                <div className='flex flex-col md:flex-row md:items-end justify-between mb-24 md:mb-48 gap-12'>
                    <div className='max-w-3xl'>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className='flex items-center gap-6 mb-12'
                        >
                            <div className='w-16 h-[1px] bg-primary/30'></div>
                            <span className='text-primary uppercase tracking-[0.6em] text-[10px] font-black font-mono'>
                                ARCHIVE ENTRY / SELECTS
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className='text-white text-54 md:text-92 font-medium leading-[0.85] tracking-tighter uppercase'
                            style={{ fontFamily: 'var(--font-after), serif' }}
                        >
                            Industrial <br />
                            <span className='italic font-serif text-primary/70 opacity-90'>Excellence.</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className='max-w-md border-l border-white/5 pl-10'
                    >
                        <p className='text-white/30 text-15 md:text-17 font-light leading-relaxed mb-6'>
                            Establishing technical permanence for industry protagonists who demand unrivaled architectural integrity.
                        </p>
                        <div className='flex gap-4 text-[10px] font-mono text-primary/40 uppercase tracking-widest'>
                            <span>[ V_4.0 ]</span>
                            <span>[ PROTOCOL_CLEAN ]</span>
                        </div>
                    </motion.div>
                </div>

                {/* Refined Landscape Asymmetric Grid */}
                <div className='flex flex-col gap-32 md:gap-64'>
                    {portfolioData.map((item, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                className={`relative group w-full ${!isEven ? 'md:pl-[10%]' : 'md:pr-[10%]'}`}
                            >
                                <Link
                                    href={`/case-studies/${item.id}`}
                                    className='block'
                                >
                                    <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
                                        {/* Image Cinematic Container (Landscape) */}
                                        <div className={`lg:col-span-8 ${!isEven ? 'lg:order-2' : ''}`}>
                                            <div className='relative overflow-hidden bg-[#151515] border border-white/5 transition-all duration-1000 group-hover:border-primary/20 aspect-[16/9]'>
                                                <Image
                                                    src={item.image || '/images/portfolio/img-portfolio.png'}
                                                    alt={item.title}
                                                    fill
                                                    className='object-cover group-hover:scale-105 transition-all duration-1500 ease-out p-0'
                                                />
                                                
                                                {/* Index Number Accent */}
                                                <div className='absolute top-10 right-10 flex gap-2 items-center text-white/10 group-hover:text-primary/20 transition-colors'>
                                                    <span className='font-mono text-[10px] font-bold'>0{index + 1}</span>
                                                    <div className='w-6 h-[1px] bg-current'></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Descriptive Typography */}
                                        <div className={`lg:col-span-4 ${!isEven ? 'lg:order-1' : ''}`}>
                                            <div className='space-y-6'>
                                                <span 
                                                    className='text-primary/60 text-[11px] font-black uppercase tracking-[0.5em]'
                                                    style={{ fontFamily: 'var(--font-duffish), sans-serif' }}
                                                >
                                                    {item.category}
                                                </span>
                                                <h4 
                                                    className='text-white text-32 md:text-54 font-medium leading-[0.95] tracking-tighter group-hover:text-primary transition-colors duration-700 uppercase'
                                                    style={{ fontFamily: 'var(--font-after), serif' }}
                                                >
                                                    {item.title}
                                                </h4>
                                                <div className='flex items-center gap-8 text-white/20 font-mono text-[10px] uppercase tracking-widest'>
                                                    <span>[{item.year}]</span>
                                                    <div className='w-8 h-[1px] bg-current'></div>
                                                    <span className='group-hover:text-primary transition-colors'>Dossier // Analyse</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Minimal Archive Footnote */}
                <div className='mt-40 md:mt-80 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 opacity-40 hover:opacity-100 transition-opacity duration-1000'>
                    <div className='flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.5em] text-white/40'>
                        <div className='w-2 h-2 rounded-full bg-primary/40 animate-pulse'></div>
                        <span>Protocol v4.0 Active / Operational Architecture</span>
                    </div>
                    <Link
                        href="#"
                        className='text-white text-[12px] font-black uppercase tracking-[0.8em] hover:text-primary transition-colors flex items-center gap-8'
                    >
                        <span>Archive Index</span>
                        <div className='w-12 h-[1px] bg-white/20'></div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
