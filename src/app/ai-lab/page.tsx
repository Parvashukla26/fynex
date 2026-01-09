import LabHero from '@/components/AILab/LabHero'
import LabFeatures from '@/components/AILab/LabFeatures'
import LabExperiments from '@/components/AILab/LabExperiments'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'AI Lab | FYNEX',
    description: 'Unfair Advantage. Engineered. The premium AI capabilities of FYNEX.',
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
