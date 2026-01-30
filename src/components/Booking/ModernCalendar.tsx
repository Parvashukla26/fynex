'use client'
import { useState } from 'react'
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths, isToday, startOfWeek, endOfWeek, isBefore, startOfDay } from 'date-fns'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ModernCalendarProps {
    selectedDate: Date | undefined
    onSelectDate: (date: Date) => void
}

const ModernCalendar: React.FC<ModernCalendarProps> = ({ selectedDate, onSelectDate }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date())

    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1))
    const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1))

    const monthStart = startOfMonth(currentMonth)
    const monthEnd = endOfMonth(monthStart)
    const calendarStart = startOfWeek(monthStart)
    const calendarEnd = endOfWeek(monthEnd)

    const days = eachDayOfInterval({
        start: calendarStart,
        end: calendarEnd
    })

    // Weekdays header
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    return (
        <div className='w-full max-w-md mx-auto bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-xl'>

            {/* Header */}
            <div className='flex items-center justify-between mb-8'>
                <button onClick={prevMonth} className='p-2 rounded-full hover:bg-white/5 text-white/50 hover:text-white transition-colors'>
                    <ChevronLeft size={20} />
                </button>
                <h2 className='text-white font-medium text-lg tracking-wide'>
                    {format(currentMonth, 'MMMM yyyy')}
                </h2>
                <button onClick={nextMonth} className='p-2 rounded-full hover:bg-white/5 text-white/50 hover:text-white transition-colors'>
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Weekdays */}
            <div className='grid grid-cols-7 mb-4 text-center'>
                {weekdays.map(day => (
                    <div key={day} className='text-white/20 text-xs font-mono uppercase tracking-widest'>
                        {day}
                    </div>
                ))}
            </div>

            {/* Days Grid */}
            <div className='grid grid-cols-7 gap-y-2 gap-x-1'>
                <AnimatePresence mode='popLayout'>
                    {days.map((day) => {
                        const isSelected = selectedDate ? isSameDay(day, selectedDate) : false
                        const isCurrentMonth = isSameMonth(day, currentMonth)
                        const isCurrentDay = isToday(day)
                        const isPastDate = isBefore(startOfDay(day), startOfDay(new Date()))

                        return (
                            <motion.button
                                key={day.toString()}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                onClick={() => !isPastDate && onSelectDate(day)}
                                disabled={isPastDate}
                                className={`
                  relative h-10 w-10 md:h-12 md:w-12 mx-auto rounded-full flex items-center justify-center text-sm transition-all duration-300
                  ${!isCurrentMonth ? 'text-white/5' : 'text-white/80 hover:bg-white/5 hover:text-white'}
                  ${isSelected ? 'bg-primary text-black font-bold hover:bg-primary hover:text-black shadow-[0_0_20px_rgba(197,160,89,0.4)]' : ''}
                  ${isCurrentDay && !isSelected ? 'border border-primary/30 text-primary' : ''}
                  ${isPastDate ? 'opacity-30 cursor-not-allowed hover:bg-transparent' : ''}
                `}
                            >
                                {format(day, 'd')}
                            </motion.button>
                        )
                    })}
                </AnimatePresence>
            </div>

        </div>
    )
}

export default ModernCalendar
