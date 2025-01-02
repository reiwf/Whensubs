'use client'

import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'
import { useRef } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image';

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const testimonials = [
    {
      name: "田中 美咲",
      role: "ホテルマネージャー",
      content: "Whensubs AIコンシェルジュの導入により、スタッフの負担が大幅に軽減され、お客様の満足度も向上しました。24時間対応できるのが本当に助かっています。",
      avatar: "/avatar1.png"
    },
    {
      name: "佐藤 健太",
      role: "旅館オーナー",
      content: "多言語対応のおかげで、海外からのお客様とのコミュニケーションが格段に改善しました。予約から観光案内まで、スムーズにサポートできるようになりました。",
      avatar: "/avatar2.png"
    },
    {
      name: "鈴木 愛",
      role: "ゲストハウス経営者",
      content: "コスト効率が大幅に改善され、小規模な施設でも高品質なサービスを提供できるようになりました。お客様からの評価も上がり、リピーター率が向上しています。",
      avatar: "/avatar3.png"
    }
  ]

  return (
    <section ref={ref} className="py-20 sm:py-32 bg-white/80 dark:bg-gray-800/80 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
            お客様の声
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-600">
            導入企業様からの評価
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Whensubs AIコンシェルジュを導入いただいたお客様からの声をご紹介します。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-gray-50 dark:bg-gray-900 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic">&ldquo;{testimonial.content}&rdquo;</p>
                  <div className="mt-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

