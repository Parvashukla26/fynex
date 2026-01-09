'use client'
import { motion } from 'framer-motion'

interface TimeSlotPickerProps {
    selectedTime: string | null
    onSelectTime: (time: string) => void
}

const timeSlots = [
    "09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"
]

const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({ selectedTime, onSelectTime }) => {
    return (
        <div className='w-full max-w-sm mx-auto'>
            <h3 className='text-white/40 text-xs font-mono uppercase tracking-widest mb-6 text-center'>Select Time</h3>

            <div className='grid grid-cols-1 gap-3'>
                {timeSlots.map((time, index) => (
                    <motion.button
                        key={time}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => onSelectTime(time)}
                        className={`
              w-full py-4 px-6 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 border
              ${selectedTime === time
                                ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-[1.02]'
                                : 'bg-transparent text-white/60 border-white/10 hover:border-primary/50 hover:text-primary'}
            `}
                    >
                        {time}
                    </motion.button>
                ))}
            </div>
        </div>
    )
}

export default TimeSlotPicker
