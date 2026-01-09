'use client'
import { servicesData } from '@/app/api/data'
import ServiceCard from './ServiceCard'

const ServiceGrid = () => {
    return (
        <section className='py-20 md:py-32 bg-[#050505]'>
            <div className='container px-6 mx-auto'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} item={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServiceGrid
