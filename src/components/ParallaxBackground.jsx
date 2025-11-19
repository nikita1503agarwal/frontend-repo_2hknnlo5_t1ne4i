import React, { useEffect, useRef } from 'react'

const layers = [
  { speed: 0.02, opacity: 0.12 },
  { speed: 0.06, opacity: 0.09 },
  { speed: 0.1, opacity: 0.07 },
]

const ParallaxBackground = () => {
  const refs = useRef([])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      refs.current.forEach((el, i) => {
        if (!el) return
        const { speed } = layers[i]
        el.style.transform = `translateY(${y * speed}px)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 -z-0">
      {layers.map((l, i) => (
        <div
          key={i}
          ref={el => (refs.current[i] = el)}
          className="absolute inset-0"
          style={{ opacity: l.opacity, backgroundImage: 'url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'screen' }}
          aria-hidden
        />
      ))}
    </div>
  )
}

export default ParallaxBackground
