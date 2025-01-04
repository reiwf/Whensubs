'use client'

import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import { scrollToSection } from '../utils/scrollToSection'

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay }
  })
}

interface FooterLink {
  href: string
  label: string
  isSection?: boolean
}

const footerLinks: FooterLink[] = [
  { href: '/usecase/minpaku', label: 'ユースケース' },
  { href: '#features', label: '特徴', isSection: true },
  { href: '#benefits', label: 'メリット', isSection: true },
  { href: '#platforms', label: 'プラットフォーム', isSection: true },
  { href: '#contact', label: 'お問い合わせ', isSection: true }
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer 
      className="bg-gray-100 dark:bg-gray-900 py-12"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            custom={0}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-blue-400">
              Whensubs
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              AIの力を解放
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            custom={0.1}
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              リンク
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {footerLinks.map(({ href, label, isSection }) => (
                  <li key={href}>
                    <Link 
                      href={href}
                      onClick={isSection ? scrollToSection : undefined}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            custom={0.2}
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              お問い合わせ
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              AI チャットボットで
            </p>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          custom={0.3}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} Whensubs. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
