import CaseHero from '@/components/CaseStudies/CaseHero'
import CaseGrid from '@/components/CaseStudies/CaseGrid'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Case Studies - Real Results & Client Success',
    description: 'Selected elite works defined by impact. Explore our portfolio of transformative projects and success stories that helped businesses achieve their goals.',
    keywords: ['case studies', 'portfolio', 'client success', 'project showcase', 'business results', 'success stories', 'digital projects', 'client testimonials'],
    openGraph: {
        title: 'Case Studies - Real Results & Client Success | Fynex',
        description: 'Selected elite works defined by impact. Explore our portfolio of transformative projects and success stories.',
        url: 'https://fynex-plum.vercel.app/case-studies',
        type: 'website',
        images: [
            {
                url: 'https://fynex-plum.vercel.app/og-image.svg',
                width: 1200,
                height: 630,
                alt: 'Fynex Case Studies - Real Results & Client Success',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Case Studies - Real Results & Client Success | Fynex',
        description: 'Selected elite works defined by impact. Explore our portfolio of transformative projects and success stories.',
        images: ['https://fynex-plum.vercel.app/og-image.svg'],
        creator: '@fynex',
    },
    alternates: {
        canonical: 'https://fynex-plum.vercel.app/case-studies',
    },
}

export default function CaseStudiesPage() {
    return (
        <main>
            <CaseHero />
            <CaseGrid />
        </main>
    )
}
