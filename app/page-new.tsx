'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import BenefitsSection from '../components/BenefitsSection'
import MultiPlatformSection from '../components/MultiPlatformSection'
import CTASection from '../components/CTASection'
import BackgroundOrbs from '../components/BackgroundOrbs'

const sections = [
  { id: 'features', Component: FeaturesSection },
  { id: 'benefits', Component: BenefitsSection },
  { id: 'platforms', Component: MultiPlatformSection },
  { id: 'contact', Component: CTASection }
] as const

export default function WhensubsNew() {
  return (
    <div className=" bg-[#F4F4F4] bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-800/50 relative overflow-hidden font-zen-antique-soft">
      <BackgroundOrbs />
      <Navbar />
      <main className="container mx-auto px-4 py-32">
        <HeroSection />
        {sections.map(({ id, Component }) => (
          <section key={id} id={id} className="mb-24">
            <Component />
          </section>
        ))}
      </main>
      <Footer />
    </div>
  )
}
