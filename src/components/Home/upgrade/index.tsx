'use client'
import { upgradeData } from '@/app/api/data'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { Sparkles, Zap, Shield, Cpu } from 'lucide-react'

const Upgrade = () => {
  const icons = [<Sparkles key="1" />, <Zap key="2" />, <Shield key="3" />, <Cpu key="4" />]

  return (
    <section className='py-64 bg-[#050505] relative' id='ai'>
      <div className='container px-6 mx-auto'>
        <div className='grid lg:grid-cols-2 gap-32 items-center'>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='relative z-10'>

            <div className='flex items-center gap-4 mb-10'>
              <div className='w-12 h-[1px] bg-primary/40'></div>
              <span className='text-primary uppercase tracking-[0.5em] text-10 font-bold'>
                Emergent Intelligence
              </span>
            </div>

            <h2 className='text-white text-54 md:text-86 font-medium leading-[0.9] tracking-tighter mb-12'>
              Synthesized <br />
              <span className='text-primary italic font-serif'>Intelligence.</span>
            </h2>

            <p className='text-white/40 text-18 md:text-24 font-light leading-relaxed mb-16 max-w-lg'>
              We deploy advanced cognitive architectures to refine complex operations into
              seamless digital experiences.
            </p>

            <div className='grid sm:grid-cols-2 gap-12'>
              {upgradeData.map((item, index) => (
                <div key={index} className='group'>
                  <div className='text-primary/40 group-hover:text-primary transition-colors mb-4 scale-75 origin-left'>
                    {index < icons.length ? icons[index] : <Zap />}
                  </div>
                  <h4 className='text-white text-18 font-medium tracking-tight group-hover:text-primary transition-colors duration-500'>
                    {item.title}
                  </h4>
                  <div className='w-full h-px bg-white/5 mt-4 group-hover:bg-primary/20 transition-all'></div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className='relative'>

            <div className='aspect-square relative glass-dark rounded-[80px] overflow-hidden border border-white/5 shadow-2xl group'>
              <div className='absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000'></div>
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='w-96 h-96 border border-primary/10 rounded-full animate-[spin_30s_linear_infinite]'></div>
                <div className='absolute inset-10 border border-white/5 rounded-full animate-[spin_20s_linear_infinite_reverse]'></div>
                <div className='absolute inset-20 border border-primary/5 rounded-full animate-pulse'></div>
              </div>

              <div className='absolute inset-0 flex items-center justify-center p-20'>
                <div className='text-center'>
                  <p className='text-primary/10 text-[10vw] font-black italic select-none'>A.I.</p>
                </div>
              </div>

              {/* Tech Badge Overlay */}
              <div className='absolute bottom-12 left-12 right-12'>
                <div className='glass p-6 rounded-3xl border border-white/5 backdrop-blur-3xl'>
                  <p className='text-white/30 text-10 uppercase tracking-[0.4em] mb-2 font-bold'>Core Integrity</p>
                  <div className='flex justify-between items-end'>
                    <span className='text-white text-24 font-mono font-bold tracking-tighter'>99.98%</span>
                    <div className='flex gap-1'>
                      {[1, 2, 3, 4, 5].map(i => <div key={i} className={`w-1 h-3 bg-primary/${i * 10} rounded-full`}></div>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ambient Glow */}
            <div className='absolute -top-20 -right-20 w-64 h-64 bg-primary/5 blur-[100px] rounded-full'></div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Upgrade
