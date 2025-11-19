import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import ParallaxBackground from './components/ParallaxBackground'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-400/30 selection:text-white">
      <Navbar />

      <div className="relative">
        <ParallaxBackground />
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Timeline />
        <Contact />
      </div>

      {/* Global glowing cursor */}
      <div className="pointer-events-none fixed inset-0 z-50" aria-hidden>
        <div id="cursor-glow" className="absolute w-40 h-40 rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.35), transparent 60%)' }} />
      </div>
      <script dangerouslySetInnerHTML={{ __html: `
        const glow = document.getElementById('cursor-glow');
        window.addEventListener('pointermove', (e) => {
          if (!glow) return;
          const x = e.clientX - 80;
          const y = e.clientY - 80;
          glow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }, { passive: true });
      `}} />
    </div>
  )
}

export default App
