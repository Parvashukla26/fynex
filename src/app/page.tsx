import React from 'react'
import Hero from '@/components/Home/Hero'
import Work from '@/components/Home/work'
import TimeLine from '@/components/Home/timeline'
import Platform from '@/components/Home/platform'
import Portfolio from '@/components/Home/portfolio'
import Upgrade from '@/components/Home/upgrade'
import Perks from '@/components/Home/perks'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fynex | Digital Transformation Agency',
  description: 'High-end digital solutions engineered for startups that demand excellence. Luxury expressed through simplicity and restraint.',
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
