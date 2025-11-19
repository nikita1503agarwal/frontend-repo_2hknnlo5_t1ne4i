import React, { useEffect, useRef } from 'react'

// Fox-inspired, warm forest parallax background without external image dependencies
// - Soft moon glow, layered tree silhouettes, subtle amber haze
// - Lightweight scroll parallax with reduced-motion preference respected

const layerSpecs = [
  { speed: 0.06 }, // far
  { speed: 0.1 },  // mid
  { speed: 0.16 }, // near
]

const ParallaxBackground = () => {
  const refs = useRef([])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const onScroll = () => {
      const y = window.scrollY
      refs.current.forEach((el, i) => {
        if (!el) return
        const speed = layerSpecs[i]?.speed ?? 0.08
        el.style.transform = `translateY(${y * speed}px)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Deep night base with warm radial glow from top-left (foxfire hint) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 600px at 15% 10%, rgba(251,146,60,0.18), rgba(251,146,60,0.06) 35%, transparent 60%), linear-gradient(180deg, #0b1020 0%, #0a0f1a 50%, #0a0d16 100%)',
        }}
      />

      {/* Soft vignette for contrast */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1000px 1000px at 50% 120%, rgba(0,0,0,0.45), transparent 60%), radial-gradient(1600px 800px at -10% -10%, rgba(255,255,255,0.06), transparent 60%)',
          mixBlendMode: 'multiply',
        }}
      />

      {/* Moon + halo */}
      <div className="absolute right-10 top-10 w-24 h-24 rounded-full opacity-70" style={{
        background: 'radial-gradient(circle at 30% 30%, #fff 0%, #fefce8 20%, #fde68a 35%, rgba(255,255,255,0) 60%)',
        filter: 'blur(0.5px)',
      }} />
      <div className="absolute right-6 top-6 w-44 h-44 rounded-full opacity-35 blur-2xl" style={{
        background: 'radial-gradient(circle, rgba(251,191,36,0.35), rgba(251,146,60,0.15) 40%, transparent 70%)',
      }} />

      {/* Far tree line (cool tone) */}
      <svg
        ref={(el) => (refs.current[0] = el)}
        className="absolute bottom-0 left-0 w-[140%] h-[32vh]"
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="far" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#1f2937" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
          </linearGradient>
        </defs>
        <path
          d="M0 220 L40 200 L60 210 L80 180 L120 210 L150 190 L190 210 L220 170 L260 210 L300 190 L340 210 L380 170 L420 210 L460 190 L500 210 L540 180 L580 210 L620 190 L660 210 L700 170 L740 210 L780 190 L820 210 L860 180 L900 210 L940 190 L980 210 L1020 170 L1060 210 L1100 190 L1140 210 L1200 220 L1200 300 L0 300 Z"
          fill="url(#far)"
        />
      </svg>

      {/* Mid tree line (neutral, slightly warmer) */}
      <svg
        ref={(el) => (refs.current[1] = el)}
        className="absolute bottom-0 left-0 w-[150%] h-[36vh]"
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="mid" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#2a2f3f" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1a1f2f" />
          </linearGradient>
        </defs>
        <path
          d="M0 240 L50 230 L90 240 L120 220 L170 240 L210 225 L250 242 L290 220 L340 245 L380 225 L420 240 L460 220 L500 242 L540 225 L580 240 L620 220 L660 242 L700 225 L740 240 L780 220 L820 242 L860 225 L900 240 L940 220 L980 242 L1020 225 L1060 240 L1100 222 L1140 238 L1200 240 L1200 300 L0 300 Z"
          fill="url(#mid)"
        />
      </svg>

      {/* Near tree line (warm) */}
      <svg
        ref={(el) => (refs.current[2] = el)}
        className="absolute bottom-0 left-0 w-[170%] h-[42vh]"
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="near" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#5a3a2a" />
            <stop offset="100%" stopColor="#2b1b15" />
          </linearGradient>
        </defs>
        <path
          d="M0 250 L60 248 L120 252 L180 246 L240 254 L300 245 L360 256 L420 246 L480 258 L540 244 L600 260 L660 246 L720 258 L780 244 L840 260 L900 246 L960 260 L1020 244 L1080 258 L1140 246 L1200 252 L1200 300 L0 300 Z"
          fill="url(#near)"
        />
      </svg>

      {/* Subtle drifting fireflies (low count for perf) */}
      <div className="absolute inset-0">
        {Array.from({ length: 14 }).map((_, i) => {
          const size = Math.random() * 6 + 3
          const left = Math.random() * 100
          const top = Math.random() * 60 + 5
          const opacity = Math.random() * 0.6 + 0.2
          const delay = Math.random() * 3
          return (
            <span
              key={i}
              className="absolute rounded-full bg-amber-300 blur-[1.5px] animate-pulse"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                top: `${top}%`,
                opacity,
                animationDuration: `${2.2 + Math.random() * 2}s`,
                animationDelay: `${delay}s`,
                boxShadow: '0 0 12px 2px rgba(251,191,36,0.5)'
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ParallaxBackground
