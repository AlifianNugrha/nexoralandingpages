'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg text-muted-foreground">
            Temukan jawaban untuk pertanyaan umum tentang layanan kami
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 data-[state=open]:bg-secondary"
            >
              <AccordionTrigger className="hover:no-underline py-4 text-foreground font-semibold text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 p-8 bg-secondary rounded-xl border border-border text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">
            Masih punya pertanyaan?
          </h3>
          <p className="text-muted-foreground mb-6">
            Tim support kami siap membantu 24/7
          </p>
          <a
            href="mailto:support@example.com"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 rounded-lg transition"
          >
            Hubungi Support
          </a>
        </div>
      </div>
    </section>
  )
}
