import StoryHero from '@/components/Story/StoryHero'
import StoryNarrative from '@/components/Story/StoryNarrative'
import StoryClimax from '@/components/Story/StoryClimax'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Our Story | FYNEX',
    description: 'From silence to success. The journey of FYNEX.',
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
