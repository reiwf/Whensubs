'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { scrollToSection } from '@/utils/scrollToSection'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-normal text-blue-600 dark:text-blue-400">
            Whensubs
          </Link>
          <div className="hidden md:flex space-x-4 items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">ユースケース</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/usecase/minpaku">民泊</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="#features" onClick={scrollToSection}>
              <Button variant="ghost">特徴</Button>
            </Link>
            <Link href="#benefits" onClick={scrollToSection}>
              <Button variant="ghost">メリット</Button>
            </Link>
            <Link href="#platforms" onClick={scrollToSection}>
              <Button variant="ghost">プラットフォーム</Button>
            </Link>
            <Link href="#contact" onClick={scrollToSection}>
              <Button variant="ghost">お問い合わせ</Button>
            </Link>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white dark:bg-gray-900 py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full justify-start">ユースケース</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/usecase/minpaku">民泊</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="#features" onClick={scrollToSection}>
              <Button variant="ghost" className="w-full justify-start">特徴</Button>
            </Link>
            <Link href="#benefits" onClick={scrollToSection}>
              <Button variant="ghost" className="w-full justify-start">メリット</Button>
            </Link>
            <Link href="#platforms" onClick={scrollToSection}>
              <Button variant="ghost" className="w-full justify-start">プラットフォーム</Button>
            </Link>
            <Link href="#contact" onClick={scrollToSection}>
              <Button variant="ghost" className="w-full justify-start">お問い合わせ</Button>
            </Link>            
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

