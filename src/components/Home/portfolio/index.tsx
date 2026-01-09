'use client'
import Image from 'next/image'
import { portfolioData } from '@/app/api/data'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const Portfolio = () => {
  return (
    <section className='py-64 bg-[#050505]' id='portfolio'>
      <div className='container px-6 mx-auto'>
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-32 gap-10'>
          <div className='max-w-2xl'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-12 h-[1px] bg-primary/40'></div>
              <span className='text-primary uppercase tracking-[0.5em] text-10 font-bold'>
                Selected Works
              </span>
            </div>
            <h2 className='text-white text-48 md:text-72 font-medium leading-none tracking-tighter'>
              Excellence in <br />
              <span className='italic font-serif text-primary'>Execution.</span>
            </h2>
          </div>
          <p className='text-white/40 text-18 font-light max-w-sm border-l border-white/10 pl-10'>
            We focus on a limited number of high-stakes projects each year to ensure
            unrivaled attention to detail.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
          {portfolioData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className='group cursor-pointer'>
              <div className='relative overflow-hidden mb-8 aspect-[4/5] bg-darkgrey/50 border border-white/5'>
                <Image
                  src={`/images/portfolio/img-portfolio.png`} // Placeholder, reusing available assets
                  alt={item.title}
                  fill
                  className='object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 brightness-50 group-hover:brightness-100'
                />
                <div className='absolute bottom-10 right-10 w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0'>
                  <ArrowUpRight className='text-white' size={24} />
                </div>
              </div>
              <div className='flex justify-between items-start'>
                <div>
                  <h4 className='text-white text-28 font-medium tracking-tight group-hover:text-primary transition-colors'>{item.title}</h4>
                  <p className='text-white/30 text-12 font-bold uppercase tracking-[0.3em] mt-2'>High Performance Design</p>
                </div>
                <span className='text-white/10 text-40 font-black italic'>0{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className='mt-40 text-center'>
          <a href="#" className='inline-flex items-center gap-6 text-white text-12 font-bold uppercase tracking-[0.6em] group'>
            <span>View Full Archive</span>
            <div className='w-12 h-[1px] bg-white group-hover:w-20 group-hover:bg-primary transition-all duration-500'></div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
