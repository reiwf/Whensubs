'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { scrollToSection } from '@/utils/scrollToSection'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Whensubs</h3>
            <p className="text-gray-600 dark:text-gray-400">
              AIの力を解放
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">リンク</h3>
            <ul className="space-y-2">
              <li><Link href="/usecase/minpaku" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">ユースケース</Link></li>
              <li><Link href="#features" onClick={scrollToSection} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">特徴</Link></li>
              <li><Link href="#benefits" onClick={scrollToSection} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">メリット</Link></li>
              <li><Link href="#platforms" onClick={scrollToSection} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">プラットフォーム</Link></li>
              <li><Link href="#contact" onClick={scrollToSection} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">お問い合わせ</Link></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">お問い合わせ</h3>
            <p className="text-gray-600 dark:text-gray-400">
              〒100-0001<br />
              東京都千代田区千代田1-1<br />
              電話: 03-1234-5678<br />
              メール: info@whensubs.jp
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Whensubs. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

