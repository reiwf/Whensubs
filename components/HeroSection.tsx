'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { memo } from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
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
        variant="gray" 
        className="rounded-xl shadow-md px-8 w-full sm:w-auto "
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

  return (
    <section
      className="relative px-12 py-24 bg-white mb-12 border-container hero-section"
      role="banner"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center h-full">
        <motion.div
          className="p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
      <div className="mb-4">
        <Badge variant="gray">Whensubs</Badge>
        <h1
          id="hero-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-700 dark:text-gray-100 leading-tight tracking-tight mt-3"
        >
          AIエージェントの力を解放
        </h1>
      </div>
      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
      反復作業から解放され、本当に重要な仕事に集中
      </p>
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
        いつでもどこでも
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <DemoButton />
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
