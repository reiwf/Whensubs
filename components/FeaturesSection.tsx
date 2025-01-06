'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
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
import { Badge } from "@/components/ui/badge"

interface Feature {
  title: string
  description: string
  icon: React.ElementType
}

export default function FeaturesSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })


  const features: Feature[] = [
    {
      title: "高度な会話理解",
      description: "自然言語処理(NLP)技術を活用し、お客様の質問や要望を正確に理解。",
      icon: Brain,
    },
    {
      title: "自己学習機能",
      description: "対話の履歴データをもとに、自動的に知識をアップデート。新しい質問やトレンドに即応。",
      icon: RefreshCcw,
    },
    {
      title: "簡単設定・運用",
      description: "コード不要のGUIツールで、フロー作成やFAQ設定が直感的に行え。",
      icon: Settings,
    },
    {
      title: "柔軟なカスタマイズ性",
      description: "企業ブランディングに合わせたデザイン変更から、音声会話機能、外部システム連携まで可能。",
      icon: Palette,
    },
    {
      title: "多言語対応",
      description: "日本語だけでなく、英語やその他主要言語でのチャット応答を行え。",
      icon: Languages,
    },
    {
      title: "データ分析とレポート",
      description: "ダッシュボードでチャット利用状況や応対履歴を可視化。問い合わせの傾向分析が可能。",
      icon: BarChart2,
    }
  ]

  return (
    <section 
      ref={ref} 
      id="features" 
      className="relative py-12 px-12 overflow-hidden z-10"
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto px-4 relative z-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Badge variant="gray" className="mb-4">AIエージェントの特徴</Badge>
          <h2 
            id="features-heading"
            className="text-3xl font-normal text-stone-700 mt-3 mb-3"
          >
            従業員扱いで依頼したい業務を
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            いつでもオンラインで対応
          </p>
        </motion.div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
              role="listitem"
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">                 
                    <feature.icon className="w-8 h-8 text-amber-600 mb-4" aria-hidden="true" />                  
                  <h3 className="text-xl font-normal text-stone-700 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-stone-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}