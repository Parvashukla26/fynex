import LabHero from '@/components/AILab/LabHero'
import LabFeatures from '@/components/AILab/LabFeatures'
import LabExperiments from '@/components/AILab/LabExperiments'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'AI Lab - Cutting-Edge AI Solutions',
    description: 'Unfair advantage. Engineered. Discover premium AI capabilities including machine learning, automation tools, and intelligent systems that transform businesses.',
    keywords: ['AI lab', 'artificial intelligence', 'machine learning', 'AI automation', 'intelligent systems', 'AI solutions', 'automation tools', 'AI research', 'neural networks'],
    openGraph: {
        title: 'AI Lab - Cutting-Edge AI Solutions | Fynex',
        description: 'Unfair advantage. Engineered. Discover premium AI capabilities including machine learning, automation tools, and intelligent systems.',
        url: 'https://fynex-gray.vercel.app/ai-lab',
        type: 'website',
        images: [
            {
                url: 'https://fynex-gray.vercel.app/og-image.svg',
                width: 1200,
                height: 630,
                alt: 'Fynex AI Lab - Cutting-Edge AI Solutions',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Lab - Cutting-Edge AI Solutions | Fynex',
        description: 'Unfair advantage. Engineered. Discover premium AI capabilities including machine learning and intelligent systems.',
        images: ['https://fynex-gray.vercel.app/og-image.svg'],
        creator: '@fynex',
    },
    alternates: {
        canonical: 'https://fynex-gray.vercel.app/ai-lab',
    },
}

export default function AILabPage() {
    return (
        <main>
            <LabHero />
            <LabFeatures />
            <LabExperiments />
        </main>
    )
}
