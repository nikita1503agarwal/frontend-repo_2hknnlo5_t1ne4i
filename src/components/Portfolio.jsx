import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Motion‑First Marketing Site',
    desc: 'Immersive landing with scroll choreography and micro‑interactions.',
    tags: ['React', 'Framer Motion', 'Design System'],
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'SaaS Dashboard',
    desc: 'Data‑dense UI with accessible components and delightful details.',
    tags: ['React', 'a11y', 'E2E'],
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Design System',
    desc: 'Scalable tokens, components, and guidelines for product teams.',
    tags: ['Tokens', 'Theming', 'Docs'],
    image: 'https://images.unsplash.com/photo-1556761175-129418cb2dfe?q=80&w=1200&auto=format&fit=crop',
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-10">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Portfolio</h2>
            <p className="mt-3 text-slate-300">Selected work with focus on craft and outcomes.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-amber-300/20 bg-slate-900/50 hover:border-amber-300/40"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-slate-300 text-sm">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="rounded-full border border-amber-300/20 bg-amber-500/10 px-2.5 py-1 text-xs text-amber-100/90">{t}</span>
                  ))}
                </div>
              </div>
              <motion.span
                layoutId={`cardGlow-${i}`}
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ boxShadow: 'inset 0 0 80px rgba(251,146,60,0.18)' }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
