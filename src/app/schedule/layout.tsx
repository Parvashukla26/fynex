import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Schedule a Consultation - Book Your Meeting',
    description: 'Book a consultation with Fynex. Schedule your meeting to discuss your project and discover how we can transform your business. Choose your preferred time.',
    keywords: ['schedule meeting', 'book consultation', 'contact Fynex', 'project inquiry', 'consultation booking', 'get in touch', 'meeting request'],
    openGraph: {
        title: 'Schedule a Consultation - Book Your Meeting | Fynex',
        description: 'Book a consultation with Fynex. Schedule your meeting to discuss your project and discover how we can transform your business.',
        url: 'https://fynex-plum.vercel.app/schedule',
        type: 'website',
        images: [
            {
                url: 'https://fynex-plum.vercel.app/og-image.svg',
                width: 1200,
                height: 630,
                alt: 'Fynex - Schedule a Consultation',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Schedule a Consultation - Book Your Meeting | Fynex',
        description: 'Book a consultation with Fynex. Schedule your meeting to discuss your project and discover how we can transform your business.',
        images: ['https://fynex-plum.vercel.app/og-image.svg'],
        creator: '@fynex',
    },
    alternates: {
        canonical: 'https://fynex-plum.vercel.app/schedule',
    },
}

export default function ScheduleLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
