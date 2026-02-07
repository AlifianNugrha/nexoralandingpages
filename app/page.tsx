'use client'

import Navbar from '@/components/landing/navbar'
import Hero from '@/components/landing/hero'
import PainSection from '@/components/landing/pain-section'
import FeaturesSection from '@/components/landing/features-section'
import DemoSection from '@/components/landing/demo-section'
import SocialProof from '@/components/landing/social-proof'
import PricingSection from '@/components/landing/pricing-section'
import FAQSection from '@/components/landing/faq-section'
import FooterCTA from '@/components/landing/footer-cta'
import { LanguageProvider } from '@/components/landing/language-context'

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background text-foreground relative">
        <Navbar /> {/* Tetap satu Navbar saja di sini */}

        <Hero />

        {/* PainSection akan menimpa Navbar secara otomatis karena z-index */}
        <PainSection />

        {/* Section setelahnya otomatis membuat Navbar muncul lagi */}
        <div className="relative z-0">
          <FeaturesSection />
          <DemoSection />
          <SocialProof />
          <PricingSection />
          <FAQSection />
          <FooterCTA />
        </div>
      </main>
    </LanguageProvider>
  )
}