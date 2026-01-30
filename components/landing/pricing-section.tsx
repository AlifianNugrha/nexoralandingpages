'use client'

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

interface PricingCardProps {
  name: string
  price: number
  description: string
  features: string[]
  highlighted: boolean
  index: number
  isCustom?: boolean
}

const PricingCard = ({
  name,
  price,
  description,
  features,
  highlighted,
  index,
  isCustom,
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.21, 0.45, 0.32, 0.9]
      }}
      className={`relative rounded-2xl p-6 space-y-6 flex flex-col transition-all duration-500 group ${highlighted
        ? 'md:scale-105 border-2 border-[#01D2B3] shadow-[0_20px_50px_rgba(1,210,179,0.2)] z-10 bg-white'
        : 'border border-[#01D2B3]/20 bg-white hover:border-[#01D2B3]/50 shadow-sm'
        }`}
    >
      {/* Background Pattern internal card */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-2xl bg-[radial-gradient(#01D2B3_1px,transparent_1px)] [background-size:16px_16px]" />

      {highlighted && (
        <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 z-20">
          <span className="bg-[#01D2B3] text-white px-4 py-1 rounded-full text-[10px] uppercase tracking-[0.1em] font-black shadow-lg">
            Paling Populer
          </span>
        </div>
      )}

      <div className="relative z-10 space-y-1">
        <h3 className="text-xl font-bold tracking-tight text-[#01D2B3]">
          {name}
        </h3>
        <p className="text-slate-500 text-xs leading-relaxed font-medium">{description}</p>
      </div>

      <div className="relative z-10 space-y-1">
        <div className="flex items-baseline gap-1 text-slate-900">
          {isCustom ? (
            <span className="text-2xl md:text-3xl font-extrabold tracking-tighter">
              Hubungi Kami
            </span>
          ) : (
            <>
              <span className="text-3xl font-extrabold tracking-tighter">
                Rp {price.toLocaleString('id-ID')}
              </span>
              <span className="text-slate-400 text-sm font-bold">/bln</span>
            </>
          )}
        </div>
        <p className="text-[10px] text-slate-400 font-medium">
          {isCustom ? 'Estimasi harga sesuai kebutuhan' : 'Auto-renew setiap bulan'}
        </p>
      </div>

      <div className="relative z-10 overflow-hidden rounded-xl">
        <Button
          className={`w-full h-11 text-sm font-bold transition-all duration-500 relative overflow-hidden group/btn ${highlighted
            ? 'bg-[#01D2B3] text-white shadow-[0_10px_20px_rgba(1,210,179,0.3)] hover:scale-[1.02] hover:bg-[#00b89c]'
            : 'bg-[#01D2B3]/10 text-[#01D2B3] hover:bg-[#01D2B3] hover:text-white'
            }`}
        >
          {highlighted && (
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
          )}
          <span className="relative z-10">
            {isCustom ? 'Konsultasi Sekarang' : 'Mulai Sekarang'}
          </span>
        </Button>
      </div>

      <div className="relative z-10 space-y-3.5 pt-5 border-t border-slate-100 flex-grow">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3 group/item">
            <div className="mt-0.5 rounded-full p-0.5 bg-[#01D2B3]/10 text-[#01D2B3] transition-colors group-hover/item:bg-[#01D2B3] group-hover/item:text-white">
              <Check className="w-3.5 h-3.5 stroke-[3px]" />
            </div>
            <span className="text-xs text-slate-600 font-medium leading-snug group-hover:text-slate-900 transition-colors">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function PricingSection() {
  const plans = [
    {
      name: 'UMKM',
      price: 60000,
      description: 'Esensial untuk UMKM yang baru memulai.',
      features: ['1 AI Chatbot', '1,000 Pesan/Bulan', 'Community Support', 'Basic Analytics'],
      highlighted: false,
    },
    {
      name: 'Pro',
      price: 500000,
      description: 'Scale-up bisnis Anda dengan fitur advanced.',
      features: ['5 AI Chatbots', '10,000 Pesan/Bulan', 'Priority Support', 'Full Customization', 'Pro Dashboard', 'API Access'],
      highlighted: true,
    },
    {
      name: 'Custom',
      price: 0,
      isCustom: true,
      description: 'Solusi custom untuk korporasi besar.',
      features: ['Custom Chatbot', 'Unlimited Chatbots', 'Unlimited Pesan', '24/7 Phone Support', 'Dedicated Manager', 'Custom Security'],
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="relative py-24 px-4 overflow-hidden bg-white">
      {/* LAYER BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0 L50 50 L0 100" stroke="#01D2B3" strokeWidth="0.1" />
          <path d="M0 20 L50 50 L0 80" stroke="#01D2B3" strokeWidth="0.1" />
          <path d="M0 40 L50 50 L0 60" stroke="#01D2B3" strokeWidth="0.1" />
          <path d="M100 0 L50 50 L100 100" stroke="#01D2B3" strokeWidth="0.1" />
          <path d="M100 20 L50 50 L100 80" stroke="#01D2B3" strokeWidth="0.1" />
          <path d="M100 40 L50 50 L100 60" stroke="#01D2B3" strokeWidth="0.1" />
          <circle cx="50" cy="50" r="0.5" fill="#01D2B3" />
        </svg>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#01D2B3]/5 blur-[120px] rounded-full z-0 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1]">
            <span className="block text-slate-900">Solusi Tepat untuk</span>
            <span className="bg-gradient-to-r from-[#01D2B3] via-[#01D2B3] to-cyan-400 bg-clip-text text-transparent">
              Skalakan Bisnis Anda
            </span>
          </h2>

          <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto font-medium leading-relaxed">
            Sistem harga yang fleksibel dan transparan. Tanpa biaya tersembunyi,
            fokus sepenuhnya pada pertumbuhan performa bisnis Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, index) => (
            <PricingCard key={index} index={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  )
}