'use client'

import React, { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const CHAT_DATA = [
  { id: 1, type: 'bot', text: 'Halo! 👋 Ada yang bisa kami bantu?' },
  { id: 2, type: 'user', text: 'Berapa harga paket tahunan?' },
  { id: 3, type: 'bot', text: 'Kami punya paket hemat Rp 99rb/bulan! 😊' },
  { id: 4, type: 'user', text: 'Wah, boleh juga! Ada trial gratis?' },
  { id: 5, type: 'bot', text: 'Tentu! Ada trial 14 hari buat kamu. 🎉' }
]

export default function DemoSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  const [messages, setMessages] = useState<typeof CHAT_DATA>([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setMessages((prev) => {
        if (index >= CHAT_DATA.length) {
          setIndex(0)
          return []
        }
        return [...prev, CHAT_DATA[index]]
      })
      setIndex((prev) => prev + 1)
    }, 2000)
    return () => clearInterval(interval)
  }, [index])

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=250%",
        pin: true,
        scrub: 1,
      }
    })

    tl.fromTo(headerRef.current,
      { opacity: 0, scale: 0.8, y: "30vh" },
      { opacity: 1, scale: 1.1, y: "30vh", duration: 1.5 }
    )
    tl.to(headerRef.current, { y: 0, scale: 1, duration: 1.5, ease: "power3.inOut" })
    tl.fromTo(cardRef.current,
      { y: 600, opacity: 0, scale: 1.4 },
      { y: 0, opacity: 1, scale: 1, duration: 2, ease: "power2.out" },
      "-=0.5"
    )
    tl.fromTo(buttonRef.current,
      { y: 50, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
      "-=0.5"
    )
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="bg-white relative overflow-hidden min-h-screen">

      {/* LAYER BACKGROUND HEXAGON */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Container untuk Rotasi agar Line bergerak searah pola */}
        <div className="absolute inset-[-50%] rotate-[15deg] scale-[1.3]">

          {/* Pola Hexagon */}
          <div
            className="absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage: `
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='98' viewBox='0 0 56 98'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%231E90FF' fill-opacity='0.2' fill-rule='nonzero'%3E%3Cpath d='M27.99 18.5l26 15v30l-26 15L2 63.5v-30l25.99-15zM6 35.8l21.99-12.7L50 35.8v25.4L27.99 73.9 6 61.2V35.8zM0 30l25.96-15V0h4v15l26 15v30l-26 15V98h-4V75L0 60V30zm4 2.3v25.4l23.99 13.82L52 57.7V32.3L28 18.48 4 32.3z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
              `,
              backgroundSize: '160px',
            }}
          />

          {/* ANIMATED LINE (LASER SCAN EFFECT) */}
          <motion.div
            className="absolute inset-0 z-10"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(30, 144, 255, 0.15), transparent)',
              height: '200px',
              width: '100%',
            }}
            animate={{
              top: ['-20%', '120%']
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Masking Gradient agar bagian tengah tetap fokus */}
        <div className="absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white_85%)]" />

        {/* Soft Glow Colors */}
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[#1E90FF]/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-[#1E90FF]/10 blur-[150px] rounded-full" />
      </div>

      <section className="relative z-10 h-screen w-full flex items-center justify-center px-4">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* KOLOM KIRI */}
          <div className="flex flex-col items-start gap-8">
            <div ref={headerRef} className="space-y-4">
              <h2 className="text-5xl sm:text-7xl font-black leading-[1.1] tracking-tighter text-slate-900">
                Effisiensi Ada <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1E90FF] via-[#1E90FF] to-[#00BFFF]">
                  Ditangan Anda
                </span>

              </h2>
              <p className="text-lg text-slate-600 max-w-md">
                Coba sendiri dan rasakan pengalaman chatbot AI yang berbeda dengan teknologi terbaru kami.
              </p>
            </div>

            <div ref={buttonRef} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1E90FF] to-[#00BFFF] rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <button className="relative bg-[#1E90FF] hover:bg-[#00BFFF] text-white font-black uppercase tracking-widest text-xs px-10 py-5 rounded-xl transition-all shadow-2xl active:scale-95 flex items-center gap-2">
                Mulai Chat Sekarang
              </button>
            </div>
          </div>

          {/* KOLOM KANAN: CARD CHAT */}
          <div ref={cardRef} className="w-full">
            <div className="bg-white/90 backdrop-blur-md rounded-[2.5rem] border-2 border-[#1E90FF] overflow-hidden shadow-[0_0_50px_-12px_rgba(30,144,255,0.3)]">
              <div className="h-[500px] flex flex-col">
                <div className="bg-[#1E90FF] text-white px-8 py-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold backdrop-blur-md">AI</div>
                  <div>
                    <h3 className="font-bold text-sm">Customer Support AI</h3>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      <p className="text-[10px] opacity-80 uppercase tracking-widest font-bold">Automated Demo</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-8 space-y-4 bg-slate-50/50 scroll-smooth">
                  <AnimatePresence initial={false}>
                    {messages.map((msg) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, x: msg.type === 'user' ? 20 : -20, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm font-medium shadow-sm ${msg.type === 'user'
                          ? 'bg-[#1E90FF] text-white rounded-tr-none'
                          : 'bg-white text-slate-700 rounded-tl-none border border-slate-100'
                          }`}>
                          {msg.text}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                <div className="border-t border-slate-100 p-6 bg-white">
                  <div className="flex gap-2">
                    <div className="flex-1 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-xs text-slate-400 font-medium italic flex items-center gap-2">
                      <span className="flex gap-1">
                        <span className="w-1 h-1 bg-slate-300 rounded-full animate-bounce"></span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                      </span>
                      AI sedang mengetik...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}