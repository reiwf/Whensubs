'use client'

import { motion } from 'framer-motion'
import { orbConfigs } from '@/utils/orbConfigs'
import { BaseProps } from '@/utils/componentConstants'

export default function BackgroundOrbs({ className = '' }: BaseProps) {
  return (
    <div 
      className={`fixed inset-0 overflow-hidden pointer-events-none z-[1] ${className}`}
      aria-hidden="true"
    >
      {orbConfigs.map((config, index) => (
        <motion.div
          key={index}
          className={`${config.className} opacity-50`}
          animate={config.animate}
          transition={config.transition}
        />
      ))}
    </div>
  )
}
