'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

const BookingConfirmation = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className='text-center py-20'
        >
            <div className='inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-8'>
                <CheckCircle size={40} />
            </div>

            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>Confirmed.</h2>

            <p className='text-white/60 text-lg max-w-md mx-auto mb-12 leading-relaxed'>
                Your meeting has been scheduled. We will contact you with further details shortly.
            </p>

            <Link href="/" className='text-white text-xs uppercase tracking-[0.2em] underline underline-offset-8 hover:text-primary transition-colors'>
                Return Home
            </Link>
        </motion.div>
    )
}

export default BookingConfirmation
