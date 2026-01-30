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
}

const PricingCard = ({
  name,
  price,
  description,
  features,
  highlighted,
  index,
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
        ? 'md:scale-105 border-2 border-primary shadow-[0_20px_50px_rgba(var(--primary),0.2)] z-10 bg-background'
        : 'border border-primary/20 bg-background hover:border-primary/50 shadow-sm'
        }`}
    >
      {/* Background Pattern yang seragam */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-2xl bg-[radial-gradient(var(--primary)_1px,transparent_1px)] [background-size:16px_16px]" />

      {highlighted && (
        <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 z-20">
          <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-[10px] uppercase tracking-[0.1em] font-black shadow-lg">
            Paling Populer
          </span>
        </div>
      )}

      <div className="relative z-10 space-y-1">
        <h3 className="text-xl font-bold tracking-tight text-primary">
          {name}
        </h3>
        <p className="text-muted-foreground text-xs leading-relaxed font-medium">{description}</p>
      </div>

      <div className="relative z-10 space-y-1">
        <div className="flex items-baseline gap-1 text-primary">
          <span className="text-3xl font-extrabold tracking-tighter">
            Rp {price.toLocaleString('id-ID')}
          </span>
          <span className="text-primary/70 text-sm font-medium">/bln</span>
        </div>
        <p className="text-[10px] text-muted-foreground/60 font-medium">Auto-renew setiap bulan</p>
      </div>

      {/* Button Section - Semua pakai warna Primary */}
      <div className="relative z-10 overflow-hidden rounded-xl">
        <Button
          className={`w-full h-11 text-sm font-bold transition-all duration-500 relative overflow-hidden group/btn ${highlighted
            ? 'bg-primary text-primary-foreground shadow-[0_10px_20px_rgba(var(--primary),0.3)] hover:scale-[1.02]'
            : 'bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground'
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
          <span className="relative z-10">Mulai Sekarang</span>
        </Button>
      </div>

      <div className="relative z-10 space-y-3.5 pt-5 border-t border-primary/10 flex-grow">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3 group/item">
            <div className="mt-0.5 rounded-full p-0.5 bg-primary/10 text-primary transition-colors group-hover/item:bg-primary group-hover/item:text-primary-foreground">
              <Check className="w-3.5 h-3.5 stroke-[3px]" />
            </div>
            <span className="text-xs text-muted-foreground font-medium leading-snug group-hover:text-foreground transition-colors">
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
      name: 'Starter',
      price: 99000,
      description: 'Esensial untuk UMKM yang baru memulai.',
      features: ['1 AI Chatbot', '1,000 Pesan/Bulan', 'Community Support', 'Basic Analytics'],
      highlighted: false,
    },
    {
      name: 'Pro',
      price: 299000,
      description: 'Scale-up bisnis Anda dengan fitur advanced.',
      features: ['5 AI Chatbots', '10,000 Pesan/Bulan', 'Priority Support', 'Full Customization', 'Pro Dashboard', 'API Access'],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 999000,
      description: 'Solusi custom untuk korporasi besar.',
      features: ['Unlimited Chatbots', 'Unlimited Pesan', '24/7 Phone Support', 'Dedicated Manager', 'Custom Security'],
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="relative py-24 px-4 overflow-hidden bg-background">
      {/* Background Decor yang menyatu dengan warna Primary */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-50">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 space-y-4"
        >
          {/* Badge Kecil */}
          <div className="inline-block px-4 py-1.5 mb-2 rounded-full bg-primary/5 border border-primary/10">
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em]">
              Investasi Cerdas
            </span>
          </div>

          {/* Judul Utama dengan Gradient */}
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1]">
            <span className="block text-foreground">Solusi Tepat untuk</span>
            <span className="bg-gradient-to-r from-primary via-[#0077ff]-500 to-cyan-400 bg-clip-text text-transparent">
              Skalakan Bisnis Anda
            </span>
          </h2>

          {/* Sub-judul / Deskripsi */}
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto font-medium leading-relaxed">
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