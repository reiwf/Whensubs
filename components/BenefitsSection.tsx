'use client'

import { motion, useInView } from 'framer-motion'
import { Zap, DollarSign, Clock, Shield } from 'lucide-react'
import { useRef } from 'react'
import { Card, CardContent } from "@/components/ui/card"


export default function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const benefits = [
    {
      title: "顧客体験の向上",
      description: "スピーディかつ的確な回答により、お客様のストレスを軽減。問い合わせから解決までの時間を大幅に短縮し、満足度アップに貢献します。",
      icon: Zap,
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      title: "コスト効率の高い運用",
      description: "オペレーターの負担を軽減し、人件費や教育コストを削減。スタッフは複雑な課題対応や戦略的タスクに集中することができます。",
      icon: DollarSign,
      gradient: "from-green-400 to-emerald-500"
    },
    {
      title: "24時間体制のサポート",
      description: "AIチャットボットなら時間や休日を問わず稼働。国内・海外の顧客にも同じ品質のサポートを提供できます。",
      icon: Clock,
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      title: "一貫したサービス品質",
      description: "ヒューマンエラーのリスクを減らし、常に安定した対応が可能。どの部署・店舗でも同水準のサポートを実現します。",
      icon: Shield,
      gradient: "from-indigo-400 to-purple-500"
    },
  ]

  return (
    <section ref={ref} className="py-20 sm:py-32 relative z-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          
          <h2 className="text-2xl sm:text-4xl font-normal mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            AIチャットボット導入のメリット
          </h2>
          <p className="text-l sm:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ビジネスと顧客体験を次のレベルへ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto z-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                style={{
                  backgroundImage: `linear-gradient(to right, ${benefit.gradient.split(' ')[1]}, ${benefit.gradient.split(' ')[3]})`
                }}
              />
              <Card className="relative h-full bg-white dark:bg-gray-800 border-0 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 flex items-start space-x-4">
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${benefit.gradient} flex items-center justify-center`}>
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                  <div className="flex-grow">
                    <h3 className="text-l font-normal mb-2 text-gray-900 dark:text-white">{benefit.title}</h3>
                    <p className="text-m text-gray-600 dark:text-gray-300">{benefit.description}</p>
                  </div>
                </CardContent>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${benefit.gradient.split(' ')[1]}, ${benefit.gradient.split(' ')[3]})`
                  }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

     </div>
    </section>
  )
}

