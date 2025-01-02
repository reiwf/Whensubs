'use client'

import { motion } from 'framer-motion'
import { orbConfigs } from '@/utils/orbConfigs'

export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">
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

