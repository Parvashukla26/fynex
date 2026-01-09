'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const Platform = () => {
  return (
    <section className='md:py-48 py-32 relative z-1 overflow-hidden bg-darkmode bg-noise' id='cta'>
      <div className='container px-4'>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
          className="glass-dark px-10 md:px-24 py-20 rounded-[64px] border border-white/10 grid grid-cols-12 items-center relative overflow-hidden group">

          {/* Ambient Lighting */}
          <div className='absolute -left-40 -top-40 w-96 h-96 bg-primary/20 blur-[150px] rounded-full group-hover:bg-primary/30 transition-all duration-1000'></div>
          <div className='absolute -right-40 -bottom-40 w-96 h-96 bg-primary/10 blur-[150px] rounded-full'></div>

          <div className='lg:col-span-8 col-span-12 relative z-10'>
            <div className='flex items-center gap-4 mb-10'>
              <div className='w-16 h-[1px] bg-primary/40'></div>
              <span className='text-primary uppercase tracking-[0.4em] text-12 font-bold'>
                FYNEX PROTOCOL
              </span>
            </div>
            <h2 className='text-white lg:text-76 md:text-54 text-40 font-bold leading-[0.9] tracking-tighter italic mb-10'>
              THE ENGINE OF <br />
              <span className='text-primary not-italic font-black italic uppercase'>INNOVATION.</span>
            </h2>
            <p className='text-muted text-22 font-light max-w-xl leading-relaxed tracking-wide mb-0'>
              Our proprietary architecture is engineered to provide the structural
              backbone for the world&apos;s most ambitious digital products.
            </p>
          </div>

          <div className='lg:col-span-4 col-span-12 relative z-10'>
            <div className='flex lg:justify-end lg:mt-0 mt-16 justify-center'>
              <Link
                href='#contact'
                className='group relative flex items-center justify-center gap-6 bg-primary text-darkmode px-16 py-8 rounded-full font-black text-20 uppercase tracking-widest transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(253,199,0,0.4)]'>
                <span>Connect</span>
                <Icon icon='ph:arrow-right-bold' width='24' className='group-hover:translate-x-3 transition-transform duration-500' />
              </Link>
            </div>
          </div>

          {/* Functional Background Text */}
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 text-[20vw] font-black uppercase pointer-events-none select-none italic'>
            FYNEX
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Platform
