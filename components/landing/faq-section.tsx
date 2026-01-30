'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { motion } from 'framer-motion'
import { MessageCircleQuestion, HelpCircle, ArrowRight } from 'lucide-react'

export default function FAQSection() {
  const faqs = [
    {
      question: 'Apakah data saya aman?',
      answer:
        'Ya, kami menggunakan enkripsi tingkat enterprise (AES-256) dan mematuhi standar keamanan internasional seperti ISO 27001. Semua data tersimpan di server yang aman dengan backup harian.',
    },
    {
      question: 'Bisakah saya customize warnanya sesuai branding?',
      answer:
        'Tentu! Paket Pro dan Enterprise memungkinkan customization penuh warna, logo, dan tampilan chatbot sesuai brand identity Anda. Paket Starter memiliki customization dasar.',
    },
    {
      question: 'Bagaimana jika AI salah menjawab?',
      answer:
        'AI kami terus belajar dari setiap interaksi. Anda bisa memperbaiki jawaban langsung di dashboard, dan sistem akan menggunakannya untuk pelatihan berikutnya. Untuk kasus kompleks, ada fitur seamless handoff ke tim support manusia.',
    },
    {
      question: 'Berapa lama setup awal?',
      answer:
        'Hanya 2 menit! Upload PDF atau masukkan link website Anda, dan chatbot siap bekerja. Tidak perlu coding atau konfigurasi teknis yang rumit.',
    },
    {
      question: 'Apakah ada free trial?',
      answer:
        'Ya, kami menawarkan trial gratis 14 hari penuh untuk semua paket. Tidak perlu kartu kredit untuk memulai. Anda bisa mencoba semua fitur tanpa batasan.',
    },
    {
      question: 'Bagaimana dengan integrasi dengan sistem yang sudah ada?',
      answer:
        'Kami menyediakan API dan integrasi pre-built dengan lebih dari 50 platform populer seperti Shopify, WordPress, HubSpot, dan lainnya. Tim enterprise support kami siap membantu integrasi custom.',
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header dengan gaya Gradient yang konsisten */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
            <HelpCircle className="w-3 h-3" />
            Support Center
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
            Punya <span className="bg-gradient-to-r from-primary to-[#01D2B3] bg-clip-text text-transparent">Pertanyaan?</span>
          </h2>
          <p className="text-muted-foreground font-medium">
            Segala hal yang perlu Anda ketahui tentang layanan kami.
          </p>
        </motion.div>

        {/* Accordion dengan Style Card Minimalis */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/60 rounded-xl px-4 bg-background/50 backdrop-blur-sm transition-all duration-300 data-[state=open]:border-primary/50 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="hover:no-underline py-5 text-foreground font-bold text-left md:text-lg hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Call to Action (CTA) Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-2xl bg-gradient-to-b from-secondary/50 to-secondary border border-border flex flex-col items-center text-center space-y-6"
        >
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <MessageCircleQuestion className="text-primary-foreground w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-black text-foreground">
              Masih Belum Menemukan Jawaban?
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto font-medium">
              Jangan ragu untuk menghubungi tim support kami yang siap membantu 24/7.
            </p>
          </div>
          <a
            href="mailto:support@example.com"
            className="group flex items-center gap-2 bg-foreground text-background hover:bg-primary hover:text-primary-foreground font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-xl"
          >
            Hubungi Kami Sekarang
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}