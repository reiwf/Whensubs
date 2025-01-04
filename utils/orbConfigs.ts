import { MotionProps } from 'framer-motion'
import { useMemo } from 'react'

/**
 * Configuration interface for animated orb elements
 * @interface OrbConfig
 */
export interface OrbConfig {
  /** Tailwind CSS classes for styling the orb */
  className: string
  /** Framer Motion animation properties */
  animate: MotionProps['animate']
  /** Framer Motion transition properties */
  transition: MotionProps['transition']
  /** Optional inline styles */
  style?: React.CSSProperties
}

interface AnimationConfig {
  minScale?: number
  maxScale?: number
  maxTranslateX?: number
  maxTranslateY?: number
  maxRotation?: number
  minDuration?: number
  maxDuration?: number
}

const DEFAULT_ANIMATION_CONFIG: AnimationConfig = {
  minScale: 1,
  maxScale: 1.5,
  maxTranslateX: 200,
  maxTranslateY: 300,
  maxRotation: 360,
  minDuration: 5,
  maxDuration: 8
}

/**
 * Generates random animation values within specified constraints
 * @param config - Animation configuration options
 * @returns Animation configuration object for Framer Motion
 */
const getRandomAnimation = (config: AnimationConfig = DEFAULT_ANIMATION_CONFIG) => {
  const {
    minScale = 1,
    maxScale = 1.5,
    maxTranslateX = 200,
    maxTranslateY = 300,
    maxRotation = 360
  } = config

  return {
    x: Array.from({ length: 3 }, () => 
      Math.random() * maxTranslateX * (Math.random() > 0.5 ? 1 : -1)
    ),
    y: Array.from({ length: 3 }, () => 
      Math.random() * maxTranslateY * (Math.random() > 0.5 ? 1 : -1)
    ),
    scale: [minScale, Math.random() * (maxScale - minScale) + minScale, minScale],
    rotate: [0, Math.random() * maxRotation, 0]
  }
}

/**
 * Hook to generate memoized orb configurations
 * @param count - Number of orbs to generate
 * @param animationConfig - Optional animation configuration
 * @returns Array of orb configurations
 */
export const useOrbConfigs = (
  count: number = 5,
  animationConfig: AnimationConfig = DEFAULT_ANIMATION_CONFIG
): OrbConfig[] => {
  const { minDuration = 5, maxDuration = 8 } = animationConfig

  return useMemo(() => {
    const gradients = [
      'from-blue-500/40 to-purple-500/30',
      'from-cyan-500/30 to-blue-500/40',
      'from-indigo-500/35 to-violet-500/30',
      'from-rose-500/30 to-orange-500/40',
      'from-teal-500/30 to-green-500/40'
    ]

    const sizes = [300, 400, 350, 450, 350]
    const blurs = [60, 70, 65, 75, 75]
    const positions = [
      'right-[10%] top-[15%]',
      'left-[5%] bottom-[20%]',
      'left-[15%] top-[10%]',
      'right-[5%] bottom-[10%]',
      'left-[40%] bottom-[10%]'
    ]

    return Array.from({ length: count }, (_, i) => ({
      className: `absolute ${positions[i % positions.length]} w-[${sizes[i % sizes.length]}px] h-[${
        sizes[i % sizes.length]
      }px] rounded-full bg-gradient-to-br ${
        gradients[i % gradients.length]
      } blur-[${blurs[i % blurs.length]}px]`,
      animate: getRandomAnimation(animationConfig),
      transition: {
        duration: Math.random() * (maxDuration - minDuration) + minDuration,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
        delay: i * 0.2
      }
    }))
  }, [count, animationConfig, minDuration, maxDuration])
}

/**
 * Default orb configurations with predefined styles and animations
 */
export const orbConfigs: OrbConfig[] = [
  {
    className: "absolute right-[10%] top-[15%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-blue-500/40 to-purple-500/30 blur-[60px]",
    animate: getRandomAnimation(),
    transition: {
      duration: 7,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay: 0.2
    }
  },
  {
    className: "absolute left-[5%] bottom-[20%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-cyan-500/30 to-blue-500/40 blur-[70px]",
    animate: getRandomAnimation(),
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay: 0.4
    }
  },
  {
    className: "absolute left-[15%] top-[10%] w-[350px] h-[350px] rounded-full bg-gradient-to-bl from-indigo-500/35 to-violet-500/30 blur-[65px]",
    animate: getRandomAnimation(),
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay: 0.6
    }
  },
  {
    className: "absolute right-[5%] bottom-[10%] w-[450px] h-[450px] rounded-full bg-gradient-to-tl from-rose-500/30 to-orange-500/40 blur-[75px]",
    animate: getRandomAnimation(),
    transition: {
      duration: 7.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay: 0.8
    }
  },
  {
    className: "absolute left-[40%] bottom-[10%] w-[350px] h-[350px] rounded-full bg-gradient-to-br from-teal-500/30 to-green-500/40 blur-[75px]",
    animate: getRandomAnimation(),
    transition: {
      duration: 6.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay: 0.4
    }
  }
]
