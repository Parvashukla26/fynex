'use client'
import { timelineData } from '@/app/api/data'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const TimeLine = () => {
  return (
    <section className='py-64 bg-[#1a1a1a] relative overflow-hidden' id='story'>
      <div className='container px-6 mx-auto relative z-10'>
        <div className='flex flex-col md:flex-row justify-between items-end mb-20 gap-10'>
          <div className='max-w-2xl'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-12 h-[1px] bg-primary/40'></div>
              <span className='text-primary uppercase tracking-[0.5em] text-10 font-bold'>
                The Studio Process
              </span>
            </div>
            <h2 className='text-white text-48 md:text-72 font-medium tracking-tighter leading-none'>
              Linear <span className='italic font-serif text-primary'>Logic</span>, <br />
              Infinite Scale.
            </h2>
          </div>
          <div className='text-white/20 font-mono text-14 hidden lg:block'>
            EST. 2024 / LOG_STREAM_ENABLED
          </div>
        </div>

        <div className='grid lg:grid-cols-4 gap-12'>
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className='group relative'>

              <div className='flex flex-col gap-8'>
                <div className='text-white/10 text-86 font-black leading-none group-hover:text-primary/20 transition-colors duration-700'>
                  0{index + 1}
                </div>

                <div className='h-[1px] w-full bg-white/5 relative'>
                  <div className='absolute top-0 left-0 h-full w-0 bg-primary group-hover:w-full transition-all duration-1000'></div>
                </div>

                <div className='space-y-4'>
                  <h4 className='text-white text-22 font-medium tracking-tight uppercase group-hover:text-primary transition-colors'>
                    {item.title}
                  </h4>
                  <p className='text-white/30 text-16 font-light leading-relaxed tracking-wide group-hover:text-white/50 transition-colors'>
                    {item.text}
                  </p>
                </div>
              </div>

              {/* Technical Marker */}
              <div className='mt-12 opacity-0 group-hover:opacity-100 transition-all duration-700'>
                <div className='flex items-center gap-3 text-primary/40 text-10 font-mono uppercase tracking-widest'>
                  <Icon icon="ph:check-circle-bold" />
                  <span>Validated Phase</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Structural Decor */}
      <div className='absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/[0.02] to-transparent'></div>
    </section>
  )
}

export default TimeLine
