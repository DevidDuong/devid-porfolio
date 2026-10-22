'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function PageLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 700)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-label="Loading portfolio"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-background"
        >
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex size-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-violet font-mono text-lg font-semibold text-primary-foreground"
          >
            DD
          </motion.span>
          <div className="h-0.5 w-32 overflow-hidden rounded-full bg-secondary">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-violet"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
