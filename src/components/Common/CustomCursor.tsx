'use client'

import React, { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false)

  const mouseX = useSpring(0, { damping: 20, stiffness: 250, restDelta: 0.001 })
  const mouseY = useSpring(0, { damping: 20, stiffness: 250, restDelta: 0.001 })

  const mouseXOuter = useSpring(0, { damping: 30, stiffness: 150, restDelta: 0.001 })
  const mouseYOuter = useSpring(0, { damping: 30, stiffness: 150, restDelta: 0.001 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      mouseXOuter.set(e.clientX)
      mouseYOuter.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [mouseX, mouseY, mouseXOuter, mouseYOuter])

  return (
    <>
      <motion.div
        className='cs-cursor_sm'
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      <motion.div
        className={`cs-cursor_lg ${isHovering ? 'active' : ''}`}
        style={{
          x: mouseXOuter,
          y: mouseYOuter,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
      />
    </>
  )
}

export default CustomCursor
