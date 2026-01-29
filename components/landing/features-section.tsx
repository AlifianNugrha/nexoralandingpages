'use client'

import React from "react"
import { motion } from "framer-motion"
import { Upload, MessageCircle, Phone, Check } from 'lucide-react'

interface FeatureProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  index: number
  points: string[]
}

const Feature = ({
  icon: Icon,
  title,
  description,
  index,
  points
}: FeatureProps) => {
  const isLeft = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center py-12`}
    >
      {/* Visual Side */}
      <div className={`${!isLeft ? 'md:order-last' : ''}`}>
        <div className="group relative aspect-square bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden flex items-center justify-center transition-colors duration-500 hover:border-primary/20">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />

          <div className="relative z-10 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-28 h-28 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6 mx-auto"
            >
              <Icon className="w-12 h-12 text-primary/80" />
            </motion.div>
            <p className="text-xs tracking-widest uppercase font-semibold text-slate-400">
              Preview Component
            </p>
          </div>
        </div>
      </div>

      {/* Text Content Side */}
      <div className="space-y-8">
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-slate-900"
          >
            {title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-slate-500 leading-relaxed"
          >
            {description}
          </motion.p>
        </div>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-4"
        >
          {points.map((point, i) => (
            <li key={i} className="flex items-center gap-3 group">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/20">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-slate-600 transition-colors group-hover:text-slate-900">{point}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  )
}

export default function FeaturesSection() {
  const features = [
    {
      icon: Upload,
      title: 'Train on Your Data',
      description: 'Upload PDF atau link website, AI langsung paham bisnis Anda tanpa perlu coding manual.',
      points: ['Upload PDF & Web Link', 'AI Langsung Paham Produk', 'Tanpa Training Manual']
    },
    {
      icon: MessageCircle,
      title: 'Human-Like Interaction',
      description: 'Bahasa natural yang luwes. Pelanggan akan merasa seperti berbicara dengan asisten manusia asli.',
      points: ['Bahasa Natural & Manusiawi', 'Respon Instan 24/7', 'Meningkatkan Trust']
    },
    {
      icon: Phone,
      title: 'Seamless Handoff',
      description: 'Butuh sentuhan manusia? AI akan memberikan notifikasi agar Anda bisa ambil alih kapan saja.',
      points: ['Handoff ke Human Agent', 'Isu Kompleks Teratasi', 'Workflow Terintegrasi']
    },
  ]

  return (
    <section id="features" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-4">Features</h2>
            <h3 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Solusi Cerdas untuk Support Anda
            </h3>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Teknologi AI terdepan yang dirancang khusus untuk kebutuhan bisnis modern di Indonesia.
            </p>
          </motion.div>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <Feature
              key={index}
              {...feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}