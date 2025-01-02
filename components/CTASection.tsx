'use client'

import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import { Button } from "@/components/ui/button"

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 sm:py-32 text-gray-800 relative z-10">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl sm:text-4xl font-normal mb-6 text-gray-800">AIチャットボットを導入しませんか？</h2>
          <p className="text-m sm:text-2xl mb-8 max-w-2xl mx-auto text-gray-600">
            お客様満足度の向上と業務効率化を実現
          </p>
          
          <Link href="/demo">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button size="lg" className="px-8 py-4 text-lg rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300">
                <span className="mr-2">問い合わせ</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

