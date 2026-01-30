import React from 'react'
import Hero from '@/components/Home/Hero'
import Work from '@/components/Home/work'
import TimeLine from '@/components/Home/timeline'
import Portfolio from '@/components/Home/portfolio'
import Upgrade from '@/components/Home/upgrade'
import Perks from '@/components/Home/perks'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Business Automation & Digital Solutions',
  description: 'Transform your business with AI-powered automation and digital solutions. Fynex delivers cutting-edge technology for scalable growth. Schedule a consultation.',
  keywords: ['AI business automation', 'digital transformation', 'creative studio', 'AI solutions', 'business automation', 'web development', 'technology consulting', 'digital agency', 'innovation'],
  openGraph: {
    title: 'AI Business Automation & Digital Solutions | Fynex',
    description: 'Transform your business with AI-powered automation and digital solutions. Fynex delivers cutting-edge technology for scalable growth.',
    url: 'https://fynex-plum.vercel.app',
    type: 'website',
    images: [
      {
        url: 'https://fynex-plum.vercel.app/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Fynex - AI Business Automation & Digital Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Business Automation & Digital Solutions | Fynex',
    description: 'Transform your business with AI-powered automation and digital solutions. Fynex delivers cutting-edge technology for scalable growth.',
    images: ['https://fynex-plum.vercel.app/og-image.svg'],
    creator: '@fynex',
  },
  alternates: {
    canonical: 'https://fynex-plum.vercel.app',
  },
}

export default function Home() {
  return (
    <main className="bg-darkmode overflow-x-hidden">
      <Hero />
      <Perks />
      <Portfolio />
      <TimeLine />
      <Upgrade />
      <Work />
    </main>
  )
}
