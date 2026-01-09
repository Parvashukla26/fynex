'use client'
import { caseStudiesData } from '@/app/api/data'
import CaseCard from './CaseCard'

const CaseGrid = () => {
    return (
        <section className='pb-32 bg-[#050505]'>
            <div className='container px-6 mx-auto'>
                <div className='grid md:grid-cols-2 gap-x-8 gap-y-16'>
                    {caseStudiesData.map((item, index) => (
                        <div key={item.id} className={`${index % 2 === 1 ? 'md:mt-24' : ''}`}>
                            <CaseCard item={item} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CaseGrid
