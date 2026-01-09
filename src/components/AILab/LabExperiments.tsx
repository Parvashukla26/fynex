'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const experiments = [
    {
        id: "01",
        name: "NEURAL SEARCH ENGINE",
        type: "Context Awareness",
        image: "/images/portfolio/case-nebula.svg" // Reusing premium abstract assets
    },
    {
        id: "02",
        name: "GENERATIVE UI_V2",
        type: "Adaptive Interface",
        image: "/images/portfolio/case-aura.svg"
    },
    {
        id: "03",
        name: "PREDICTIVE LOGIC",
        type: "Forecasting Model",
        image: "/images/portfolio/case-vantage.svg"
    }
]

const LabExperiments = () => {
    return (
        <section className='py-32 bg-[#000] overflow-hidden'>
            <div className='container px-6 mx-auto'>

                <div className='mb-20 flex justify-between items-end'>
                    <div>
                        <span className='text-primary uppercase tracking-[0.5em] text-xs font-bold block mb-4'>The Showroom</span>
                        <h2 className='text-4xl md:text-5xl font-medium text-white'>Experimental <br /> Prototypes.</h2>
                    </div>
                    <div className='hidden md:block text-right'>
                        <p className='text-white/40 text-sm max-w-xs'>
                            Access to these systems is restricted to enterprise partners.
                        </p>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {experiments.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className='group relative aspect-[4/5] bg-[#050505] border border-white/5 overflow-hidden'
                        >
                            <Image
                                src={exp.image}
                                alt={exp.name}
                                fill
                                className='object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700 grayscale group-hover:grayscale-0'
                            />

                            <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent' />

                            <div className='absolute bottom-0 left-0 w-full p-8'>
                                <span className='text-primary/60 font-mono text-xs mb-2 block'>{exp.id} // {exp.type}</span>
                                <h3 className='text-2xl font-bold text-white group-hover:tracking-wider transition-all duration-500'>{exp.name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default LabExperiments
