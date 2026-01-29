import Navbar from '@/components/landing/navbar'
import Hero from '@/components/landing/hero'
import PainSection from '@/components/landing/pain-section'
import FeaturesSection from '@/components/landing/features-section'
import DemoSection from '@/components/landing/demo-section'
import SocialProof from '@/components/landing/social-proof'
import PricingSection from '@/components/landing/pricing-section'
import FAQSection from '@/components/landing/faq-section'
import FooterCTA from '@/components/landing/footer-cta'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      {/* Menambahkan wrapper div atau memastikan Hero 
        punya padding-top yang cukup untuk mengimbangi Navbar fixed 
      */}
      <div className="relative">
        <Hero />
      </div>
      <PainSection />
      <FeaturesSection />
      <DemoSection />
      <SocialProof />
      <PricingSection />
      <FAQSection />
      <FooterCTA />
    </main>
  )
}