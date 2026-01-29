'use client'
import { perksData } from '@/app/api/data'
import { motion } from 'framer-motion'
import { Layers, Cpu, Compass } from 'lucide-react'

const Perks = () => {
  const icons = [<Layers key="1" />, <Cpu key="2" />, <Compass key="3" />]

  return (
    <section className='py-48 relative bg-[#1a1a1a] overflow-hidden' id='services'>
      <div className='container px-6 mx-auto relative z-10'>
        <div className='max-w-3xl mb-20'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='flex items-center gap-4 mb-6'>
            <div className='w-12 h-[1px] bg-primary/40'></div>
            <span className='text-primary uppercase tracking-[0.5em] text-10 font-bold'>
              Philosophy of Quality
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-white text-48 md:text-64 font-medium leading-[1.1] tracking-tight'>
            Built on the <br />
            <span className='text-primary serif italic'>foundations</span> of excellence.
          </motion.h2>
        </div>

        <div className='grid lg:grid-cols-3 gap-1px bg-white/5 border border-white/5'>
          {perksData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className='group relative bg-[#1a1a1a] p-16 hover:bg-white/[0.02] transition-colors duration-700 min-h-[400px] flex flex-col justify-between'>

              <div>
                <div className='text-primary mb-12 opacity-40 group-hover:opacity-100 transition-opacity duration-700'>
                  {index < icons.length ? icons[index] : <Layers />}
                </div>

                <h4 className='text-white text-28 font-medium mb-6 tracking-tight'>
                  {item.title}
                </h4>
                <p className='text-white/40 text-18 leading-relaxed font-light tracking-wide max-w-xs group-hover:text-white/60 transition-colors'>
                  {item.text}
                </p>
              </div>

              <div className='mt-12 flex items-center justify-between'>
                <span className='text-white/10 text-10 font-bold tracking-[0.4em] uppercase'>Protocol {index + 1}.0</span>
                <div className='w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:border-primary/50 transition-colors'>
                  <div className='w-1 h-1 bg-white group-hover:bg-primary transition-colors'></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Structural Minimalist Lines */}
      <div className='absolute left-[15%] top-0 w-[1px] h-full bg-white/[0.03]'></div>
      <div className='absolute left-[50%] top-0 w-[1px] h-full bg-white/[0.03]'></div>
      <div className='absolute left-[85%] top-0 w-[1px] h-full bg-white/[0.03]'></div>
    </section>
  )
}

export default Perks
