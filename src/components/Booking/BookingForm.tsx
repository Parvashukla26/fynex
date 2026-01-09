'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface BookingFormProps {
    onSubmit: (data: { name: string; email: string; notes: string }) => void
    isSubmitting: boolean
}

const BookingForm: React.FC<BookingFormProps> = ({ onSubmit, isSubmitting }) => {
    const [formData, setFormData] = useState({ name: '', email: '', notes: '' })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit(formData)
    }

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className='w-full max-w-md mx-auto space-y-6'
        >
            <div>
                <label className='block text-white/40 text-xs uppercase tracking-widest mb-2'>Full Name</label>
                <input
                    type="text"
                    required
                    className='w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors'
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
            </div>

            <div>
                <label className='block text-white/40 text-xs uppercase tracking-widest mb-2'>Email Address</label>
                <input
                    type="email"
                    required
                    className='w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors'
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
            </div>

            <div>
                <label className='block text-white/40 text-xs uppercase tracking-widest mb-2'>Agenda / Notes</label>
                <textarea
                    rows={4}
                    className='w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors'
                    placeholder="Briefly describe what you'd like to discuss..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className='w-full bg-primary text-black font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
            >
                {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
            </button>
        </motion.form>
    )
}

export default BookingForm
