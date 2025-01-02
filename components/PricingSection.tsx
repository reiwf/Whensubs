'use client'

import { motion, useInView } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const plans = [
    {
      name: "スタータープラン",
      price: "¥29,800",
      description: "小規模施設向けの基本プラン",
      features: [
        "1つのプラットフォームに対応",
        "基本的な会話機能",
        "24時間自動応答",
        "月間1,000件までの問い合わせ対応",
        "基本的なレポート機能"
      ]
    },
    {
      name: "スタンダードプラン",
      price: "¥59,800",
      description: "中規模施設向けの充実プラン",
      features: [
        "3つのプラットフォームに対応",
        "高度な自然言語処理",
        "カスタマイズ可能なチャットフロー",
        "月間5,000件までの問い合わせ対応",
        "詳細な分析レポート"
      ]
    },
    {
      name: "プレミアムプラン",
      price: "¥119,800",
      description: "大規模施設向けの高機能プラン",
      features: [
        "全プラットフォームに対応",
        "AI自己学習機能",
        "多言語対応（10言語以上）",
        "無制限の問い合わせ対応",
        "高度なデータ分析と予測機能"
      ]
    }
  ]

  return (
    <section ref={ref} className="py-20 sm:py-32 bg-gray-50/80 dark:bg-gray-900/80 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            料金プラン
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
            あなたのニーズに合わせたプラン
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            規模や要件に応じて最適なプランをお選びいただけます。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{plan.name}</h3>
                  <p className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">{plan.price}<span className="text-sm font-normal text-gray-600 dark:text-gray-400">/月</span></p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    選択する
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

