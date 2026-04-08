import { caseStudiesData } from '@/app/api/data'
import CaseDetailHero from '@/components/CaseStudies/Detail/CaseDetailHero'
import CaseDetailInfo from '@/components/CaseStudies/Detail/CaseDetailInfo'
import CaseDetailContent from '@/components/CaseStudies/Detail/CaseDetailContent'
import CaseDetailNext from '@/components/CaseStudies/Detail/CaseDetailNext'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

const normalizeId = (value: string) => value.trim().toLowerCase()

const findCaseStudyById = (id: string) => {
    const normalizedId = normalizeId(id)
    return caseStudiesData.find((study) => normalizeId(study.id) === normalizedId)
}

export async function generateStaticParams() {
    return caseStudiesData.map((study) => ({
        id: study.id,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params
    const study = findCaseStudyById(id)
    if (!study) return { title: 'Case Study Not Found' }

    return {
        title: `${study.title} | Fynex Case Study`,
        description: study.description,
        openGraph: {
            title: `${study.title} - AI & Digital Transformation`,
            description: study.description,
            images: [study.image],
        }
    }
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const study = findCaseStudyById(id)

    if (!study) {
        notFound()
    }

    // Calculate Next Project ID (Loop back to first if at end)
    const currentIndex = caseStudiesData.findIndex((p) => p.id === study.id)
    const nextStudy = caseStudiesData[(currentIndex + 1) % caseStudiesData.length]

    return (
        <main className="bg-[#050505] min-h-screen">
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
                liveLink={study.liveLink}
            />
            <CaseDetailContent
                details={study.details}
                iconSet={study.iconSet}
            />
            <CaseDetailNext
                nextId={nextStudy.id}
            />
        </main>
    )
}
