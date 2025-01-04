'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
// Icons
import { 
  Brain, 
  RefreshCcw, 
  Settings, 
  Palette, 
  Languages, 
  BarChart2 
} from 'lucide-react'
// Components
import { Card, CardContent } from "@/components/ui/card"

interface Feature {
  title: string
  description: string
  icon: React.ElementType
  gradient: string
}

export default function FeaturesSection() {
  const ref = useRef<HTMLElement>(null)
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

  const features: Feature[] = [
    {
      title: "高度な会話理解",
      description: "自然言語処理(NLP)技術を活用し、お客様の質問や要望を正確に理解します。",
      icon: Brain,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "自己学習機能",
      description: "対話の履歴データをもとに、自動的に知識をアップデート。新しい質問やトレンドに即応できます。",
      icon: RefreshCcw,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "簡単設定・運用",
      description: "コード不要のGUIツールで、フロー作成やFAQ設定が直感的に行えます。",
      icon: Settings,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "柔軟なカスタマイズ性",
      description: "企業ブランディングに合わせたデザイン変更から、音声会話機能、外部システム連携まで可能です。",
      icon: Palette,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "多言語対応",
      description: "日本語だけでなく、英語やその他主要言語でのチャット応答を行えます。",
      icon: Languages,
      gradient: "from-red-500 to-rose-500"
    },
    {
      title: "データ分析とレポート",
      description: "ダッシュボードでチャット利用状況や応対履歴を可視化。問い合わせの傾向分析が可能です。",
      icon: BarChart2,
      gradient: "from-indigo-500 to-violet-500"
    }
  ]

  const getGradientColors = (gradient: string): [string, string] => {
    const [from, to] = gradient.split(' ').filter(part => part.includes('-500'))
    return [from, to]
  }

  return (
    <section 
      ref={ref} 
      id="features" 
      className="relative py-20 sm:py-32 overflow-hidden z-10"
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto px-4 relative z-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >         
          <h2 
            id="features-heading"
            className="text-2xl sm:text-4xl font-normal mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            AIチャットボットの特徴
          </h2>
          <p className="text-l sm:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            いつでもオンラインで対応
          </p>
        </motion.div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto z-10"
          role="list"
        >
          {features.map((feature, index) => {
            const [fromColor, toColor] = getGradientColors(feature.gradient)
            const gradientStyle = `linear-gradient(to right, ${fromColor}, ${toColor})`

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
                role="listitem"
              >
            
                <Card className="relative h-full bg-white dark:bg-gray-800 border-0 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <motion.div
                      className="mb-4 flex-shrink-0"
                      whileHover={reducedMotion ? {} : { scale: 1.0, rotate: 5 }}
                      whileTap={reducedMotion ? {} : { scale: 0.95, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div 
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center`}
                        aria-hidden="true"
                      >
                        <feature.icon className="w-6 h-6 text-white" aria-hidden="true"  />
                      </div>
                    </motion.div>
                    <h3 className="text-l font-normal mb-2 text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-m text-gray-600 dark:text-gray-300 mb-4">
                      {feature.description}
                    </p>
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r"
                      style={{ backgroundImage: gradientStyle }}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      aria-hidden="true"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
