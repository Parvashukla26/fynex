import CaseHero from '@/components/CaseStudies/CaseHero'
import CaseGrid from '@/components/CaseStudies/CaseGrid'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Case Studies | FYNEX',
    description: 'Selected elite works defined by impact.',
}

export default function CaseStudiesPage() {
    return (
        <main>
            <CaseHero />
            <CaseGrid />
        </main>
    )
}
