'use client'

import { motion, useInView } from 'framer-motion'
import { Globe, MessageSquare, Smartphone, Send, CheckCircle2 } from 'lucide-react'
import { useRef } from 'react'
import { Card, CardContent } from "@/components/ui/card"


export default function MultiPlatformSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const platforms = [
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

  return (
    <section ref={ref} className="py-20 sm:py-32 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >         
          <h2 className="text-2xl sm:text-4xl font-normal mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            マルチプラットフォーム対応
          </h2>
          <p className="text-l sm:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
           お客様の利便性を考え
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto z-10">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-75 group-hover:opacity-100 transition duration-500 blur-xl group-hover:blur-2xl rounded-2xl"
                style={{
                  backgroundImage: `linear-gradient(to right, ${platform.gradient.split(' ')[1]}, ${platform.gradient.split(' ')[3]})`
                }}
              />
              <Card className="relative h-full bg-white dark:bg-gray-800 border-0 shadow-lg group-hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden">
                <CardContent className="p-6 sm:p-8">
                  <div className="relative z-10 h-full flex flex-col">
                    <motion.div
                      className="mb-6 relative"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${platform.gradient} p-0.5`}>
                        <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center">
                          <platform.icon className="w-8 h-8 text-gray-800 dark:text-white" />
                        </div>
                      </div>
                    </motion.div>

                    <h3 className="text-l font-normal mb-3 text-gray-900 dark:text-white">{platform.name}</h3>
                    <p className="text-m text-gray-600 dark:text-gray-300 text-sm mb-6">{platform.description}</p>

                    <div className="space-y-3 mb-6 flex-grow">
                      {platform.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.3 + (featureIndex * 0.1) }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-auto"
                    >                      
                    </motion.div>
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

