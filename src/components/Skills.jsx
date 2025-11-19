import React from 'react'
import { motion } from 'framer-motion'
import { Code, Palette, Zap, LayoutGrid } from 'lucide-react'

const skills = [
  { icon: Code, label: 'React / TypeScript', level: 92 },
  { icon: Zap, label: 'Animations (Framer/GSAP)', level: 90 },
  { icon: LayoutGrid, label: 'Design Systems', level: 88 },
  { icon: Palette, label: 'UI/UX & Prototyping', level: 94 },
]

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-10">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Skills</h2>
          <p className="mt-3 text-slate-300">A blend of engineering finesse and design sensibility.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map(({ icon: Icon, label, level }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-amber-300/20 bg-slate-900/50 p-6 hover:border-amber-300/40"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-amber-500/15 p-3 text-amber-300 group-hover:bg-amber-500/25 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">{label}</span>
                    <span className="text-amber-200/80 text-sm">{level}%</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-700/60 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
