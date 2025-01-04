'use client'

import { motion, useInView, Variants } from 'framer-motion'
import { Globe, MessageSquare, Smartphone, Send, CheckCircle2, LucideIcon } from 'lucide-react'
import { useRef, memo, useEffect, useState } from 'react'
import { Card, CardContent } from '../components/ui/card'
import { ErrorBoundary } from 'react-error-boundary'

interface Platform {
  name: string
  icon: LucideIcon
  description: string
  features: string[]
  gradient: string
}

const platforms: Platform[] = [
  {
    name: 'Web',
    icon: Globe,
    description: 'ブラウザからアクセス可能なウェブチャット',
    features: ['リアルタイムレスポンス', 'カスタマイズ可能UI', 'セキュア通信'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'WhatsApp',
    icon: MessageSquare,
    description: 'WhatsAppを通じて24時間対応',
    features: ['既読確認機能', 'メディア共有対応', '自動応答'],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    name: 'LINE',
    icon: Smartphone,
    description: 'LINEアプリ内でシームレスな対話',
    features: ['プッシュ通知', 'リッチメニュー', 'クイックリプライ'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Telegram',
    icon: Send,
    description: 'Telegramを通じて即時対応',
    features: ['ボット機能', 'グループチャット対応', 'ファイル共有'],
    gradient: 'from-blue-400 to-cyan-400'
  },
]

// Memoized platform card component for better performance
const PlatformCard = memo(function PlatformCard({ 
  platform, 
  isInView, 
  index,
  reducedMotion
}: { 
  platform: Platform
  isInView: boolean
  index: number
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
      aria-labelledby={`platform-${index}-name`}
    >
      <div 
        className="absolute -inset-0.5 bg-gradient-to-r opacity-75 group-hover:opacity-100 transition duration-300 blur-xl group-hover:blur-2xl rounded-2xl"
        style={{
          backgroundImage: `linear-gradient(to right, ${platform.gradient.split(' ')[1]}, ${platform.gradient.split(' ')[3]})`
        }}
        aria-hidden="true"
      />
      <Card className="relative h-full bg-white dark:bg-gray-800 border-0 shadow-lg group-hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden">
        <CardContent className="p-6 sm:p-8">
          <div className="relative z-10 h-full flex flex-col">
            <motion.div
              className="mb-6 relative"
              whileHover={reducedMotion ? {} : { scale: 1.1, rotate: 5 }}
              whileTap={reducedMotion ? {} : { scale: 0.95, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${platform.gradient} p-0.5`}>
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center">
                  <platform.icon className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" />
                </div>
              </div>
            </motion.div>

            <h3 
              id={`platform-${index}-name`}
              className="text-l font-normal mb-3 text-gray-900 dark:text-white"
            >
              {platform.name}
            </h3>
            <p className="text-m text-gray-600 dark:text-gray-300 text-sm mb-6">
              {platform.description}
            </p>

            <div className="space-y-3 mb-6 flex-grow">
              {platform.features.map((feature, featureIndex) => (
                <motion.div
                  key={featureIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    delay: reducedMotion ? 0 : 0.3 + (featureIndex * 0.1),
                    duration: reducedMotion ? 0 : 0.3
                  }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 
                    className="w-5 h-5 text-green-500 flex-shrink-0" 
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
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

function MultiPlatformSectionContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)

    const handleMotionPreference = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handleMotionPreference)
    return () => mediaQuery.removeEventListener('change', handleMotionPreference)
  }, [])

  return (
    <section 
      ref={ref} 
      className="py-20 sm:py-32 relative z-10"
      aria-labelledby="platform-section-title"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0 : 0.8 }}
          className="text-center mb-16"
        >         
          <h2 
            id="platform-section-title"
            className="text-2xl sm:text-4xl font-normal mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            マルチプラットフォーム対応
          </h2>
          <p className="text-l sm:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            お客様の利便性を考え
          </p>
        </motion.div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto z-10"
          role="list"
          aria-label="利用可能なプラットフォーム"
        >
          {platforms.map((platform, index) => (
            <PlatformCard
              key={platform.name}
              platform={platform}
              isInView={isInView}
              index={index}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function MultiPlatformSection() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.reload()
      }}
    >
      <MultiPlatformSectionContent />
    </ErrorBoundary>
  )
}
