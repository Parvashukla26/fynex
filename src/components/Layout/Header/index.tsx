'use client'
import Link from 'next/navigation'
import { useEffect, useState } from 'react'
import { headerData } from '../Header/Navigation/menuData'
import Logo from './Logo'
import HeaderLink from '../Header/Navigation/HeaderLink'
import { Icon } from '@iconify/react/dist/iconify.js'

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false)
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleScroll = () => {
    setSticky(window.scrollY >= 50)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full xl:left-[80px] xl:w-[calc(100%-80px)] transition-all duration-500 ${sticky
        ? 'py-4 bg-darkmode/80 backdrop-blur-xl border-b border-white/5 shadow-2xl'
        : 'py-8 bg-transparent'
        }`}>
      <div className='container px-6 mx-auto flex items-center justify-between'>
        <div className='flex-shrink-0'>
          <Logo />
        </div>

        <nav className='hidden lg:flex items-center gap-12'>
          {headerData.map((item, index) => (
            <HeaderLink key={index} item={item} />
          ))}
        </nav>

        <div className='flex items-center gap-6'>
          <a
            href='#contact'
            className='hidden md:flex items-center gap-3 px-8 py-3 bg-white text-darkmode rounded-full font-bold text-14 uppercase tracking-widest transition-all duration-300 hover:bg-primary hover:scale-105'>
            <span>Initiate</span>
            <Icon icon="ph:arrow-right-bold" width="16" />
          </a>

          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className='lg:hidden flex flex-col gap-1.5 p-2'>
            <span className={`block w-6 h-0.5 bg-white transition-all ${navbarOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${navbarOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${navbarOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-darkmode z-[60] flex flex-col items-center justify-center transition-all duration-700 ${navbarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <button
          onClick={() => setNavbarOpen(false)}
          className='absolute top-10 right-10 text-white'>
          <Icon icon="ph:x-bold" width="40" />
        </button>

        <nav className='flex flex-col items-center gap-10'>
          {headerData.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setNavbarOpen(false)}
              className='text-36 font-bold text-white uppercase tracking-tighter italic hover:text-primary transition-colors'>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
