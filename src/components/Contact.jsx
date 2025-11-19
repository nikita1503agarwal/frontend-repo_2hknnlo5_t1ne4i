import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_0%,rgba(251,146,60,0.15),transparent),radial-gradient(800px_300px_at_10%_20%,rgba(225,29,72,0.12),transparent)]" />
      <div className="container relative mx-auto px-6 md:px-10">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Let’s build together</h2>
          <p className="mt-3 text-slate-300">Have a project in mind? I’d love to hear about it.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => { e.preventDefault(); alert('Thanks for reaching out!'); }}
            className="rounded-2xl border border-amber-300/20 bg-slate-900/50 p-6"
          >
            <label className="block text-slate-200 text-sm">Name</label>
            <input required className="mt-1 w-full rounded-lg bg-slate-800/80 px-4 py-2.5 outline-none border border-slate-700/60 focus:border-amber-400/60" />
            <label className="mt-4 block text-slate-200 text-sm">Email</label>
            <input type="email" required className="mt-1 w-full rounded-lg bg-slate-800/80 px-4 py-2.5 outline-none border border-slate-700/60 focus:border-amber-400/60" />
            <label className="mt-4 block text-slate-200 text-sm">Message</label>
            <textarea required rows="4" className="mt-1 w-full rounded-lg bg-slate-800/80 px-4 py-2.5 outline-none border border-slate-700/60 focus:border-amber-400/60" />
            <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-slate-900 font-semibold bg-gradient-to-tr from-amber-400 via-orange-400 to-rose-400">
              Send message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-amber-300/20 bg-slate-900/50 p-6"
          >
            <div className="space-y-4 text-slate-300">
              <a href="mailto:you@example.com" className="group flex items-center gap-3 hover:text-amber-200">
                <Mail className="w-5 h-5 text-amber-300" />
                you@example.com
              </a>
              <a href="#" className="group flex items-center gap-3 hover:text-amber-200">
                <Github className="w-5 h-5 text-amber-300" />
                github.com/yourhandle
              </a>
              <a href="#" className="group flex items-center gap-3 hover:text-amber-200">
                <Linkedin className="w-5 h-5 text-amber-300" />
                linkedin.com/in/yourhandle
              </a>
            </div>

            <div className="mt-10 h-24 relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-500/10 to-rose-500/10 border border-amber-300/20">
              <motion.div
                initial={{ x: '-20%' }}
                whileInView={{ x: '120%' }}
                viewport={{ once: true }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror' }}
                className="absolute -bottom-6 left-0 w-40 h-40 rounded-full blur-2xl"
                style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.35), transparent 60%)' }}
              />
              <div className="absolute bottom-2 right-4 text-3xl select-none" aria-hidden>🦊</div>
            </div>
          </motion.div>
        </div>

        {/* Footer with fox tail sweep */}
        <div className="mt-16 relative">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-1 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500"
          />
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-2 text-center text-slate-400"
          >
            © {new Date().getFullYear()} Your Name — Crafted with care
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
