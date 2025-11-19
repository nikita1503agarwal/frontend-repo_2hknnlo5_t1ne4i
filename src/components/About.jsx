import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-10 items-start"
        >
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">About Me</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I blend front‑end engineering with product thinking to ship interfaces that feel effortless. My toolkit spans React, animations, design systems, and accessibility — always backed by research and iteration.
            </p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Away from the editor, I sketch, hike forest trails, and collect playful micro‑interactions — drawing inspiration from the quiet agility of foxes.
            </p>
          </div>
          <div className="relative p-6 rounded-2xl border border-amber-300/20 bg-gradient-to-br from-amber-500/10 to-orange-500/10">
            <div className="absolute -top-6 -right-3 text-5xl select-none" aria-hidden>🦊</div>
            <ul className="space-y-3 text-amber-100/90">
              <li>• 6+ years crafting UI for web apps</li>
              <li>• Performance‑minded, a11y‑first</li>
              <li>• Systems thinker, detail oriented</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
