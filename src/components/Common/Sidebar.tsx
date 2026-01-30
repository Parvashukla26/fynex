'use client'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'

const CreativeSidebar = () => {
    const { scrollYProgress } = useScroll()
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const [time, setTime] = useState('')

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date()
            setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }))
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const socials = [
        { icon: 'ph:instagram-logo-light', href: 'https://www.instagram.com/fy.nexx/' },
        { icon: 'ph:linkedin-logo-light', href: '#' },
        { icon: 'ph:x-logo-light', href: '#' },
    ]

    return (
        <div className='fixed left-0 top-0 h-full w-[80px] hidden xl:flex flex-col items-center justify-between py-10 z-50 border-r border-white/5 bg-darkmode/20 backdrop-blur-sm'>

            {/* Top Section - Status */}
            <div className='flex flex-col items-center gap-6'>
                <div className='flex flex-col items-center gap-2'>
                    <div className='w-1 h-1 rounded-full bg-primary animate-pulse'></div>
                    <span className='text-white/20 text-9 font-mono vertical-text tracking-[0.3em] font-bold'>LIVE STATUS</span>
                </div>
                <span className='text-primary text-12 font-mono font-bold'>{time}</span>
            </div>

            {/* Middle Section - Branding Vertical */}
            <div className='relative flex flex-col items-center'>
                <div className='h-32 w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent' />
                <span className='text-white/10 text-10 uppercase tracking-[0.8em] font-black vertical-text my-12 whitespace-nowrap'>
                    FYNEX | DIGITAL ARCHITECTURE
                </span>
                <div className='h-32 w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent' />
            </div>

            {/* Bottom Section - Socials & Progress */}
            <div className='flex flex-col items-center gap-10'>
                <div className='flex flex-col gap-6'>
                    {socials.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            className='text-white/30 hover:text-primary transition-colors duration-300 transform hover:scale-110'
                        >
                            <Icon icon={social.icon} width="20" />
                        </a>
                    ))}
                </div>

                {/* Scroll Progress Line */}
                <div className='w-[2px] h-24 bg-white/5 relative rounded-full overflow-hidden'>
                    <motion.div
                        className='absolute top-0 left-0 right-0 bg-primary origin-top h-full'
                        style={{ scaleY }}
                    />
                </div>
            </div>

            <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
      `}</style>
        </div>
    )
}

export default CreativeSidebar
