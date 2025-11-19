import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Background gradient in warm fox tones */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(245,158,11,0.25),transparent),radial-gradient(800px_400px_at_80%_10%,rgba(234,88,12,0.25),transparent)]" />

      {/* Spline scene as interactive firefly/foxfire */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/iO74mq3KeYTXVmpB/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft vignette for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-950/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-2 text-amber-200 mb-6 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Available for freelance projects
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-white drop-shadow-[0_6px_32px_rgba(245,158,11,0.15)]">
            Clever, agile interfaces for the modern web
          </h1>
          <p className="mt-6 text-lg md:text-xl text-amber-100/90 max-w-2xl">
            I’m a Front‑End Developer and UI/UX Designer crafting delightful, accessible experiences with React, animations, and meticulous detail.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#portfolio" className="group relative inline-flex items-center gap-2 rounded-xl px-6 py-3 text-slate-900 font-semibold bg-gradient-to-tr from-amber-400 via-orange-400 to-rose-400 shadow-[0_10px_30px_-10px_rgba(245,158,11,0.6)] transition-transform hover:-translate-y-0.5 active:translate-y-0">
              <span className="relative z-10">View Portfolio</span>
              <span className="relative z-10 inline-block transition-transform group-hover:translate-x-0.5">→</span>
              <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl px-6 py-3 border border-amber-300/30 text-amber-100/90 hover:text-amber-200 hover:border-amber-200/60 transition-colors">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative forest silhouettes */}
      <div aria-hidden className="pointer-events-none absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-slate-950 to-transparent">
        <svg className="absolute inset-x-0 bottom-0 w-full h-full opacity-30" viewBox="0 0 1440 240" preserveAspectRatio="none">
          <defs>
            <linearGradient id="tree" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#0b1220" />
              <stop offset="100%" stopColor="#0a0f1a" />
            </linearGradient>
          </defs>
          <path d="M0,180 L80,160 L120,200 L160,150 L220,210 L280,160 L340,200 L400,170 L460,210 L520,165 L580,205 L640,160 L700,200 L760,170 L820,210 L880,165 L940,205 L1000,160 L1060,200 L1120,170 L1180,210 L1240,165 L1300,205 L1360,160 L1440,180 L1440,240 L0,240 Z" fill="url(#tree)" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
