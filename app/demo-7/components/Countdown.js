"use client"

import NumberFlow, { NumberFlowGroup } from '@number-flow/react';
import { motion } from "motion/react";
import { useEffect, useState } from 'react';

const Countdown = ({ date }) => {
  const calculateTimeLeft = () => {
    const targetDate = new Date(date).getTime()
    const now = new Date().getTime()
    const difference = Math.max(0, Math.floor((targetDate - now) / 1000))
    return difference
  }

  const [seconds, setSeconds] = useState(calculateTimeLeft())

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(interval)
  }, [date])

  const days = Math.floor(seconds / 86400)
  const hh = Math.floor((seconds % 86400) / 3600) || 0
  const mm = Math.floor((seconds % 3600) / 60) || 0
  const ss = seconds % 60 || 0

  return (
    <>
      <div className="text-center text-lg font-bold">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-3"
        >
          We are almost ready!
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="days-left"
        >
          {days > 0 && (
            <NumberFlow
              prefix="Launch in "
              suffix=" Days"
              trend={-1}
              value={days}
              format={{ minimumIntegerDigits: 2 }}
            />
          )}
        </motion.p>
      </div>

      <NumberFlowGroup>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="group text-6xl md:text-8xl tabular-nums text-[var(--primary)]"
          style={{ '--number-flow-char-height': '1em' }}
        >
          <NumberFlow
            suffix="Hours"
            trend={-1}
            value={hh}
            format={{ minimumIntegerDigits: 2 }}
            digits={{ 1: { max: 5 } }}
          />
          <span style={{ fontFamily: 'var(--font-antonio)' }}> : </span>
          <NumberFlow
            suffix="Minutes"
            trend={-1}
            value={mm}
            digits={{ 1: { max: 5 } }}
            format={{ minimumIntegerDigits: 2 }}
          />
          <span style={{ fontFamily: 'var(--font-antonio)' }}> : </span>
          <NumberFlow
            suffix="Seconds"
            trend={-1}
            value={ss}
            digits={{ 1: { max: 5 } }}
            format={{ minimumIntegerDigits: 2 }}
          />
        </motion.div>
      </NumberFlowGroup>
    </>
  )
}

export default Countdown