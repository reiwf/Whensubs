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
    <section ref={ref} className="relative px-12 py-4 bg-white border-container">
      <div className="container mx-auto px-4 text-center pt-36 pb-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl sm:text-4xl font-normal mb-6 text-stone-700">
            AIチャットボットを導入しませんか？</h2>
          <p className="text-m sm:text-2xl mb-8 max-w-2xl mx-auto text-gray-600">
            お客様満足度の向上と業務効率化を実現
          </p>
          
          <Link href="/usecase/minpaku">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button 
              size="lg" 
              variant="gray" 
              className="rounded-xl shadow-md px-8 w-full sm:w-auto ">
                
                <span className="mr-2">デモを試す</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

