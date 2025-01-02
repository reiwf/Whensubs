'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import { Button } from "@/components/ui/button"


export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center py-10 sm:py-20 overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-1">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ y, opacity }}
        >
          
          <h1 className="text-3xl sm:text-6xl font-normal mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-500">
            WhensubsでAIの力を解放          
          </h1>
          <p className="text-xl sm:text-4xl text-gray-600 dark:text-gray-300 mb-6">
            AI チャットの可能性を探る
          </p>
          <p className="text-l sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            いつでもどこでも
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/demo">
              <Button size="lg" className="px-8 py-4 text-lg rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300">
                問い合わせ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-16 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="relative mx-auto max-w-4xl">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 1, -1, 0],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

