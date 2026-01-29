import React from "react"
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Konfigurasi Plus Jakarta Sans
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: 'Nexora - AI Chatbot & IT Solution',
  description: 'Ubah pengunjung menjadi pembeli otomatis dengan AI Chatbot cerdas.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${jakartaSans.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}