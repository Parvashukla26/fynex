import StoryHero from '@/components/Story/StoryHero'
import StoryNarrative from '@/components/Story/StoryNarrative'
import StoryClimax from '@/components/Story/StoryClimax'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Our Story - Innovation & Excellence',
    description: 'From silence to success. Discover the journey of Fynex and our mission to deliver exceptional digital solutions through innovation and creative excellence.',
    keywords: ['about Fynex', 'company story', 'our mission', 'digital agency', 'creative studio', 'innovation', 'values', 'team'],
    openGraph: {
        title: 'Our Story - Innovation & Excellence | Fynex',
        description: 'From silence to success. Discover the journey of Fynex and our mission to deliver exceptional digital solutions through innovation.',
        url: 'https://fynex-plum.vercel.app/story',
        type: 'website',
        images: [
            {
                url: 'https://fynex-plum.vercel.app/og-image.svg',
                width: 1200,
                height: 630,
                alt: 'Fynex - Our Story of Innovation & Excellence',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Our Story - Innovation & Excellence | Fynex',
        description: 'From silence to success. Discover the journey of Fynex and our mission to deliver exceptional digital solutions.',
        images: ['https://fynex-plum.vercel.app/og-image.svg'],
        creator: '@fynex',
    },
    alternates: {
        canonical: 'https://fynex-plum.vercel.app/story',
    },
}

export default function StoryPage() {
    return (
        <main>
            <StoryHero />
            <StoryNarrative />
            <StoryClimax />
        </main>
    )
}
