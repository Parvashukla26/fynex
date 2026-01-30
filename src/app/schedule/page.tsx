'use client'
import { useState } from 'react'
import { format } from 'date-fns'
import BookingHero from '@/components/Booking/BookingHero'
import ModernCalendar from '@/components/Booking/ModernCalendar'
import TimeSlotPicker from '@/components/Booking/TimeSlotPicker'
import BookingForm from '@/components/Booking/BookingForm'
import BookingConfirmation from '@/components/Booking/BookingConfirmation'
import { motion, AnimatePresence } from 'framer-motion'

// Note: SEO metadata for client components should be added via layout.tsx or a wrapper page component
// For now, we'll keep this as a client component since it has interactive state

export default function SchedulePage() {
    const [step, setStep] = useState<1 | 2 | 3 | 4>(1) // 1: Date, 2: Time, 3: Details, 4: Success
    const [date, setDate] = useState<Date | undefined>(undefined)
    const [time, setTime] = useState<string | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleDateSelect = (selectedDate: Date) => {
        setDate(selectedDate)
        setStep(2)
    }

    const handleTimeSelect = (selectedTime: string) => {
        setTime(selectedTime)
        setStep(3)
    }

    const handleSubmit = async (data: { name: string; email: string; notes: string }) => {
        if (!date || !time) return

        setIsSubmitting(true)
        try {
            const formattedDate = format(date, 'MMMM do, yyyy')

            const response = await fetch('/api/booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...data,
                    date: formattedDate,
                    time: time
                })
            })

            if (response.ok) {
                setStep(4)
            } else {
                alert('Software error. Please try again.')
            }
        } catch (error) {
            console.error(error)
            alert('Failed to schedule. Please check your connection.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <main className='min-h-screen bg-[#050505] flex flex-col'>
            {step !== 4 && <BookingHero />}

            <div className='flex-grow container px-6 mx-auto pb-20'>
                <AnimatePresence mode='wait'>

                    {/* Step 1: Calendar */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className='flex flex-col items-center mt-10'
                        >
                            <ModernCalendar selectedDate={date} onSelectDate={handleDateSelect} />
                            <p className='mt-8 text-white/30 text-xs uppercase tracking-widest'>Step 01 / 03: Select Date</p>
                        </motion.div>
                    )}

                    {/* Step 2: Time */}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className='flex flex-col items-center mt-10'
                        >
                            <div className='mb-8 text-center'>
                                <button onClick={() => setStep(1)} className='text-white/40 hover:text-white text-xs uppercase tracking-widest mb-2 transition-colors'>
                                    ← Change Date
                                </button>
                                <h3 className='text-2xl text-white font-medium'>
                                    {date && format(date, 'MMMM do, yyyy')}
                                </h3>
                            </div>
                            <TimeSlotPicker selectedTime={time} onSelectTime={handleTimeSelect} />
                            <p className='mt-8 text-white/30 text-xs uppercase tracking-widest'>Step 02 / 03: Select Time</p>
                        </motion.div>
                    )}

                    {/* Step 3: Details */}
                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className='flex flex-col items-center mt-10'
                        >
                            <div className='mb-8 text-center'>
                                <button onClick={() => setStep(2)} className='text-white/40 hover:text-white text-xs uppercase tracking-widest mb-2 transition-colors'>
                                    ← Change Time
                                </button>
                                <h3 className='text-xl text-white font-medium'>
                                    {date && format(date, 'MMM do')} @ {time}
                                </h3>
                            </div>
                            <BookingForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
                            <p className='mt-8 text-white/30 text-xs uppercase tracking-widest'>Step 03 / 03: Your Details</p>
                        </motion.div>
                    )}

                    {/* Step 4: Success */}
                    {step === 4 && (
                        <BookingConfirmation key="step4" />
                    )}

                </AnimatePresence>
            </div>
        </main>
    )
}
