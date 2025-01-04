'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { scrollToSection } from '../utils/scrollToSection'
import Image from 'next/image'

interface NavItem {
  href: string
  label: string
  isSection?: boolean
}

const MobileMenu = ({ items }: { items: NavItem[] }) => (
  <motion.div
    className="md:hidden bg-white dark:bg-gray-900 py-4"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    role="navigation"
    aria-label="Mobile navigation"
  >
    <div className="container mx-auto px-4 flex flex-col space-y-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            className="w-full justify-start"
            aria-label="Open use cases menu"
          >
            ユースケース
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/usecase/minpaku" className="w-full">民泊</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {items.map((item) => (
        <Link 
          key={item.href} 
          href={item.href} 
          onClick={(e) => item.isSection ? scrollToSection(e, 80) : undefined}
          className="w-full"
        >
          <Button 
            variant="ghost" 
            className="w-full justify-start"
            aria-label={`Navigate to ${item.label}`}
          >
            {item.label}
          </Button>
        </Link>
      ))}
    </div>
  </motion.div>
)

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  const navItems = useMemo<NavItem[]>(() => [
    { href: '#features', label: '特徴', isSection: true },
    { href: '#benefits', label: 'メリット', isSection: true },
    { href: '#platforms', label: 'プラットフォーム', isSection: true },
    { href: '/usecase/minpaku', label: 'デモを試す' }
  ], [])

  useEffect(() => {
    const handleScroll = () => {
      try {
        setIsScrolled(window.scrollY > 10)
      } catch (error) {
        console.error('Error handling scroll:', error)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
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
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" aria-label="Go to homepage">
              <Image 
                src="/favicon.ico" 
                alt="Whensubs Logo" 
                width={45} 
                height={45} 
                className="mr-2" 
                priority
              />
            </Link>
            <Link 
              href="/" 
              className="text-2xl font-normal text-gray-700 dark:text-blue-400"
              aria-label="Whensubs home"
            >
              Whensubs
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost"
                  aria-label="Open use cases menu"
                >
                  ユースケース
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/usecase/minpaku" className="w-full">民泊</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                onClick={(e) => item.isSection ? scrollToSection(e, 80) : undefined}
                className="w-full"
              >
                <Button 
                  variant="ghost"
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && <MobileMenu items={navItems} />}
      </AnimatePresence>
    </motion.nav>
  )
}
