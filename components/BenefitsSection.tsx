'use client'

import { motion, useInView, Variants } from 'framer-motion'
import { useRef, memo, useEffect, useState } from 'react'
import { Card, CardContent } from '../components/ui/card'
import { ErrorBoundary } from 'react-error-boundary'
import { benefits, type Benefit } from '../utils/benefitsConfig'

// Memoized benefit card component for better performance
const BenefitCard = memo(function BenefitCard({ 
  benefit, 
  index, 
  isInView,
  reducedMotion
}: { 
  benefit: Benefit
  index: number
  isInView: boolean
  reducedMotion: boolean
}) {
  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: reducedMotion ? 0 : 0.5, 
        delay: reducedMotion ? 0 : index * 0.1 
      }
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className="relative group"
      role="article"
      aria-labelledby={`benefit-${index}-title`}
    >
      <div
        className="absolute inset-0 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
        style={{
          backgroundImage: `linear-gradient(to right, ${benefit.gradient.split(' ')[1]}, ${benefit.gradient.split(' ')[3]})`
        }}
        aria-hidden="true"
      />
      <Card className="relative h-full bg-white dark:bg-gray-800 border-0 overflow-hidden group-hover:shadow-lg transition-all duration-300">
        <CardContent className="p-6 flex items-start space-x-4">
          <motion.div
            className="flex-shrink-0"
            whileHover={reducedMotion ? {} : { scale: 1.05, rotate: 5 }}
            whileTap={reducedMotion ? {} : { scale: 0.95, rotate: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${benefit.gradient} flex items-center justify-center`}>
              <benefit.icon className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
          </motion.div>
          <div className="flex-grow">
            <h3 
              id={`benefit-${index}-title`}
              className="text-l font-normal mb-2 text-gray-900 dark:text-white"
            >
              {benefit.title}
            </h3>
            <p className="text-m text-gray-600 dark:text-gray-300">
              {benefit.description}
            </p>
          </div>
        </CardContent>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r"
          style={{
            backgroundImage: `linear-gradient(to right, ${benefit.gradient.split(' ')[1]}, ${benefit.gradient.split(' ')[3]})`
          }}
          initial={{ scaleX: 0 }}
          whileHover={reducedMotion ? {} : { scaleX: 1 }}
          transition={{ duration: 0.3 }}
          aria-hidden="true"
        />
      </Card>
    </motion.div>
  )
})

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

function BenefitsSectionContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    try {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      const handleMotionPreference = (event: MediaQueryListEvent | MediaQueryList) => {
        setReducedMotion(event.matches)
      }

      // Initial check
      handleMotionPreference(mediaQuery)

      // Add listener for changes
      mediaQuery.addEventListener('change', handleMotionPreference)

      return () => {
        mediaQuery.removeEventListener('change', handleMotionPreference)
      }
    } catch (error) {
      console.error('Error handling motion preference:', error)
    }
  }, [])

  return (
    <section 
      ref={ref} 
      className="py-20 sm:py-32 relative z-10"
      aria-labelledby="benefits-title"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0 : 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            id="benefits-title"
            className="text-2xl sm:text-4xl font-normal mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
          >
            AIチャットボット導入のメリット
          </h2>
          <p className="text-l sm:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ビジネスと顧客体験を次のレベルへ
          </p>
        </motion.div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto z-10"
          role="list"
          aria-label="AIチャットボット導入のメリット一覧"
        >
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.title}
              benefit={benefit}
              index={index}
              isInView={isInView}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function BenefitsSection() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.reload()
      }}
    >
      <BenefitsSectionContent />
    </ErrorBoundary>
  )
}
