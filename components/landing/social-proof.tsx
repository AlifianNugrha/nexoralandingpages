'use client'

import React from "react"
import { motion } from "framer-motion"
import { useLanguage } from './language-context'

export default function SocialProof() {
  const { lang } = useLanguage()

  const t = {
    ID: {
      trustedBy: "Dipercaya oleh ratusan perusahaan"
    },
    EN: {
      trustedBy: "Trusted by hundreds of companies"
    }
  }

  const content = t[lang]

  const companies = [
    { name: 'ITBAAS', src: '/itbaas.png' },
    { name: 'Google', src: '/gogle.jpg' },
    { name: 'cloudflare', src: '/cloud.png' },
    { name: 'linkedin', src: '/lindk.png' },
    { name: 'amazon', src: '/amazon.png' },
    { name: 'shopify', src: '/shopify.png' },
  ]

  const duplicatedCompanies = [...companies, ...companies]

  return (
    <section className="py-16 bg-white  overflow-hidden pt-20 pb-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* HANYA FONT YANG FADE UP */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-muted-foreground mb-12 text-sm font-medium uppercase tracking-wide"
        >
          {content.trustedBy}
        </motion.p>
      </div>

      {/* HANYA MARQUEE YANG FADE UP */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative flex overflow-x-hidden group"
      >
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedCompanies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-8 sm:mx-12 shrink-0"
            >
              <img
                src={company.src}
                alt={company.name}
                className="h-8 sm:h-10 w-auto object-contain opacity-100  transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>

        {/* Efek Gradient Fade Kiri & Kanan */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
      </motion.div>
    </section>
  )
}