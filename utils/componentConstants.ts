import { Variants } from 'framer-motion'

// Shared animation variants
export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay }
  })
}

export const glowEffectVariants: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    rotate: [0, 1, -1, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
}

// Shared gradient styles
export const gradients = {
  primary: 'from-blue-600 to-purple-600',
  secondary: 'from-purple-600 to-blue-600',
  success: 'from-green-600 to-emerald-600',
  warning: 'from-yellow-600 to-orange-600',
  info: 'from-blue-600 to-cyan-600'
}

// Shared component interfaces
export interface BaseProps {
  className?: string
  children?: React.ReactNode
}

export interface SectionProps extends BaseProps {
  id?: string
}

export interface CardProps extends BaseProps {
  gradient?: keyof typeof gradients
  onClick?: () => void
}

// Shared section configurations
export const sectionIds = {
  features: 'features',
  benefits: 'benefits',
  platforms: 'platforms',
  pricing: 'pricing',
  testimonials: 'testimonials',
  contact: 'contact'
} as const

export type SectionId = keyof typeof sectionIds
