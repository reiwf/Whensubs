'use client'

import { motion, useInView} from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import { useRef, memo, useEffect, useState } from 'react'
import { Card, CardContent } from '../components/ui/card'
import { ErrorBoundary } from 'react-error-boundary'
import { Badge } from './ui/badge'

interface Platform {
  name: string
  icon: string
  description: string
  features: string[]
  gradient: string
}

const platforms: Platform[] = [
  {
    name: 'Web',
    icon: '/weblogo.png',
    description: 'ブラウザからアクセス可能',
    features: ['リアルタイムレスポンス', 'カスタマイズ可能UI', 'セキュア通信'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'WhatsApp',
    icon: '/whatsapplogo.png',
    description: 'WhatsAppを通じて24時間対応',
    features: ['既読確認機能', 'メディア共有対応', '自動応答'],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    name: 'LINE',
    icon: '/linelogo.png',
    description: 'LINEアプリ内でシームレスな対話',
    features: ['プッシュ通知', 'リッチメニュー', 'クイックリプライ'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Telegram',
    icon: '/Telegramlogo.png',
    description: 'Telegramを通じて即時対応',
    features: ['ボット機能', 'グループチャット対応', 'ファイル共有'],
    gradient: 'from-blue-400 to-cyan-400'
  },
]

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
 

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: reducedMotion ? 0 : 0.5,
        delay: reducedMotion ? 0 : index * 0.1
      }}
      className="relative group"
      role="article"
      aria-labelledby={`platform-${index}-name`}
    >
      <Card className="relative h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <div className="h-full flex flex-col">
            <div className="w-10 h-10 rounded-lg  flex items-center justify-center mb-4">
              <Image 
                src={platform.icon}
                alt={`${platform.name} logo`}
                width={100}
                height={100}
                className="w-10 h-10 shadow-md rounded-full"
              />
            </div>

            <h3 
              id={`platform-${index}-name`}
              className="text-xl font-normal mb-3 text-stone-700"
            >
              {platform.name}
            </h3>
            <p className="text-base text-stone-600 mb-6">
              {platform.description}
            </p>

            <div className="space-y-2 mb-4 flex-grow">
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
                    className="w-4 h-4 text-amber-600 flex-shrink-0" 
                    aria-hidden="true"
                  />
                  <span className="text-sm text-stone-600">
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
      className="relative px-4 sm:px-12 py-12 sm:py-24 z-10"
      aria-labelledby="platform-section-title"
    >
      <div className="container mx-auto px-4 sm:px-12 relative z-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0 : 0.8 }}
          className="mb-8"
        >
          <Badge variant="gray" className="mb-4">マルチプラットフォーム対応</Badge>
          <h2 
            id="platform-section-title"
            className="text-2xl sm:text-4xl font-normal text-stone-700 mt-3 mb-3"
          >
             複数のプラットフォームに導入可能
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
           お客様の利便性を考え
          </p>
        </motion.div>

        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 z-10"
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
