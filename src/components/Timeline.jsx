import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { time: '2023 — Present', title: 'Senior Front‑End Engineer', place: 'Freelance', desc: 'Partnering with startups to ship polished experiences.' },
  { time: '2020 — 2023', title: 'Product Designer / FE Dev', place: 'Studio Foxfire', desc: 'Led design system and UI engineering for web apps.' },
  { time: '2016 — 2020', title: 'B.S. Human‑Computer Interaction', place: 'University', desc: 'Research in interaction design and prototyping.' },
]

const Timeline = () => {
  return (
    <section id="experience" className="relative py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-10">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Experience & Education</h2>
          <p className="mt-3 text-slate-300">A path shaped by curiosity and craft.</p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400/60 via-orange-500/40 to-rose-500/30" />
          <div className="space-y-10">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`relative md:grid md:grid-cols-2 gap-10 items-start ${i % 2 ? 'md:pl-16' : 'md:pr-16'}`}
              >
                <div className={`order-2 md:order-${i % 2 ? '2' : '1'} ${i % 2 ? 'md:pl-10' : 'md:pr-10'}`}>
                  <div className="rounded-2xl border border-amber-300/20 bg-slate-900/50 p-5">
                    <div className="text-amber-200/90 text-sm">{it.time}</div>
                    <div className="mt-1 text-white font-semibold">{it.title}</div>
                    <div className="text-slate-300 text-sm">{it.place}</div>
                    <p className="mt-3 text-slate-300">{it.desc}</p>
                  </div>
                </div>
                <div className={`order-1 md:order-${i % 2 ? '1' : '2'} relative h-0 md:h-auto`}>
                  <div className="md:absolute md:top-6 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-tr from-amber-400 to-rose-400 shadow-[0_0_0_6px_rgba(251,146,60,0.15)]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
