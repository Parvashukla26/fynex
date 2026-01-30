import ServiceHero from '@/components/Services/ServiceHero'
import ServiceGrid from '@/components/Services/ServiceGrid'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Premium Digital Services & AI Automation',
    description: 'Elite digital services for industry leaders. From AI automation to web development, we deliver premium solutions that drive growth. Explore our services.',
    keywords: ['digital services', 'AI automation', 'web development', 'app development', 'business automation', 'technology consulting', 'digital transformation', 'software development'],
    openGraph: {
        title: 'Premium Digital Services & AI Automation | Fynex',
        description: 'Elite digital services for industry leaders. From AI automation to web development, we deliver premium solutions that drive growth.',
        url: 'https://fynex-gray.vercel.app/services',
        type: 'website',
        images: [
            {
                url: 'https://fynex-gray.vercel.app/og-image.svg',
                width: 1200,
                height: 630,
                alt: 'Fynex Premium Digital Services & AI Automation',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Premium Digital Services & AI Automation | Fynex',
        description: 'Elite digital services for industry leaders. From AI automation to web development, we deliver premium solutions that drive growth.',
        images: ['https://fynex-gray.vercel.app/og-image.svg'],
        creator: '@fynex',
    },
    alternates: {
        canonical: 'https://fynex-gray.vercel.app/services',
    },
}

export default function ServicesPage() {
    return (
        <main>
            <ServiceHero />
            <ServiceGrid />
        </main>
    )
}
