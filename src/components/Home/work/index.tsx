'use client'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const Work = () => {
  return (
    <section className='py-64 bg-[#050505] relative overflow-hidden' id='contact'>
      <div className='container px-6 mx-auto relative z-10'>
        <div className='bg-white/[0.02] border border-white/5 rounded-[80px] p-16 md:p-32 relative overflow-hidden flex flex-col items-center text-center'>

          <div className='absolute -top-32 -left-32 w-64 h-64 bg-primary/10 blur-[120px] rounded-full'></div>
          <div className='absolute -bottom-32 -right-32 w-80 h-80 bg-primary/5 blur-[120px] rounded-full'></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='max-w-4xl relative z-10'>
            <div className='flex items-center justify-center gap-4 mb-10'>
              <div className='w-12 h-[1px] bg-primary/40'></div>
              <span className='text-primary uppercase tracking-[0.5em] text-10 font-bold'>
                Let&apos;s Build Together
              </span>
              <div className='w-12 h-[1px] bg-primary/40'></div>
            </div>

            <h2 className='text-white text-54 md:text-86 font-medium leading-[0.9] tracking-tighter mb-12'>
              Redefine your <br />
              <span className='text-primary italic font-serif'>Industry</span> standard.
            </h2>

            <p className='text-white/40 text-18 md:text-24 font-light max-w-2xl mx-auto mb-16 leading-relaxed'>
              We are currently accepting new partnerships for mid-2026.
              Reach out to schedule a private discovery session.
            </p>

            <div className='flex flex-col sm:flex-row gap-10 items-center justify-center'>
              <a
                href='mailto:parvashukla26@gmail.com'
                className='group relative flex items-center gap-6 bg-white text-darkmode px-16 py-6 rounded-full font-black text-18 uppercase tracking-widest transition-all duration-500 hover:scale-105'>
                <span>Send Proposal</span>
                <Icon icon='ph:paper-plane-tilt-bold' width='20' />
              </a>

              <a
                href="#"
                className='text-white/60 hover:text-white transition-all text-12 font-bold uppercase tracking-[0.4em]'>
                Official Dossier (.PDF)
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.01] text-[40vw] font-black select-none pointer-events-none italic'>
        FYNEX
      </div>
    </section>
  )
}

export default Work
