'use client'

import { AnimatePresence, motion } from 'framer-motion'
import styles from './Transition.module.css'

interface Props {
  category: string | null
  children: React.ReactNode
}

export default function Transition({ category, children }: Props) {
  const variants = {
    out: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.5,
      },
    },
  }

  return (
    <div className={styles.transition}>
      <AnimatePresence initial={false} mode='wait'>
        <motion.div
          key={category}
          variants={variants}
          animate='in'
          initial='out'
          exit='out'
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
