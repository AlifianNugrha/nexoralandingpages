'use client'

import { Button } from '@/components/ui/button'
import { Mail, Phone, Linkedin } from 'lucide-react'
import { useLanguage } from './language-context'

export default function FooterCTA() {
  const { lang } = useLanguage()

  const t = {
    ID: {
      headline: "Siap Mengotomatisasi Bisnis Anda?",
      subheadline: "Bergabunglah dengan ratusan bisnis yang sudah meningkatkan conversion rate mereka dengan AI Chatbot kami",
      startTrial: "Mulai Free Trial",
      contactSales: "Hubungi Sales",
      tagline: "Solusi chatbot AI terdepan untuk bisnis Indonesia",
      product: "Produk",
      company: "Perusahaan",
      contact: "Hubungi Kami",
      features: "Fitur",
      pricing: "Harga",
      docs: "Dokumentasi",
      api: "API",
      about: "Tentang Kami",
      blog: "Blog",
      careers: "Karir",
      contactLink: "Kontak",
      copyright: "© 2026 NanoBot by NanoArtif. Semua hak dilindungi.",
      terms: "Terms of Service",
      privacy: "Privacy Policy"
    },
    EN: {
      headline: "Ready to Automate Your Business?",
      subheadline: "Join hundreds of businesses that have increased their conversion rates with our AI Chatbot",
      startTrial: "Start Free Trial",
      contactSales: "Contact Sales",
      tagline: "Leading AI chatbot solution for Indonesian businesses",
      product: "Product",
      company: "Company",
      contact: "Contact Us",
      features: "Features",
      pricing: "Pricing",
      docs: "Documentation",
      api: "API",
      about: "About Us",
      blog: "Blog",
      careers: "Careers",
      contactLink: "Contact",
      copyright: "© 2026 NanoBot by NanoArtif. All rights reserved.",
      terms: "Terms of Service",
      privacy: "Privacy Policy"
    }
  }

  const content = t[lang]

  return (
    <footer className="bg-foreground text-primary-foreground py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main CTA */}
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-balance">
            {content.headline}
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            {content.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {content.startTrial}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-white hover:bg-white/20 bg-transparent"
            >
              {content.contactSales}
            </Button>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="space-y-4">

              <p className="text-sm opacity-75">
                {content.tagline}
              </p>
            </div>

            {/* Product */}
            <div className="space-y-4">
              <h4 className="font-semibold">{content.product}</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>
                  <a href="#features" className="hover:opacity-100 transition">
                    {content.features}
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:opacity-100 transition">
                    {content.pricing}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    {content.docs}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    {content.api}
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="font-semibold">{content.company}</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    {content.about}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    {content.blog}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    {content.careers}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    {content.contactLink}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold">{content.contact}</h4>
              <div className="space-y-3 text-sm opacity-75">
                <a
                  href="mailto:support@example.com"
                  className="flex items-center gap-2 hover:opacity-100 transition"
                >
                  <Mail className="w-4 h-4" />
                  support@example.com
                </a>
                <a
                  href="tel:+62123456789"
                  className="flex items-center gap-2 hover:opacity-100 transition"
                >
                  <Phone className="w-4 h-4" />
                  +62 (123) 456-789
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm opacity-75">
            <p>{content.copyright}</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:opacity-100 transition">
                {content.terms}
              </a>
              <a href="#" className="hover:opacity-100 transition">
                {content.privacy}
              </a>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:opacity-100 transition">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
