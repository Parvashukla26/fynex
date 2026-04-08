'use client'
import { useEffect, useRef, useState } from 'react'
import { headerData } from '../Header/Navigation/menuData'
import Logo from './Logo'
import HeaderLink from '../Header/Navigation/HeaderLink'
import { Icon } from '@iconify/react/dist/iconify.js'

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false)
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const handleScroll = () => {
    setSticky(window.scrollY >= 50)
  }

  useEffect(() => {
    setMounted(true)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (!mounted) return
    
    if (navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [navbarOpen, mounted])

  useEffect(() => {
    if (!navbarOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setNavbarOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [navbarOpen])

  useEffect(() => {
    if (!navbarOpen) {
      menuButtonRef.current?.focus()
    }
  }, [navbarOpen])

  if (!mounted) {
    return (
      <header className='fixed top-0 z-[100] w-full xl:left-[80px] xl:w-[calc(100%-80px)] py-8 bg-transparent'>
        <div className='container px-6 mx-auto flex items-center justify-between'>
          <div className='flex-shrink-0'>
            <Logo />
          </div>
          <nav className='hidden lg:flex items-center gap-12 cursor-pointer select-none'>
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div className='flex items-center gap-6'>
            <a
              href='schedule'
              className='hidden md:flex items-center gap-3 px-8 py-3 bg-white text-darkmode rounded-full font-bold text-14 uppercase tracking-widest transition-all duration-300 hover:bg-primary hover:scale-105'>
              Initiate
              <Icon icon="ph:arrow-right-bold" width="16" />
            </a>
            <button className='lg:hidden flex flex-col gap-1.5 p-2'>
              <span className='block w-6 h-0.5 bg-white'></span>
              <span className='block w-6 h-0.5 bg-white'></span>
              <span className='block w-6 h-0.5 bg-white'></span>
            </button>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header
      className={`fixed top-0 z-[100] w-full xl:left-[80px] xl:w-[calc(100%-80px)] transition-all duration-500 ${sticky
        ? 'py-4 bg-darkmode/80 backdrop-blur-xl border-b border-white/5 shadow-2xl'
        : 'py-8 bg-transparent'
        }`}>
      <div className='container px-6 mx-auto flex items-center justify-between'>
        <div className='flex-shrink-0'>
          <Logo />
        </div>

        <nav className='hidden lg:flex items-center gap-12 cursor-pointer select-none'>
          {headerData.map((item, index) => (
            <HeaderLink key={index} item={item} />
          ))}
        </nav>

        <div className='flex items-center gap-6'>
          <a
            href='schedule'
            className='hidden md:flex items-center gap-3 px-8 py-3 bg-white text-darkmode rounded-full font-bold text-14 uppercase tracking-widest transition-all duration-300 hover:bg-primary hover:scale-105'>
            Initiate
            <Icon icon="ph:arrow-right-bold" width="16" />
          </a>

          <button
            ref={menuButtonRef}
            onClick={() => setNavbarOpen(!navbarOpen)}
            aria-label={navbarOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={navbarOpen}
            aria-controls='mobile-nav-drawer'
            className='lg:hidden flex flex-col gap-1.5 p-2'>
            <span className={`block w-6 h-0.5 bg-white transition-all ${navbarOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${navbarOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${navbarOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <div
        onClick={() => setNavbarOpen(false)}
        aria-hidden='true'
        className={`fixed inset-0 z-[140] bg-black/60 backdrop-blur-sm transition-opacity duration-500 lg:hidden ${navbarOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      />

      {/* Mobile Drawer */}
      <aside
        id='mobile-nav-drawer'
        aria-label='Mobile navigation drawer'
        className={`fixed top-0 right-0 z-[150] h-dvh w-[min(88vw,420px)] border-l border-white/10 bg-darkmode/95 px-6 pb-8 pt-24 shadow-2xl backdrop-blur-xl transition-transform duration-500 ease-out lg:hidden ${navbarOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'}`}>
        <button
          onClick={() => setNavbarOpen(false)}
          aria-label='Close navigation menu'
          className='absolute right-5 top-5 text-white'>
          <Icon icon='ph:x-bold' width='30' className='sm:w-9 sm:h-9' />
        </button>

        <nav className='h-full overflow-y-auto pr-2'>
          <div className='flex flex-col gap-3 sm:gap-4'>
          {headerData.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setNavbarOpen(false)}
              className='py-2 text-20 sm:text-24 font-bold text-white uppercase tracking-tighter italic leading-[1.05] hover:text-primary transition-colors cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 rounded-sm'>
              {item.label}
            </a>
          ))}
          </div>
        </nav>
      </aside>
    </header>
  )
}

export default Header
