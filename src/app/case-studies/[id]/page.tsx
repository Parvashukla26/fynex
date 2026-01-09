import { caseStudiesData } from '@/app/api/data'
import CaseDetailHero from '@/components/CaseStudies/Detail/CaseDetailHero'
import CaseDetailInfo from '@/components/CaseStudies/Detail/CaseDetailInfo'
import CaseDetailContent from '@/components/CaseStudies/Detail/CaseDetailContent'
import CaseDetailGallery from '@/components/CaseStudies/Detail/CaseDetailGallery'
import CaseDetailNext from '@/components/CaseStudies/Detail/CaseDetailNext'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
    return caseStudiesData.map((study) => ({
        id: study.id.toString(),
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params
    const study = caseStudiesData.find((p) => p.id.toString() === id)
    if (!study) return { title: 'Case Study Not Found' }

    return {
        title: `${study.title} | Case Study`,
        description: study.description,
    }
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const study = caseStudiesData.find((p) => p.id.toString() === id)

    if (!study) {
        notFound()
    }

    // Calculate Next Project ID (Loop back to 1 if at end)
    const currentIndex = caseStudiesData.findIndex((p) => p.id === study.id)
    const nextStudy = caseStudiesData[(currentIndex + 1) % caseStudiesData.length]

    return (
        <main>
            <CaseDetailHero
                title={study.title}
                category={study.category}
                image={study.image}
            />
            <CaseDetailInfo
                client={study.client}
                year={study.year}
                location={study.location}
                services={study.services}
            />
            <CaseDetailContent
                challenge={study.challenge}
                solution={study.solution}
            />
            <CaseDetailGallery
                images={study.gallery}
            />
            <CaseDetailNext
                nextId={nextStudy.id}
            />
        </main>
    )
}
