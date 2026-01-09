'use client'
import Image from 'next/image'
import { portfolioData } from '@/app/api/data'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const Portfolio = () => {
  return (
    <section className='py-32 md:py-64 bg-[#050505] overflow-hidden' id='portfolio'>
      <div className='container px-6 mx-auto'>
        {/* Header Section */}
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-24 md:mb-32 gap-10'>
          <div className='max-w-2xl'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='flex items-center gap-4 mb-6'
            >
              <div className='w-12 h-[1px] bg-primary/40'></div>
              <span className='text-primary uppercase tracking-[0.5em] text-10 font-bold'>
                Selected Archive
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-white text-42 md:text-72 font-medium leading-none tracking-tighter'
            >
              Architectural <br />
              <span className='italic font-serif text-primary/80'>Standards.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className='text-white/30 text-14 md:text-16 font-light max-w-sm border-l border-white/5 pl-8 md:pl-10 leading-relaxed'
          >
            We deploy sovereign technical infrastructures for industry protagonists who demand unrivaled execution and architectural permanence.
          </motion.p>
        </div>

        {/* Portfolio Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16'>
          {portfolioData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className='group relative'
            >
              {/* Image Container */}
              <div className='relative overflow-hidden mb-8 aspect-[4/5] bg-[#0A0A0A] border border-white/5 rounded-sm transition-all duration-700 group-hover:border-primary/20'>
                <Image
                  src={item.image || '/images/portfolio/img-portfolio.png'}
                  alt={item.title}
                  fill
                  className='object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-1000 ease-out'
                />

                {/* Overlay Gradient */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity' />

                {/* Corner Accents */}
                <div className='absolute top-6 left-6 w-3 h-3 border-t border-l border-white/10 group-hover:border-primary/30 transition-colors' />
                <div className='absolute bottom-6 right-6 w-3 h-3 border-b border-r border-white/10 group-hover:border-primary/30 transition-colors' />

                {/* Arrow Button */}
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100'>
                  <ArrowUpRight className='text-white/80' size={20} />
                </div>
              </div>

              {/* Text Content */}
              <div className='flex flex-col gap-3'>
                <div className='flex justify-between items-center'>
                  <span className='text-white/20 text-10 font-bold uppercase tracking-[0.4em]'>{item.category}</span>
                  <span className='text-primary/40 text-10 font-bold italic font-serif'>{item.year}</span>
                </div>
                <div className='flex justify-between items-start pt-2 border-t border-white/5'>
                  <h4 className='text-white text-18 md:text-22 font-medium tracking-tight group-hover:text-primary transition-colors duration-500 max-w-[80%]'>
                    {item.title}
                  </h4>
                  <span className='text-white/5 text-32 font-black italic tracking-tighter leading-none'>0{index + 1}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Archive Link */}
        <div className='mt-24 md:mt-40 text-center'>
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='inline-flex items-center gap-6 text-white text-10 font-bold uppercase tracking-[0.6em] group py-4 px-8 border border-white/5 hover:border-primary/20 transition-all duration-500 rounded-full'
          >
            <span>Dossier Archive</span>
            <div className='w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-primary transition-all duration-500'></div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
