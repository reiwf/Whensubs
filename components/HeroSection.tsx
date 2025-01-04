'use client'

import { motion, useScroll, useTransform, Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useRef, useEffect, useState, memo } from 'react'
import { Button } from './ui/button'
import { fadeInUpVariants as defaultFadeInUpVariants, glowEffectVariants as defaultGlowEffectVariants } from '@/utils/componentConstants'
import { ErrorBoundary } from 'react-error-boundary'

// Memoized button component for better performance
const DemoButton = memo(function DemoButton() {
  return (
    <Link 
      href="/usecase/minpaku" 
      aria-label="デモを試す - 民泊用AIチャットボットを体験"
    >
      <Button 
        size="lg" 
        className="px-8 py-4 text-lg rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300"
        tabIndex={0}
      >
        デモを試す
        <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
      </Button>
    </Link>
  )
})

// Error fallback component
function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <div role="alert" className="text-center p-4">
      <p className="text-red-500">エラーが発生しました:</p>
      <pre className="text-sm text-red-400">{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        再試行
      </button>
    </div>
  )
}

function HeroSectionContent() {
  const [fadeInUpVariants, setFadeInUpVariants] = useState<Variants>(defaultFadeInUpVariants)
  const [glowEffectVariants, setGlowEffectVariants] = useState<Variants>(defaultGlowEffectVariants)

  // Handle reduced motion preference
  useEffect(() => {
    try {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      const handleMotionPreference = (event: MediaQueryListEvent | MediaQueryList) => {
        if (event.matches) {
          setFadeInUpVariants({
            ...defaultFadeInUpVariants,
            visible: {
              ...defaultFadeInUpVariants.visible,
              transition: { duration: 0 }
            }
          })
          setGlowEffectVariants({
            ...defaultGlowEffectVariants,
            animate: {
              ...defaultGlowEffectVariants.animate,
              transition: { duration: 0 }
            }
          })
        }
      }

      // Initial check
      handleMotionPreference(mediaQuery)

      // Add listener for changes
      mediaQuery.addEventListener('change', handleMotionPreference)

      // Cleanup
      return () => {
        mediaQuery.removeEventListener('change', handleMotionPreference)
      }
    } catch (error) {
      console.error('Error handling motion preference:', error)
    }
  }, [])

  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section 
      ref={ref} 
      className="relative h-screen flex items-center justify-center py-10 sm:py-20 overflow-hidden"
      role="banner"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-4 relative z-1">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          style={{ y, opacity }}
        >
          <h1 
            id="hero-heading"
            className="text-3xl sm:text-6xl font-normal mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-500"
          >
            <span className="text-gray-700">Whensubs</span>でAIの力を解放          
          </h1>
          <p className="text-xl sm:text-4xl text-gray-600 dark:text-gray-300 mb-6" role="doc-subtitle">
            AI チャットの可能性を探る
          </p>
          <p className="text-l sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            いつでもどこでも
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <DemoButton />
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-16 relative"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 0.8 }
            }
          }}
        >
          <div className="relative mx-auto max-w-4xl">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl"
              variants={glowEffectVariants}
              animate="animate"
              aria-hidden="true"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Main component wrapped with ErrorBoundary
export default function HeroSection() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Reset the state of your app here
        window.location.reload()
      }}
    >
      <HeroSectionContent />
    </ErrorBoundary>
  )
}
