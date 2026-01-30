'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X, Power } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navLinks = [
    { name: 'Fitur', href: '#features' },
    { name: 'Cara Kerja', href: '#how' },
    { name: 'Harga', href: '#pricing' },
  ]

  const pathD = "M 0,0 L 1,0 L 1,1 L 0.80,1 Q 0.77,1 0.75,0.9 L 0.68,0.2 L 0.32,0.2 L 0.25,0.9 Q 0.23,1 0.20,1 L 0,1 Z"

  return (
    <>
      {/* SVG DEFINITIONS */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="final-solid-concave" clipPathUnits="objectBoundingBox">
            <path d={pathD} />
          </clipPath>
        </defs>
      </svg>

      {/* DESKTOP POWER BUTTON STAY */}
      <div className="hidden md:flex fixed left-1/2 -translate-x-1/2 top-0 z-[160] items-center justify-center pointer-events-none" style={{ height: '80px' }}>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className={`pointer-events-auto flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-90 group relative
            ${isVisible ? 'translate-y-[15px] text-slate-300 hover:text-[#01D2B3]' : 'translate-y-[-20px] text-[#01D2B3]'}
          `}
        >
          {!isVisible && <div className="absolute inset-0 bg-[#01D2B3]/20 blur-xl rounded-full animate-pulse" />}
          <Power size={20} strokeWidth={2.5} className="relative z-10" />
          <div className={`absolute -bottom-2 w-1 h-1 rounded-full bg-[#01D2B3] transition-all duration-500 ${isVisible ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />
        </button>
      </div>

      {/* MAIN NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
        style={{ height: '80px', filter: 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.05)) drop-shadow(0 4px 6px rgba(1, 210, 179, 0.15))' }}
      >
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 w-full h-full md:[clip-path:url(#final-solid-concave)] [clip-path:none] bg-white" />
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" viewBox="0 0 1 1" preserveAspectRatio="none">
            <path d={pathD} fill="none" stroke="rgba(1, 210, 179, 0.25)" strokeWidth="0.004" vectorEffect="non-scaling-stroke" />
          </svg>
          <div className="absolute inset-0 border-b border-slate-100 md:hidden" />
        </div>

        {/* CONTENT CONTAINER - Full Width agar bisa ke ujung kanan */}
        <div className="w-full h-full flex items-center px-6 md:px-12 lg:px-16 relative z-[110]">

          {/* LOGO */}
          <div className={`transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="relative w-9 h-9">
              <Image src="/logo.png" alt="Logo" fill className="object-contain" priority />
            </div>
          </div>

          {/* DESKTOP NAV - PAKAI JUSTIFY-END UNTUK KANAN MAKSIMAL */}
          <div className={`hidden md:flex flex-1 justify-end items-center gap-10 mt-1 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20 pointer-events-none'
            }`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[14px] font-bold text-slate-600 hover:text-[#01D2B3] transition-all tracking-tight"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* MOBILE BURGER */}
          <button className="md:hidden ml-auto p-2 text-slate-900" onClick={() => setIsOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 bg-white z-[200] flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 p-2 text-slate-900"><X size={32} /></button>
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-3xl font-extrabold text-slate-800 tracking-tighter">{link.name}</a>
        ))}
      </div>
    </>
  )
}