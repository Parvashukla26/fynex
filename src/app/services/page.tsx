import ServiceHero from '@/components/Services/ServiceHero'
import ServiceGrid from '@/components/Services/ServiceGrid'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Services | FYNEX',
    description: 'Elite digital services for modern industry leaders.',
}

export default function ServicesPage() {
    return (
        <main>
            <ServiceHero />
            <ServiceGrid />
        </main>
    )
}
