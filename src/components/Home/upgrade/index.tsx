'use client'
import { upgradeData } from '@/app/api/data'

import { motion } from 'framer-motion'
import { Sparkles, Zap, Shield, Cpu } from 'lucide-react'

const Upgrade = () => {
  const icons = [<Sparkles key="1" />, <Zap key="2" />, <Shield key="3" />, <Cpu key="4" />]

  return (
    <section className='py-32 md:py-56 bg-[#050505] relative' id='ai'>
      <div className='container px-6 mx-auto'>
        <div className='grid lg:grid-cols-2 gap-24 md:gap-40 items-center'>

          {/* Left Content Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='relative z-10'>

            <div className='flex items-center gap-4 mb-8'>
              <div className='w-12 h-[1px] bg-primary/30'></div>
              <span className='text-primary uppercase tracking-[0.4em] text-11 font-bold'>
                Emergent Solutions
              </span>
            </div>

            <h2 className='text-white text-48 md:text-64 font-medium leading-[1.1] tracking-tighter mb-10'>
              Precision AI <br />
              <span className='text-primary italic font-serif'>Strategic Mastery.</span>
            </h2>

            <p className='text-white/40 text-16 md:text-18 font-light leading-relaxed mb-12 max-w-lg'>
              Deploying high-performance machine learning infrastructures to automate decisions and optimize vital business operations.
            </p>

            <div className='grid sm:grid-cols-2 gap-x-10 gap-y-12'>
              {upgradeData.map((item, index) => (
                <div key={index} className='group'>
                  <div className='flex items-center gap-4 mb-3'>
                    <div className='text-primary/50 group-hover:text-primary transition-colors duration-500 scale-90'>
                      {index < icons.length ? icons[index] : <Zap />}
                    </div>
                    <h4 className='text-white text-17 font-semibold tracking-tight transition-colors duration-500'>
                      {item.title}
                    </h4>
                  </div>
                  <p className='text-white/30 text-14 leading-relaxed group-hover:text-white/50 transition-colors duration-500 pl-9'>
                    {item.description}
                  </p>
                  <div className='w-full h-[1px] bg-white/5 mt-6 group-hover:bg-primary/20 transition-all duration-700 ml-9'></div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual Side - Refined & Proper */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className='relative lg:pl-10'>

            <div className='relative aspect-[4/5] bg-[#0A0A0A] rounded-2xl overflow-hidden border border-white/5 shadow-2xl group'>
              {/* Architectural Grid Background */}
              <div className='absolute inset-0 opacity-[0.03]'
                style={{ backgroundImage: `linear-gradient(rgba(197, 160, 89, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(197, 160, 89, 0.2) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
              />

              {/* Central Minimal Hub */}
              <div className='absolute inset-0 flex flex-col items-center justify-center'>
                <div className='relative w-64 h-64 flex items-center justify-center'>
                  {/* Subtle Orbitals */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className='absolute inset-0 border border-white/[0.03] rounded-full'
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className='absolute inset-10 border border-primary/5 rounded-full'
                  />

                  {/* Neural Core */}
                  <div className='relative z-10'>
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className='w-1 bg-primary h-1 rounded-full shadow-[0_0_20px_rgba(197,160,89,1)]'
                    />
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/5 blur-3xl rounded-full' />
                  </div>

                  <div className='absolute inset-0 flex items-center justify-center'>
                    <span className='text-white/[0.03] text-120 font-black tracking-tighter italic select-none'>AIX</span>
                  </div>
                </div>
              </div>

              {/* Minimalist Accents */}
              <div className='absolute top-10 left-10 flex flex-col gap-6'>
                <div className='flex items-center gap-3'>
                  <div className='w-1 h-1 rounded-full bg-primary animate-pulse'></div>
                  <span className='text-white/20 text-9 uppercase tracking-[0.5em] font-bold'>System Active</span>
                </div>
              </div>

              {/* Bottom Efficiency Bar - Ultra Slim */}
              <div className='absolute bottom-10 left-10 right-10'>
                <div className='flex justify-between items-end mb-3'>
                  <div className='flex flex-col gap-1'>
                    <span className='text-white/10 text-8 uppercase tracking-[0.4em] font-bold'>Neural Efficiency</span>
                    <span className='text-white/40 text-12 font-mono'>99.9%</span>
                  </div>
                  <div className='w-24 h-[1px] bg-white/10 relative overflow-hidden'>
                    <motion.div
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className='absolute inset-0 bg-primary/40'
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Aesthetic Glows */}
            <div className='absolute -top-10 -right-10 w-64 h-64 bg-primary/5 blur-[120px] rounded-full'></div>
            <div className='absolute -bottom-10 -left-10 w-48 h-48 bg-primary/10 blur-[100px] rounded-full opacity-30'></div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Upgrade
