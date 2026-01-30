'use client'
import Link from 'next/link'
import Logo from '../Header/Logo'
import { Icon } from '@iconify/react'

const Footer = () => {
  return (
    <footer className='bg-[#1a1a1a] pt-32 pb-16 border-t border-white/5 overflow-hidden'>
      <div className='container px-6 mx-auto'>
        <div className='grid lg:grid-cols-12 gap-20 mb-32'>

          <div className='lg:col-span-5'>
            <div className='mb-12'>
              <Logo />
            </div>
            <p className='text-white/40 text-18 font-light max-w-sm leading-relaxed mb-12'>
              An architectural digital agency crafting bespoke ecosystems
              for the world&apos;s most innovative technical leaders.
            </p>
            <div className='flex gap-8'>
              {['ph:linkedin-logo-fill', 'ph:twitter-logo-fill', 'ph:instagram-logo-fill'].map((icon, i) => (
                <a key={i} href="#" className='text-white/20 hover:text-primary transition-colors'>
                  <Icon icon={icon} width="24" />
                </a>
              ))}
            </div>
          </div>

          <div className='lg:col-span-2'>
            <h5 className='text-white text-12 font-bold uppercase tracking-[0.4em] mb-10'>Company</h5>
            <ul className='flex flex-col gap-4'>
              <li>
                <Link href="/services" className='text-white/30 hover:text-white transition-colors text-14 font-light'>Services</Link>
              </li>
              <li>
                <Link href="/story" className='text-white/30 hover:text-white transition-colors text-14 font-light'>Our Story</Link>
              </li>
              <li>
                <Link href="/case-studies" className='text-white/30 hover:text-white transition-colors text-14 font-light'>Case Studies</Link>
              </li>
              <li>
                <Link href="/ai-lab" className='text-white/30 hover:text-white transition-colors text-14 font-light'>AI Labs</Link>
              </li>
            </ul>
          </div>

          <div className='lg:col-span-2'>
            <h5 className='text-white text-12 font-bold uppercase tracking-[0.4em] mb-10'>Connect</h5>
            <ul className='flex flex-col gap-4'>
              <li>
                <Link href="/schedule" className='text-white/30 hover:text-white transition-colors text-14 font-light'>Schedule</Link>
              </li>
              <li>
                <Link href="/#contact" className='text-white/30 hover:text-white transition-colors text-14 font-light'>Contact</Link>
              </li>
            </ul>
          </div>

          {/* <div className='lg:col-span-3'>
            <h5 className='text-white text-12 font-bold uppercase tracking-[0.4em] mb-10'>Journal Subscription</h5>
            <p className='text-white/30 text-14 mb-8 font-light'>Insights on digital excellence, delivered monthly.</p>
            <div className='relative'>
              <input
                type="email"
                placeholder="Email Address"
                className='w-full bg-white/[0.03] border border-white/10 rounded-full px-8 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 transition-colors'
              />
              <button className='absolute right-2 top-1.5 w-10 h-10 bg-white rounded-full flex items-center justify-center text-darkmode hover:bg-primary transition-colors'>
                <Icon icon="ph:arrow-right-bold" />
              </button>
            </div>
          </div> */}

        </div>

        <div className='pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8'>
          <p className='text-white/10 text-12 font-bold uppercase tracking-[0.3em]'>
            © 2026 FYNEX STUDIO. ALL RIGHTS RESERVED.
          </p>
          <div className='flex gap-12 text-white/10 text-10 font-bold uppercase tracking-[0.2em]'>
            <Link href="/privacy-policy" className='hover:text-white transition-colors'>Privacy Policy</Link>
            <Link href="/terms-of-service" className='hover:text-white transition-colors'>Terms of Service</Link>
            <Link href="/legal-notice" className='hover:text-white transition-colors'>Legal Notice</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
