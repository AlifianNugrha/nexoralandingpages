import { Button } from '@/components/ui/button'
import { Mail, Phone, Linkedin } from 'lucide-react'

export default function FooterCTA() {
  return (
    <footer className="bg-foreground text-primary-foreground py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main CTA */}
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-balance">
            Siap Mengotomatisasi Bisnis Anda?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Bergabunglah dengan ratusan bisnis yang sudah meningkatkan conversion
            rate mereka dengan AI Chatbot kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Mulai Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-foreground hover:bg-foreground/20 bg-transparent"
            >
              Hubungi Sales
            </Button>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="space-y-4">

              <p className="text-sm opacity-75">
                Solusi chatbot AI terdepan untuk bisnis Indonesia
              </p>
            </div>

            {/* Product */}
            <div className="space-y-4">
              <h4 className="font-semibold">Produk</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>
                  <a href="#features" className="hover:opacity-100 transition">
                    Fitur
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:opacity-100 transition">
                    Harga
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    Dokumentasi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    API
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="font-semibold">Perusahaan</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    Karir
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    Kontak
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold">Hubungi Kami</h4>
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
            <p>&copy; 2024 ChatBot AI. Semua hak dilindungi.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:opacity-100 transition">
                Terms of Service
              </a>
              <a href="#" className="hover:opacity-100 transition">
                Privacy Policy
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
