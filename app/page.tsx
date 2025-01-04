'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import BenefitsSection from '@/components/BenefitsSection'
import MultiPlatformSection from '@/components/MultiPlatformSection'
import CTASection from '@/components/CTASection'
import BackgroundOrbs from '@/components/BackgroundOrbs'

export default function Whensubs() {
  return (
    <div className="min-h-screen bg-[#F4F4F4] bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-800/50 relative overflow-hidden font-zen-antique-soft">
      <BackgroundOrbs />
      <Navbar />
      <HeroSection />
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="benefits">
        <BenefitsSection />
      </div>
      <div id="platforms">
        <MultiPlatformSection />
      </div>
      <div id="contact">
        <CTASection />
      </div>
      <Footer />
    </div>
  )
}


