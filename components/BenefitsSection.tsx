'use client'

import { motion, useInView } from 'framer-motion'
import { Zap, DollarSign, Clock, Shield } from 'lucide-react'
import { useRef, memo } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Benefit {
  title: string
  description: string
  icon: React.ElementType
}

const benefits: Benefit[] = [
  {
    title: "顧客体験の向上",
    description: "スピーディかつ的確な回答により、お客様のストレスを軽減。問い合わせから解決までの時間を大幅に短縮し、満足度アップに貢献します。",
    icon: Zap
  },
  {
    title: "コスト効率の高い運用",
    description: "オペレーターの負担を軽減し、人件費や教育コストを削減。スタッフは複雑な課題対応や戦略的タスクに集中することができます。",
    icon: DollarSign
  },
  {
    title: "24時間体制のサポート",
    description: "AIチャットボットなら時間や休日を問わず稼働。国内・海外の顧客にも同じ品質のサポートを提供できます。",
    icon: Clock
  },
  {
    title: "一貫したサービス品質",
    description: "ヒューマンエラーのリスクを減らし、常に安定した対応が可能。どの部署・店舗でも同水準のサポートを実現します。",
    icon: Shield
  }
]

const BenefitCard = memo(function BenefitCard({ 
  benefit, 
  index, 
  isInView
}: { 
  benefit: Benefit
  index: number
  isInView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="relative"
      role="article"
      aria-labelledby={`benefit-${index}-title`}
    >
      <Card className="hover:shadow-lg transition-shadow h-full">
        <CardContent className="p-6 ">
          <div className="flex flex-col ">
            <div className="mb-4">
              <benefit.icon className="w-8 h-8 text-amber-600" />
            </div>
            <h3 
              id={`benefit-${index}-title`}
              className="text-xl font-normal text-stone-700 mb-2"
            >
              {benefit.title}
            </h3>
            <p className="text-stone-600">
              {benefit.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
})


function BenefitsSectionContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section 
      ref={ref}
      className="relative px-4 sm:px-12 py-12 sm:py-24 border-container bg-white"
      aria-labelledby="benefits-title"
    >
      <div className="container mx-auto px-4 sm:px-12 ">
        <Badge variant="gray" className="mb-4">導入のメリット</Badge>
        <h2 
          id="benefits-title"
          className="text-2xl sm:text-4xl font-normal text-stone-700 mt-3 mb-3"
        >
          AIエージェント導入でビジネスを効率化
        </h2>
        <p className="text-lg sm:text-xl text-stone-600 leading-relaxed mb-8">
          顧客体験と業務効率を同時に向上
        </p>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 "
          role="list"
          aria-label="AIチャットボット導入のメリット一覧"
        >
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.title}
              benefit={benefit}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSectionContent;
